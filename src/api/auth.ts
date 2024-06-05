import Cookies from "js-cookie";

export const isUserLoggedIn = () => {
  const user = Cookies.get("user");

  return !!user;
};
