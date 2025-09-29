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
