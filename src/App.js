import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhoWeServe from "./pages/WhoWeServe";
import HowToSupport from "./pages/HowToSupport";
import News from "./pages/News";
import VideoPlatform from "./pages/VideoPlatform";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { Navigate } from "react-router-dom";
import { isLoggedIn, isAdmin } from "./api/controller/userType";
import React, { useEffect, useState } from "react";
// ProtectedRoute component
function IsLoginProtectedRoute({ element }) {
  return isLoggedIn() ? element : <Navigate to="/login" replace />;
}

// AccessDeniedWithRedirect component
function AccessDeniedWithRedirect() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setRedirect(true), 5000);
    return () => clearTimeout(timer);
  }, []);
  if (redirect) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Access Denied</h1>
      <p className="text-lg mb-6">You are not an admin and cannot access this page.</p>
      <p className="text-md mb-6">You will be redirected to the home page in 5 seconds.</p>
    </div>
  );
}

// Admin ProtectedRoute component
function IsAdminProtectedRoute({ element }) {
  if (isAdmin()) {
    return element;
  }
  if (isLoggedIn()) {
    return <AccessDeniedWithRedirect />;
  }
  return <Navigate to="/" replace />;
}
// fallback page for invalid routes
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

// wrapper to hide Navbar/Footer on specific routes
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; // hide for login

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className="min-h-screen">{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/how-to-support" element={<HowToSupport />} />
          <Route path="/news" element={<News />} />
          <Route path="/video" element={<IsLoginProtectedRoute element={<VideoPlatform />} />} />
          <Route path="/contact" element={<Contact />} />
          {/* Admin route */}
          <Route path="/admin" element={<IsAdminProtectedRoute element={<Admin />} />} />
          {/* fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
