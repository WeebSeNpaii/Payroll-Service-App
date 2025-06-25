import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-10 border-t-1 border-slate-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-10 px-6 mt-10">
        {/* Logo and Description */}
        <div className="w-full md:w-64 flex flex-col gap-6">
          <span className="text-3xl font-bold">Logo</span>
          <p className="text-sm text-gray-400">
            Agile, expert, and efficient — we provide IT services across custom
            development, BI, consulting, staffing, and online commerce.
          </p>
        </div>

        {/* Important Links */}
        <div className="w-full md:w-40 flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Important Links</h4>
          <Link to="/About" className="text-gray-400 hover:text-white text-sm">
            About Us
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white text-sm">
            Our Services
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white text-sm">
            Contact Us
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white text-sm">
            Hire Team
          </Link>
        </div>

        {/* Office Info */}
        <div className="w-full md:w-64 flex flex-col gap-3">
          <h4 className="text-lg font-semibold">Corporate Office</h4>
          <p className="text-sm text-gray-400">
            2475 Northwind Parkway, Suite 200
            <br />
            Alpharetta, Georgia 30009
            <br />
            Phone: +1 678-925-9466
            <br />
            Email: Info@stellarconsulting.com
            <br />
            Website: www.stellarconsulting.com
          </p>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-40 flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <Link to="#" className="text-gray-400 hover:text-white text-sm">
            LinkedIn
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white text-sm">
            Instagram
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white text-sm">
            Facebook
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white text-sm">
            YouTube
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl border-t border-gray-600 mt-12 mx-auto"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-6 text-center">
        <span className="text-gray-400 text-sm">© Clariquent Technologies 2025</span>
      </div>
    </div>
  );
};

export default Footer;
