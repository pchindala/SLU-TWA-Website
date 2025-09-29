// Sign Up API function
import { API_PATHS } from "../paths";
import axios from "axios";

export async function signUpUser(userData) {
  try {
    const response = await axios.post(
      API_PATHS.users,
      userData,
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
