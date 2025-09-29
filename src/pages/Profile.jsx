import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUserProfile } from '../api/controller/userProfile';
import ProfileDialog from './DialogBoxes/ProfileDialog';
const Profile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Replacing unused variable
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const userProfile = await getUserProfile();
        setUser(userProfile);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    }

    fetchUserProfile();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="flex justify-center items-center bg-gray-100 min-h-screen ">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 text-left border border-gray-200">
          <h2 className="text-4xl font-extrabold mb-8 text-blue-600">Profile</h2>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-600">Full Name:</label>
            <p className="text-xl text-gray-800 font-medium">{user.fullName}</p>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-600">Username:</label>
            <p className="text-xl text-gray-800 font-medium">{user.userName}</p>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-600">User Type:</label>
            <p className="text-xl text-gray-800 font-medium">{user.userType}</p>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-600">Date of Birth:</label>
            <p className="text-xl text-gray-800 font-medium">
              {new Date(user.dob.replace(/(\d{2})(\d{2})(\d{4})/, '$2/$1/$3')).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-600">Email:</label>
            <p className="text-xl text-gray-800 font-medium">{user.email}</p>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-600">Profile Photo:</label>
            <img src={user.profilePhoto} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Edit
            </button>
          </div>
        </div>
      </section>
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
