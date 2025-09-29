// import React from "react";
// import slulogo from "../assets/slu-logo-blue.png";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const isLoggedIn = Boolean(localStorage.getItem("authToken"));
//   const isAdmin = isLoggedIn && localStorage.getItem("userType") === "admin";

//   return (
//     <>
//       {/* Top strip */}
//       <div className="flex justify-end bg-[#003da5] text-white p-3">
//         <nav className="px-6 space-x-4 font-['Crimson_Pro'] text-[16px] font-bold">
//          {isLoggedIn ? (
//            <button
//              onClick={() => {
//                localStorage.removeItem("authToken");
//                localStorage.removeItem("userType");
//                navigate("/");
//              }}
//              className="cursor-pointer"
//            >
//              Logout
//            </button>
//          ) : (
//            <button
//              onClick={() => navigate("/login")}
//              className="cursor-pointer"
//            >
//              Login
//            </button>
//          )}

//           <button onClick={() => navigate("/contact")} className="cursor-pointer">Contact US</button>
//           {/* <a href="https://www.slu.edu/apply.php">Apply</a> */}
//         </nav>
//       </div>

//       {/* Main Navbar */}
//       <section className="flex justify-between items-center h-22 bg-white border-b border-gray-300">
//         {/* Logo */}
//         <img
//           src={slulogo}
//           alt="TWA Logo"
//           className="ml-10 h-[150px] cursor-pointer"
//           onClick={() => navigate("/")}
//         />

//         {/* Navigation buttons */}
//         <div className="flex justify-end pr-8 space-x-6 font-['Crimson_Pro'] text-md text-[#003DA5] font-bold">
//           <button
//             onClick={() => navigate("/who-we-are")}
//             className="cursor-pointer"
//           >
//             Who We Are
//           </button>
//           <button
//             onClick={() => navigate("/who-we-serve")}
//             className="cursor-pointer"
//           >
//             Who We Serve
//           </button>
//           <button
//             onClick={() => navigate("/how-to-support")}
//             className="cursor-pointer"
//           >
//             How to Support
//           </button>
//           <button onClick={() => navigate("/news")} className="cursor-pointer">
//             News
//           </button>
//           {isLoggedIn && (
//             <button
//               onClick={() => navigate("/video")}
//               className="cursor-pointer"
//             >
//               Video Platform
//             </button>
//           )}
//           {isAdmin && (
//             <button
//               onClick={() => navigate("/admin")}
//               className="cursor-pointer"
//             >
//               Admin
//             </button>
//           )}
//           <button onClick={() => navigate("/profile")} className="cursor-pointer">
//             Profile
//           </button>
          
//           {/* <button
//             onClick={() => navigate("/contact")}
//             className="cursor-pointer"
//           >
//             Contact
//           </button> */}

//           {/* Logout (optional) */}
//           {/* <button
//             className="cursor-pointer outline px-3 py-2 rounded-xl hover:bg-[#003DA5] hover:text-white"
//             onClick={() => navigate("/")}
//           >
//             Logout
//           </button> */}
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useState } from "react";
import slulogo from "../assets/slu-logo-blue.png";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const isAdmin = isLoggedIn && localStorage.getItem("userType") === "admin";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userType");
    navigate("/");
  };

  return (
    <>
      {/* Top strip */}
      <div className="flex justify-end bg-[#003da5] text-white p-3">
        <nav className="px-6 space-x-4 font-['Crimson_Pro'] text-sm md:text-[16px] font-bold">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="cursor-pointer">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate("/login")} className="cursor-pointer">
              Login
            </button>
          )}
          <button onClick={() => navigate("/contact")} className="cursor-pointer">
            Contact Us
          </button>
        </nav>
      </div>

      {/* Main Navbar */}
      <section className="flex justify-between items-center bg-white border-b border-gray-300 px-6">
        {/* Logo */}
        <img
          src={slulogo}
          alt="TWA Logo"
          className="h-[80px] md:h-[90px] lg:h-[110px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-end pr-4 space-x-4 md:space-x-6 font-['Crimson_Pro'] text-sm md:text-md lg:text-lg text-[#003DA5] font-bold">
          <button className='cursor-pointer' onClick={() => navigate("/who-we-are")}>Who We Are</button>
          <button className='cursor-pointer' onClick={() => navigate("/who-we-serve")}>Who We Serve</button>
          <button className='cursor-pointer' onClick={() => navigate("/how-to-support")}>How to Support</button>
          <button className='cursor-pointer' onClick={() => navigate("/news")}>News</button>
          {isLoggedIn && <button className='cursor-pointer' onClick={() => navigate("/video")}>Video Platform</button>}
          {isAdmin && <button className='cursor-pointer' onClick={() => navigate("/admin")}>Admin</button>}
          <button className='cursor-pointer' onClick={() => navigate("/profile")}>Profile</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </section>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 font-['Crimson_Pro'] text-[#003DA5] font-bold space-y-4">
          <button
            onClick={() => {
              navigate("/who-we-are");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            Who We Are
          </button>
          <button
            onClick={() => {
              navigate("/who-we-serve");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            Who We Serve
          </button>
          <button
            onClick={() => {
              navigate("/how-to-support");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            How to Support
          </button>
          <button
            onClick={() => {
              navigate("/news");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            News
          </button>
          {isLoggedIn && (
            <button
              onClick={() => {
                navigate("/video");
                toggleMenu();
              }}
              className="block w-full text-left"
            >
              Video Platform
            </button>
          )}
          {isAdmin && (
            <button
              onClick={() => {
                navigate("/admin");
                toggleMenu();
              }}
              className="block w-full text-left"
            >
              Admin
            </button>
          )}
          <button
            onClick={() => {
              navigate("/profile");
              toggleMenu();
            }}
            className="block w-full text-left"
          >
            Profile
          </button>
        </div>
      )}
    </>
  );
}