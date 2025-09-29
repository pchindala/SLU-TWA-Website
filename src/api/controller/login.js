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
    throw error;
  }
}
