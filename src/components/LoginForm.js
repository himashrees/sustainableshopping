

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './LoginForm.css'; // Ensure you have the correct CSS

// function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
//   const [newPassword, setNewPassword] = useState('');
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/login', formData);
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userId', response.data.userId); // Storing userId
//       setSuccess('Login successful');
//       setError('');
//       history.push('/Home'); // Redirect to Home
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 401) {
//           setError('Wrong email or password. Please try again.');
//         } else if (error.response.status === 404) {
//           setError('This user is not registered.');
//         } else {
//           setError('An error occurred during login. Please try again later.');
//         }
//       } else {
//         setError('An error occurred during login. Please check your internet connection.');
//       }
//       setSuccess('');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleForgotPasswordSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/api/forgotPassword', {
//         email: formData.email,
//         newPassword: newPassword,
//       });
//       setSuccess('Password reset successful');
//       setError('');
//       setShowForgotPasswordModal(false);
//     } catch (error) {
//       setError(error.response.data.error);
//       setSuccess('');
//     }
//   };

//   return (
//     <>
//       <div className="form-container">
//         <form className="form" onSubmit={handleSubmit}>
//           <h2>Sign In</h2>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <br />
//             <button type="button" onClick={() => setShowForgotPasswordModal(true)}>
//               Forgot Password?
//             </button>
//           </div>
//           {error && <div className="error">{error}</div>}
//           {success && <div className="success">{success}</div>}
//           <button type="submit">Login</button>
//         </form>
//       </div>

//       {showForgotPasswordModal && (
//         <div className="modal">
//           <form onSubmit={handleForgotPasswordSubmit}>
//             <h2>Forgot Password</h2>
//             <div>
//               <input
//                 type="password"
//                 name="newPassword"
//                 placeholder="New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 required
//               />
//             </div>
//             {error && <div className="error">{error}</div>}
//             {success && <div className="success">{success}</div>}
//             <br />
//             <button type="submit">Reset Password</button>
//             <button type="button" onClick={() => setShowForgotPasswordModal(false)}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './LoginForm.css'; // Ensure you have the correct CSS

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('cid', response.data.userId); // Storing userId (cid)
      setSuccess('Login successful');
      setError('');
      history.push('/Home'); // Redirect to Home
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError('Wrong email or password. Please try again.');
        } else if (error.response.status === 404) {
          setError('This user is not registered.');
        } else {
          setError('An error occurred during login. Please try again later.');
        }
      } else {
        setError('An error occurred during login. Please check your internet connection.');
      }
      setSuccess('');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/forgotPassword', {
        email: formData.email,
        newPassword: newPassword,
      });
      setSuccess('Password reset successful');
      setError('');
      setShowForgotPasswordModal(false);
    } catch (error) {
      setError(error.response.data.error);
      setSuccess('');
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <button type="button" onClick={() => setShowForgotPasswordModal(true)}>
              Forgot Password?
            </button>
          </div>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
          <button type="submit">Login</button>
        </form>
      </div>

      {showForgotPasswordModal && (
        <div className="modal">
          <form onSubmit={handleForgotPasswordSubmit}>
            <h2>Forgot Password</h2>
            <div>
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <br />
            <button type="submit">Reset Password</button>
            <button type="button" onClick={() => setShowForgotPasswordModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default LoginForm;
