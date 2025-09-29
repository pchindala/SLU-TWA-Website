// API endpoint paths
import { BASE_URL } from "./config";

export const API_PATHS = {
  users: `${BASE_URL}/users`,
  userProfile: `${BASE_URL}/users/profile`, // GET
  updateProfile: `${BASE_URL}/users/profile`, // PUT
  login: `${BASE_URL}/users/login`, // POST
  regions: `${BASE_URL}/regions`, // GET
  industries: `${BASE_URL}/industries`, // GET
  resumes: `${BASE_URL}/resumes`, // POST
  updateUserType: (id) => `${BASE_URL}/users/${id}/admin`, // PATCH
  deleteUser: (id) => `${BASE_URL}/users/${id}`, // DELETE
  // Add more endpoints as needed
};
