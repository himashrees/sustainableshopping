// import React from "react";
// import { Link } from "react-router-dom";
// import "./Cart.css";

// const Cart = ({ cart, setCart }) => {
//   const handleRemoveFromCart = (product) => {
//     const updatedCart = cart.filter((item) => item.id !== product.id);
//     setCart(updatedCart);
//   };

//   const handleBuyNow = (product) => {
//     alert(`Proceeding to buy: ${product.name}`);
//     // Implement your buy logic here (e.g., redirect to a payment page)
//   };

//   return (
//     <div className="cart-page">
//       <nav>
//         <h1>Root & Rise</h1>
//         <Link to="/Home">Back to Dashboard</Link>
//       </nav>
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="cart-item-image"
//                 onError={(e) =>
//                   (e.target.src =
//                     "https://via.placeholder.com/150?text=No+Image")
//                 }
//               />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>Category: {item.category}</p>
//                 <p>Price: ₹{item.price}</p>
//                 <div className="cart-item-actions">
//                   <button onClick={() => handleBuyNow(item)}>Buy Now</button>
//                   <button onClick={() => handleRemoveFromCart(item)}>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const handleBuyNow = (product) => {
    if (product.purchaseLink) {
      // Redirect to the product's purchase link
      window.open(product.purchaseLink, "_blank"); // Open in a new tab
    } else {
      alert("Purchase link not available for this product.");
    }
  };

  return (
    <div className="cart-page">
      <nav>
        <h1>Root & Rise</h1>
        <Link to="/Home">Back to Dashboard</Link>
      </nav>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/150?text=No+Image")
                }
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ₹{item.price}</p>
                <div className="cart-item-actions">
                  <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                  <button onClick={() => handleRemoveFromCart(item)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
