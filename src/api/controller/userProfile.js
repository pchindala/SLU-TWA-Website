import axios from "axios";
import { API_PATHS } from "../paths";
import User from "../Model/UserModel";

export async function getUserProfile() {
  try {
    const response = await axios.get(API_PATHS.userProfile, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    return User.fromJSON(response.data); // Convert API response to UserModel
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

export async function updateUserProfile(updatedData) {
  try {
    const formData = new FormData();

    Object.entries(updatedData).forEach(([key, value]) => {
      if (key === "dob" && value) {
        formData.append(
          key,
          new Date(value)
            .toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })
            .replace(/\//g, "")
        );
      } else {
        formData.append(key, value);
      }
    });

    const response = await axios.put(API_PATHS.updateProfile, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    return User.fromJSON(response.data); // Convert API response to UserModel
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

/**
 * Fetch all users from the API.
 * @returns {Promise} A promise that resolves to the list of users formatted as UserModel instances.
 */
export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_PATHS.users, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    // Format the response data into UserModel instances
    return response.data.map((user) => User.fromJSON(user));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Update the user type for a specific user.
 * @param {string} id - The ID of the user.
 * @param {string} userType - The new user type (e.g., 'admin', 'regularuser').
 * @returns {Promise} A promise that resolves to the updated user data.
 */
export const updateUserType = async (id, userType) => {
  try {
    const response = await axios.patch(
      API_PATHS.updateUserType(id),
      { userType },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    alert(`User type updated successfully: ${response.data.message}`);
    return response.data;
  } catch (error) {
    console.error("Error updating user type:", error);
    throw error;
  }
};

/**
 * Delete a user by their ID.
 * @param {string} id - The ID of the user to delete.
 * @returns {Promise} A promise that resolves to the deletion response.
 */
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(API_PATHS.deleteUser(id), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    alert(`User deleted successfully: ${response.data.message}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
