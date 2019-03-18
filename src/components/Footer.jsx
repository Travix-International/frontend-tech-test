import React from "react";

const Footer = props => {
  return (
    <footer id="footer" className="page-footer">
      <div className="text-center">{props.footerText}</div>
    </footer>
  );
};

export default Footer;
