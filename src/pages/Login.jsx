import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/controller/login";
import { signUpUser } from "../api/controller/SignUp";
export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setPasswordError("");
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Get form values from the DOM
    const fullNameInput = document.querySelector('input[name="fullName"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    const fullName = isRegister && fullNameInput ? fullNameInput.value.trim() : null;
    const email = emailInput ? emailInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    if (isRegister && !fullName) {
      setPasswordError("Full Name is required.");
      return;
    }
    if (!email) {
      setPasswordError("Email is required.");
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include 1 lowercase, 1 uppercase, 1 number, and 1 special character."
      );
      return;
    }

    if (!isRegister) {
    // Use actual form values for login
    loginUser({
      userName: email,
      password: password
    })
      .then((data) => {
        console.log(data)
        console.log("Login successful:", data);
        // Save token and userType to localStorage
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        if (data.userType) {
          localStorage.setItem("userType", data.userType);
        }
        setPasswordError("");
        alert("Login successful! Redirecting to home...");
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setPasswordError("Login failed. Please check your credentials.");
      });

      // navigate("/");

} else {
      // Registration logic using signUpUser
      const userData = {
        name: fullName,
        userName: email,
        password,
      };
      console.log("Registering user:", userData);
      signUpUser(userData)
        .then((data) => {
          alert("Registration successful! Please login.");
          setIsRegister(false);
        })
        .catch((error) => {
          setPasswordError("Registration failed. Please try again.",error);
        });
    }

    // // Navigation to home (simulated)
    // setPasswordError("");
    // alert("Login successful! Redirecting to home...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3D6E9B] to-[#003DA5] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-['Crimson_Pro'] text-[#003DA5] text-[28px] font-bold mb-2">
            Transformative Workforce Academy
          </h1>
          <p className="font-['Crimson_Pro'] text-gray-600 text-[16px]">
            {isRegister ? "Create your account" : "Welcome back"}
          </p>
        </div>

        <div className="flex flex-col w-full font-['Crimson_Pro']">
          {isRegister && (
            <>
              <label className="text-[14px] mb-1 text-gray-700">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
                className="mb-4 w-full h-[35px] text-[12px] px-4 rounded-[5px] border border-gray-300 bg-white text-black placeholder-black/60 font-['Crimson_Pro'] focus:outline-none focus:border-[#003DA5] focus:ring-1 focus:ring-[#003DA5]"
              />
            </>
          )}

          <label className="text-[14px] mb-1 text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="mb-4 w-full h-[35px] text-[12px] px-4 rounded-[5px] border border-gray-300 bg-white text-black placeholder-black/60 font-['Crimson_Pro'] focus:outline-none focus:border-[#003DA5] focus:ring-1 focus:ring-[#003DA5]"
          />

          <label className="text-[14px] mb-1 text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className="mb-2 w-full h-[35px] text-[12px] px-4 rounded-[5px] border border-gray-300 bg-white text-black placeholder-black/60 font-['Crimson_Pro'] focus:outline-none focus:border-[#003DA5] focus:ring-1 focus:ring-[#003DA5]"
          />

          {/* Password error */}
          {passwordError && (
            <p className="text-red-500 text-[12px] mb-2 font-['Crimson_Pro']">
              {passwordError}
            </p>
          )}

          {!isRegister && (
            <div className="flex items-center justify-between mb-4 text-[14px]">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-[15px] h-[15px]" />
                <span className="font-['Crimson_Pro'] text-gray-700">Remember me</span>
              </label>
              <button
                type="button"
                className="no-underline font-['Crimson_Pro'] text-[#003DA5] hover:text-[#3D6E9B] cursor-pointer bg-transparent border-none p-0"
                onClick={() => console.log("Forgot password clicked")}
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full h-[35px] rounded-[5px] bg-[#003DA5] hover:bg-[#3D6E9B] text-white text-[14px] mb-4 font-['Crimson_Pro'] cursor-pointer transition-colors duration-200"
          >
            {isRegister ? "Register" : "Sign In"}
          </button>

          <p
            className="text-[14px] mb-4 font-['Crimson_Pro'] cursor-pointer text-center text-[#003DA5] hover:text-[#3D6E9B] transition-colors duration-200"
            onClick={toggleMode}
          >
            {isRegister ? "Already have an account? Sign In" : "New user? Register here"}
          </p>
        </div>

        {/* <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 font-['Crimson_Pro']">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div> */}

        {/* <button
          type="button"
         onClick={() => navigate("/")}
          className="w-full h-[35px] rounded-[5px] bg-gray-100 hover:bg-gray-200 text-gray-700 text-[14px] mb-4 font-['Crimson_Pro'] cursor-pointer transition-colors duration-200"
        >
          Continue as a Guest
        </button> */}

        <p className="text-[12px] font-['Crimson_Pro'] text-gray-500 text-center">
          Contact 314-977-4000 for help
        </p>
      </div>
    </div>
  );
}