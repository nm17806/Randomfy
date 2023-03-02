import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <div>
      <footer className="foot">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
    </div>
    
  );
};

export default Footer;



