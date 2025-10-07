import { useState } from "react";
import PropTypes from "prop-types";
import { updateUserProfile } from "../../api/controller/userProfile";

const ProfileDialog = ({ user, onSave, showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    dob: user.dob,
    profilePhoto: user.profilePhoto,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profilePhoto: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedProfile = await updateUserProfile({
        fullName: formData.fullName,
        dob: formData.dob,
        profilePhoto: formData.profilePhoto,
        password: formData.password,
      });
      onSave(updatedProfile);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg z-10">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Profile Photo:</label>
            <input
              type="file"
              name="profilePhoto"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ProfileDialog.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ProfileDialog;