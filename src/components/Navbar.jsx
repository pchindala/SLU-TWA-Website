import React from "react";
import slulogo from "../assets/slu-logo-blue.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const isAdmin = isLoggedIn && localStorage.getItem("userType") === "admin";

  return (
    <>
      {/* Top strip */}
      <div className="flex justify-end bg-[#003da5] text-white p-3">
        <nav className="px-6 space-x-4 font-['Crimson_Pro'] text-[16px] font-bold">
         {isLoggedIn ? (
           <button
             onClick={() => {
               localStorage.removeItem("authToken");
               localStorage.removeItem("userType");
               navigate("/");
             }}
             className="cursor-pointer"
           >
             Logout
           </button>
         ) : (
           <button
             onClick={() => navigate("/login")}
             className="cursor-pointer"
           >
             Login
           </button>
         )}


          <button onClick={() => navigate("/contact")} className="cursor-pointer">Contact US</button>
          {/* <a href="https://www.slu.edu/apply.php">Apply</a> */}
        </nav>
      </div>

      {/* Main Navbar */}
      <section className="flex justify-between items-center h-22 bg-white border-b border-gray-300">
        {/* Logo */}
        <img
          src={slulogo}
          alt="TWA Logo"
          className="ml-10 h-[150px] cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Navigation buttons */}
        <div className="flex justify-end pr-8 space-x-6 font-['Crimson_Pro'] text-md text-[#003DA5] font-bold">
          <button
            onClick={() => navigate("/who-we-are")}
            className="cursor-pointer"
          >
            Who We Are
          </button>
          <button
            onClick={() => navigate("/who-we-serve")}
            className="cursor-pointer"
          >
            Who We Serve
          </button>
          <button
            onClick={() => navigate("/how-to-support")}
            className="cursor-pointer"
          >
            How to Support
          </button>
          <button onClick={() => navigate("/news")} className="cursor-pointer">
            News
          </button>
          {isLoggedIn && (
            <button
              onClick={() => navigate("/video")}
              className="cursor-pointer"
            >
              Video Platform
            </button>
          )}
          {isAdmin && (
            <button
              onClick={() => navigate("/admin")}
              className="cursor-pointer"
            >
              Admin
            </button>
          )}

          {/* <button
            onClick={() => navigate("/contact")}
            className="cursor-pointer"
          >
            Contact
          </button> */}

          {/* Logout (optional) */}
          {/* <button
            className="cursor-pointer outline px-3 py-2 rounded-xl hover:bg-[#003DA5] hover:text-white"
            onClick={() => navigate("/")}
          >
            Logout
          </button> */}
        </div>
      </section>
    </>
  );
}
