import jwt from "jsonwebtoken";

const isLoggedIn = () => {
  // Get the token from session storage
  const token = sessionStorage.getItem("token");
  if (!token) return false;

  const json = jwt.decode(token) as { [key: string]: string };

  return json?.admin ? true : false;
};

export default isLoggedIn;
