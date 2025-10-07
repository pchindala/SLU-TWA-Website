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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, updateUserType, deleteUser } from "../api/controller/userProfile";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const isAdmin = userType === "admin";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        console.log("Fetched users:", fetchedUsers);
        setUsers(fetchedUsers);
      } catch (err) {
        setError("Failed to fetch users.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await deleteUser(_id);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== _id));
      console.log(`User with ID: ${_id} has been deleted.`);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleMakeAdmin = async (_id) => {
    try {
      await updateUserType(_id, "admin");
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === _id ? { ...user, userType: "admin" } : user
        )
      );
      console.log(`User with ID: ${_id} is now an admin.`);
    } catch (error) {
      console.error("Failed to make user an admin:", error);
    }
  };

  const handleRemoveAdmin = async (_id) => {
    try {
      await updateUserType(_id, "regularuser");
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === _id ? { ...user, userType: "regularuser" } : user
        )
      );
      console.log(`Admin rights removed for user with ID: ${_id}.`);
    } catch (error) {
      console.error("Failed to remove admin rights:", error);
    }
  };

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

  if (loading)
    return (
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="mb-6 text-gray-600">Loading data, please wait...</p>
      </div>
    );
  if (error)
    return (
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="mb-6 text-gray-600">{error}</p>
      </div>
    );

  return (
    <div className="p-4 text-center font-['Crimson_Pro'] text-left">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      {users.length === 0 ? (
        <p className="mb-6 text-gray-600">No data available at the moment.</p>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">User List</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="w-full bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Full Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">User Type</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{user.fullName}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.userType}</td>
                  <td className="py-3 px-6">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                    {user.userType === "admin" ? (
                      <button
                        onClick={() => handleRemoveAdmin(user._id)}
                        className="ml-4 text-blue-600 hover:text-blue-800"
                      >
                        Remove Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="ml-4 text-blue-600 hover:text-blue-800"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;