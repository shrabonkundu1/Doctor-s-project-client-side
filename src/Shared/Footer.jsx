import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#131213] text-white">
      <footer className="footer sm:footer-horizontal w-[95%] mx-auto content md:pl-40 md:py-26 py-10 p-2 md:p-20">
        <aside className="md:-mt-14 ">
         <img className="h-40 w-40 -ml-8 md:-ml-0" src="https://i.ibb.co.com/vCgL3N5g/logo.png" alt="" />
          <p>
            Master Dental Sergary Ltd.
            <br />
            Providing reliable treatment since 1995
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
