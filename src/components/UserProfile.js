import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Ensure you have the correct CSS

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [updatedUserDetails, setUpdatedUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Fetch the user profile based on cid (now Long)
  useEffect(() => {
    const cid = localStorage.getItem('cid'); // Fetch cid from localStorage

    if (!cid) {
      setError('User not logged in');
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        console.log('Fetching user profile for cid:', cid); // Debugging line
        const response = await axios.get(`http://localhost:8080/api/${cid}/profile`);
        console.log('Received user profile data:', response.data); // Debugging line

        setUserProfile(response.data);
        setUpdatedUserDetails({
          name: response.data.name,
          phone: response.data.phone,
          email: response.data.email,
        }); // Ensure the response fields are correctly mapped to the state
      } catch (error) {
        console.error('Error fetching user profile:', error); // Debugging line
        setError('Failed to fetch user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []); // Runs once on component mount

  // Handle input changes for the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the form submission to update the user profile
  const handleSubmit = async (event) => {
    event.preventDefault();
    const cid = localStorage.getItem('cid');

    if (!cid) {
      setError('User not logged in');
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/${cid}/profile`, // Use cid in the PUT request
        updatedUserDetails
      );

      if (response.data) {
        setUpdateSuccess(true); // Display success message
        setUserProfile(updatedUserDetails); // Update the profile with the new data
      }
    } catch (error) {
      setError('Failed to update profile');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {updateSuccess && <p className="success-message">Profile updated successfully!</p>}
      {userProfile ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={updatedUserDetails.name}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={updatedUserDetails.email}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={updatedUserDetails.phone}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <button type="submit" className="button">Save</button>
        </form>
      ) : (
        <div>No profile data available</div>
      )}
    </div>
  );
};

export default UserProfile;
