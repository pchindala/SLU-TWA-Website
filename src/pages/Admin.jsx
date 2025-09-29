// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Admin() {
//   const navigate = useNavigate();
//   const userType = localStorage.getItem("userType");
//   const isAdmin = userType === "admin";

//   if (!isAdmin) {
//     return (
//       <div className="p-8 text-center">
//         <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
//         <p>You do not have permission to view this page.</p>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//           onClick={() => navigate("/")}
//         >
//           Go Home
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
//       <p>Welcome, admin! Here you can manage users and site content.</p>
//       {/* Add your admin features/components here */}
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import noData from "../assets/no_data.jpg"; // make sure path is correct

export default function Admin() {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const isAdmin = userType === "admin";

  if (!isAdmin) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
        <p>You do not have permission to view this page.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 text-center font-['Crimson_Pro'] text-left">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-6 text-gray-600">No data available at the moment.</p>
      <div className="flex justify-center h-1/4">
        <img
          src={noData}
          alt="No Data"
          className="max-w-xs md:max-w-sm lg:max-w-md opacity-80"
        />
      </div>
    </div>
  );
}