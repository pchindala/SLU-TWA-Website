// Utility to check user type from localStorage
export function isLoggedIn() {
  return Boolean(localStorage.getItem("authToken"));
}
export function getUserType() {
  return localStorage.getItem("userType") || null;
}

export function isAdmin() {
  return getUserType() === "admin";
}

export function isRegularUser() {
  return getUserType() === "regularuser";
}

