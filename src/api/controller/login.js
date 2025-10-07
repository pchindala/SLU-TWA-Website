// Login API function
import { API_PATHS } from "../paths";
import axios from "axios";

export async function loginUser(credentials) {
  try {
    const response = await axios.post(
      API_PATHS.login,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 400) {
      console.error("login failed with status 400:", error.response.data);
      alert(`Login failed: ${error.response.data.error}`);
    } else {
      console.error("Error logging in user:", error);
      alert("Login failed. Please try again.");
    }
    throw error;
  }
}
