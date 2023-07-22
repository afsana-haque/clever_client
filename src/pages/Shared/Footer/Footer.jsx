import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="footer footer-center p-10 bg-slate-900 text-white rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4 text-2xl">
      <a href='#'><FaTwitter></FaTwitter></a> 
      <a href='#'><FaYoutube></FaYoutube></a> 
      <a href='https://www.facebook.com/profile.php?id=100077112673713'><FaFacebookF></FaFacebookF></a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by Clever</p>
  </div>
</footer>
    );
};

export default Footer;