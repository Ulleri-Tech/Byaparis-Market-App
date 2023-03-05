
const isLoggedIn = () => {
  // Get the token from session storage
  const token = localStorage.getItem("userCredentials");
  if (!token) return false;

  return true;
};

export default isLoggedIn;
