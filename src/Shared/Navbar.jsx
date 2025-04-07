// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   // Active link checker function
//   const activeLink = (path) =>
//     location.pathname === path ? "border-b-2 px-2 border-blue-500" : "";

//   return (
//     <div className="md:py-5 py-2">
//       <div className="navbar w-[90%] mx-auto">
//         <div className="navbar-start">
//           {/* Mobile Dropdown */}
//           <div className="dropdown">
//             <button
//               onClick={toggleDropdown}
//               role="button"
//               className="px-3 lg:hidden"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="inline-block h-10 w-10 -ml-5 mr-3 stroke-current"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>

//             {isOpen && (
//               <ul className="menu menu-sm dropdown-content  rounded-box z-10 mt-3 w-24 p-2  text-[18px] font-medium transition-all duration-600 ease-in-out">
//                 <li>
//                   <Link
//                     to="/"
//                     className={`py-2 ${activeLink("/")}`}
//                     onClick={closeDropdown}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/about"
//                     className={`py-2 ${activeLink("/about")}`}
//                     onClick={closeDropdown}
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/services"
//                     className={`py-2 ${activeLink("/services")}`}
//                     onClick={closeDropdown}
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className={`py-2 ${activeLink("/contact")}`}
//                     onClick={closeDropdown}
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </div>

//           {/* Logo */}
//           <img
//             className="w-20 h-20 md:w-26 ml-4 md:h-26"
//             src="https://i.ibb.co.com/vCgL3N5g/logo.png"
//             alt="Logo"
//           />
//         </div>

//         {/* Desktop Navbar */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="flex gap-16 justify-center items-center md:text-[18px] font-semibold">
//             <li>
//               <Link
//                 to="/"
//                 className={`py-2 ${activeLink("/")} hover:border-b-2 hover:px-2 transition-all duration-600 ease-in-out hover:border-blue-500`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className={`py-2 ${activeLink("/about")} hover:border-b-2 hover:px-2 hover:border-blue-500 transition-all duration-600 ease-in-out`}
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className={`py-2 ${activeLink("/services") } hover:border-b-2 hover:px-2 hover:border-blue-500 transition-all duration-600 ease-in-out`}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className={`py-2 ${activeLink("/contact")} hover:border-b-2 hover:px-2 hover:border-blue-500 transition-all duration-600 ease-in-out`}
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Login Button */}
//         <div className="navbar-end">
//           <a className="btn rounded-full md:px-5 bg-[#2d83c2] text-white font-semibold">
//             Login To Order
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Active link checker function (Mobile: Color Change)
  const activeLink = (path) =>
    location.pathname === path
      ? "text-blue-500 md:text-gray-700 md:border-b-2 md:px-2 md:border-blue-500 font-semibold"
      : "text-gray-700";

  return (
    <div className=" backdrop-blur-md fixed w-full shadow-lg top-0 z-50 ">
      <div className="navbar w-[90%] mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="relative lg:hidden">
            <button onClick={toggleDropdown} role="button" className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-10 w-10 -ml-5 mr-3 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {isOpen && (
              <div className=" left-0 mt-3 w-full p-16 rounded-lg bg-white  backdrop-blur-xl  z-50 fixed inset-0   ">
                <ul className="text-[18px] font-medium">
                  <li>
                    <Link
                      to="/"
                      className={`py-2 block ${activeLink("/")}`}
                      onClick={closeDropdown}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`py-2 block ${activeLink("/about")}`}
                      onClick={closeDropdown}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className={`py-2 block ${activeLink("/services")}`}
                      onClick={closeDropdown}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={`py-2 block ${activeLink("/contact")}`}
                      onClick={closeDropdown}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Logo */}
          <img
            className="w-16 h-16 md:w-20 ml-4 md:h-20"
            src="https://i.ibb.co.com/fdVXqBTz/50f9a326-1cff-4435-8c7f-775f88c763bd-removebg-preview.png"
            alt="Logo"
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-16 justify-center items-center md:text-[18px] font-semibold">
            <li>
              <Link
                to="/"
                className={`py-2 ${activeLink(
                  "/"
                )} hover:border-b-2 hover:px-2 transition-all duration-600 ease-in-out hover:border-blue-500`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`py-2 ${activeLink(
                  "/about"
                )} hover:border-b-2 hover:px-2 hover:border-blue-500 transition-all duration-600 ease-in-out`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`py-2 ${activeLink(
                  "/services"
                )} hover:border-b-2 hover:px-2 hover:border-blue-500 transition-all duration-600 ease-in-out`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`py-2 ${activeLink(
                  "/contact"
                )} hover:border-b-2 hover:px-2 hover:border-blue-500 transition-all duration-600 ease-in-out`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="navbar-end">
          <Link>
          <p className="bg-gradient-to-r from-blue-600 mt-5 to-blue-200 px-10 py-3 rounded-full text-white cursor-pointer">
            Contact Us
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
