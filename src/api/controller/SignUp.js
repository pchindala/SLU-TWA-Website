// Sign Up API function
// Removed unused imports
// import { API_PATHS } from "../paths";
// import axios from "axios";
import axios from "axios";
import User from "../Model/UserModel";
import { API_PATHS } from "../paths";

export async function signUpUser(userData) {
  try {
    // Convert frontend user data to API format using UserModel
    const user = new User(
      userData.fullName,
      userData.userName,
      userData.userType,
      userData.dob,
      userData.email,
      userData.profilePhoto
    );

    const apiPayload = {
      ...user.toJSON(),
      password: userData.password, // Add password only in API payload
    };
    console.log("Signing up user with payload:", apiPayload);

    const formData = new FormData();
    Object.entries(apiPayload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await axios.post(API_PATHS.users, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Sign up response:", response.data);
    return User.fromJSON(response.data); // Convert API response to UserModel
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error;
  }
}
