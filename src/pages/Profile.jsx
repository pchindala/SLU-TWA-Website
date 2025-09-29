// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { getUserProfile } from '../api/controller/userProfile';
// import ProfileDialog from './DialogBoxes/ProfileDialog';
// const Profile = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false); // Replacing unused variable
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUserProfile() {
//       try {
//         const userProfile = await getUserProfile();
//         setUser(userProfile);
//       } catch (error) {
//         console.error('Failed to fetch user profile:', error);
//       }
//     }

//     fetchUserProfile();
//   }, []);

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <section className="flex justify-center items-center bg-gray-100 min-h-screen ">
//         <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 text-left border border-gray-200">
//           <h2 className="text-4xl font-extrabold mb-8 text-blue-600">Profile</h2>
//           <div className="mb-6">
//             <label className="block text-lg font-semibold text-gray-600">Full Name:</label>
//             <p className="text-xl text-gray-800 font-medium">{user.fullName}</p>
//           </div>
//           <div className="mb-6">
//             <label className="block text-lg font-semibold text-gray-600">Username:</label>
//             <p className="text-xl text-gray-800 font-medium">{user.userName}</p>
//           </div>
//           <div className="mb-6">
//             <label className="block text-lg font-semibold text-gray-600">User Type:</label>
//             <p className="text-xl text-gray-800 font-medium">{user.userType}</p>
//           </div>
//           <div className="mb-6">
//             <label className="block text-lg font-semibold text-gray-600">Date of Birth:</label>
//             <p className="text-xl text-gray-800 font-medium">
//               {new Date(user.dob.replace(/(\d{2})(\d{2})(\d{4})/, '$2/$1/$3')).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>
//           </div>
//           <div className="mb-6">
//             <label className="block text-lg font-semibold text-gray-600">Email:</label>
//             <p className="text-xl text-gray-800 font-medium">{user.email}</p>
//           </div>
//           <div className="mb-6">
//             <label className="block text-lg font-semibold text-gray-600">Profile Photo:</label>
//             <img src={user.profilePhoto} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
//           </div>
//           <div className="flex justify-end">
//             <button
//               onClick={() => setIsDialogOpen(true)}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       </section>
//       <ProfileDialog
//         showModal={isDialogOpen}
//         setShowModal={setIsDialogOpen}
//         onSave={(updatedUser) => {
//           setUser(updatedUser);
//           setIsDialogOpen(false);
//         }}
//         user={user}
//       />
//     </div>
//   );
// };

// Profile.propTypes = {
//   user: PropTypes.shape({
//     fullName: PropTypes.string.isRequired,
//     dob: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     userType: PropTypes.string.isRequired,
//     userName: PropTypes.string.isRequired,
//     profilePhoto: PropTypes.string.isRequired,
//     userId: PropTypes.string.isRequired,
//   }),
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { getUserProfile } from "../api/controller/userProfile";
// import ProfileDialog from "./DialogBoxes/ProfileDialog";

// const Profile = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUserProfile() {
//       try {
//         const userProfile = await getUserProfile();
//         setUser(userProfile);
//       } catch (error) {
//         console.error("Failed to fetch user profile:", error);
//       }
//     }
//     fetchUserProfile();
//   }, []);

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-lg text-gray-600 animate-pulse">
//           Loading profile...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 font-['Crimson_Pro'] min-h-screen">
//       {/* Hero Banner */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48 md:h-56 w-full relative">
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//           <img
//             src={user.profilePhoto}
//             alt="Profile"
//             className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
//           />
//         </div>
//       </div>

//       {/* Profile Card */}
//       <div className="flex justify-center px-4 mt-20">
//         <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 md:p-10 border border-gray-200">
//           {/* Header */}
//           <div className="flex flex-col items-center text-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//               {user.fullName}
//             </h2>
//             <p className="text-gray-500">{user.userType}</p>
//             <button
//               onClick={() => setIsDialogOpen(true)}
//               className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Edit Profile
//             </button>
//           </div>

//           {/* Info Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
//             <div>
//               <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                 Username
//               </label>
//               <p className="text-lg font-medium text-gray-800">
//                 {user.userName}
//               </p>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                 Email
//               </label>
//               <p className="text-lg font-medium text-gray-800">{user.email}</p>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                 Date of Birth
//               </label>
//               <p className="text-lg font-medium text-gray-800">
//                 {new Date(
//                   user.dob.replace(/(\d{2})(\d{2})(\d{4})/, "$2/$1/$3")
//                 ).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </p>
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                 User ID
//               </label>
//               <p className="text-lg font-medium text-gray-800">{user.userId}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dialog */}
//       <ProfileDialog
//         showModal={isDialogOpen}
//         setShowModal={setIsDialogOpen}
//         onSave={(updatedUser) => {
//           setUser(updatedUser);
//           setIsDialogOpen(false);
//         }}
//         user={user}
//       />
//     </div>
//   );
// };

// Profile.propTypes = {
//   user: PropTypes.shape({
//     fullName: PropTypes.string.isRequired,
//     dob: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     userType: PropTypes.string.isRequired,
//     userName: PropTypes.string.isRequired,
//     profilePhoto: PropTypes.string.isRequired,
//     userId: PropTypes.string.isRequired,
//   }),
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getUserProfile } from "../api/controller/userProfile";
import ProfileDialog from "./DialogBoxes/ProfileDialog";
import { Pencil } from "lucide-react"; // ✅ using Lucide icon

