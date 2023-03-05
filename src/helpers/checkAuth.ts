
const isLoggedIn = () => {
  // Get the token from session storage
  const token = localStorage.getItem("token");
  if (!token) return false;

  return true;
};

export default isLoggedIn;
