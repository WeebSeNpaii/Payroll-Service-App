import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Companylogo from "../assets/Images/icons/Companylogo3.png";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `relative text-white px-1 transition-all duration-300 ease-in-out
  ${isActive ? "font-semibold" : ""}
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-[95%]"}`;

  const dropdownLinkClasses = ({ isActive }) =>
    `relative text-sm px-1 py-2 block rounded transition duration-300 ease-in-out
  ${isActive ? "font-semibold " : ""}
  hover:after:absolute hover:font-medium hover:after:bg-black `;


  return (
    <div className="fixed top-0 left-0 w-full h-[75px] px-6 md:px-20 bg-[#0a001f] text-white z-50 border-b-1 border-slate-500">
      <div className="relative h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="h-16 md:h-19" src={Companylogo} alt="Logo" />
        </Link>

        {/* Center Nav */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center gap-10 h-full">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/About" className={linkClasses}>
            About Us
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative group h-full flex justify-center items-center "
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span className="text-white text-lg cursor-pointer relative hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-black ">
              Services
            </span>

            <div
              className={`absolute top-[65px] left-0 w-[550px] bg-[#0a001f] shadow-md border border-gray-200 rounded-md z-10 p-6
    transform translate-y-2 scale-y-0 duration-200 ease-in-out origin-top
    ${
      dropdown
        ? "opacity-100 scale-y-100 visible"
        : "opacity-50 scale-y-95 invisible pointer-events-none"
    }`}
            >
              <div className="grid grid-cols-2 gap-5">
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/Services/Software-Development"
                      className={dropdownLinkClasses}
                    >
                      Software Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Services/Cloud-App-Development"
                      className={dropdownLinkClasses}
                    >
                      Cloud App Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Services/HireTeam"
                      className={dropdownLinkClasses}
                    >
                      Hire Team
                    </NavLink>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to="/Services/Mobile-App-Development"
                      className={dropdownLinkClasses}
                    >
                      Mobile App Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Services/Salesforce-App-Development"
                      className={dropdownLinkClasses}
                    >
                      Salesforce App Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Services/Testing-and-QA"
                      className={dropdownLinkClasses}
                    >
                      Testing & QA
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <NavLink to="/Services/HireTeam" className={linkClasses}>
            Hire Team
          </NavLink>
        </div>

        {/* Join Us Button */}
        <div className="hidden lg:block">
          <Link to="/ContactUs">
            <div className="animated-gradient-border">
              <button  className="block px-6 md:px-8 py-2 text-sm md:text-base bg-[#0a001f] text-white font-semibold rounded-full text-center">
                JOIN US
              </button>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          {mobileMenuOpen ? (
            <X
              size={28}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMobileMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
      <div className="md:hidden mt-2 bg-[#0a001f] rounded shadow-md p-4 z-50 w-full relative overflow-visible">

          <ul className="flex flex-col items-start space-y-4 text-left w-full">
            <li>
              <NavLink
                to="/"
                className=" font-medium text-base px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className=" font-medium text-base px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li className=" px-2 font-semibold">Services</li>
            <ul className="pl-4 space-y-2 text-sm">
              <li>
                <NavLink
                  to="/Services/Software-Development"
                  className={dropdownLinkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Software Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Services/Cloud-App-Development"
                  className={dropdownLinkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cloud App Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Services/HireTeam"
                  className={dropdownLinkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Services/Mobile-App-Development"
                  className={dropdownLinkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mobile App Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Services/Salesforce-App-Development"
                  className={dropdownLinkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Salesforce App Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Services/Testing-and-QA"
                  className={dropdownLinkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testing & QA
                </NavLink>
              </li>

              

            </ul>

   <li>
  <NavLink to="/ContactUs">
    <div className="relative w-fit mx-auto">
      <div className="animated-gradient-border">
        <button
          className="relative z-10 px-4 md:px-8 py-2 text-sm md:text-base bg-[#0a001f] text-white font-semibold rounded-full text-center w-full"
          onClick={() => setMobileMenuOpen(false)}
        >
          JOIN US
        </button>
      </div>
    </div>
  </NavLink>
</li>


            
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