const Profile = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const userProfile = await getUserProfile();
        setUser(userProfile);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    }
    fetchUserProfile();
  }, []);

  if (!user) {
    return (
     <div className="flex flex-col justify-center items-center text-center p-6 space-y-4">
  <h2 className="text-2xl font-bold text-gray-800 mb-2">
    No profile found
  </h2>
  <p className="text-gray-600 mb-4">
    You need an account to access your profile.
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    {/* Login / Create Account */}
    <button
      onClick={() => navigate("/login")}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Create Account / Login
    </button>

    {/* Continue without profile */}
    <button
      onClick={() => navigate("/")}
      className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      Continue without profile
    </button>
  </div>
</div>

    );
  }

  return (
    <div className="bg-gray-50 font-['Crimson_Pro'] min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48 md:h-56 w-full relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="flex justify-center px-4 mt-20">
        <div className="relative w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 md:p-10 border border-gray-200">
          {/* Edit Icon */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="absolute top-4 right-4 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Pencil className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {user.fullName}
            </h2>
            <p className="text-gray-500">{user.userType}</p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Username
              </label>
              <p className="text-lg font-medium text-gray-800">
                {user.userName}
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Email
              </label>
              <p className="text-lg font-medium text-gray-800">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Date of Birth
              </label>
              <p className="text-lg font-medium text-gray-800">
                {user.dob &&
                  (() => {
                    const dobString = user.dob;
                    console.log("Original Date String:", dobString);
                    const parsedDate = dobString.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
                      ? new Date(dobString)
                      : dobString.match(/^(\d{2})(\d{2})(\d{4})$/)
                      ? new Date(
                          dobString.replace(/(\d{2})(\d{2})(\d{4})/, "$2/$1/$3")
                        )
                      : null;
                    console.log("Parsed Date:", parsedDate);
                    return parsedDate
                      ? parsedDate.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Invalid Date";
                  })()}
              </p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">
                User ID
              </label>
              <p className="text-lg font-medium text-gray-800">{user.userId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <ProfileDialog
        showModal={isDialogOpen}
        setShowModal={setIsDialogOpen}
        onSave={(updatedUser) => {
          setUser(updatedUser);
          setIsDialogOpen(false);
        }}
        user={user}
      />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }),
};

export default Profile;
