import { useState } from "react";

const Header = () => {
  const [login, setlogin] = useState("Login");
  const handlelogin = () => {
    if (login === "Login") {
      setlogin("Logout");
    } else {
      setlogin("Login");
    }
  };

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://imgs.search.brave.com/bbbM8VrzmP3X4rgRtEvcwdOu3MCRl7wCk68j1VMb1o8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9mb29k/LWNsb2NoZS0yODM2/bGQucG5nP253bT0x/Jm53cz0xJmluZHVz/dHJ5PWZvb2Qmc2Y9"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handlelogin}>{login}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
