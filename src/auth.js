// Simulate authentication (store user role in localStorage)
export const isAuthenticated = () => !!localStorage.getItem("token");

export const getUserRole = () => localStorage.getItem("role");

export const login = (role) => {
  localStorage.setItem("token", "dummy-auth-token");
  localStorage.setItem("role", role);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "/";
};
