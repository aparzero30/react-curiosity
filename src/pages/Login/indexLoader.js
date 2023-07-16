import { redirect } from "react-router-dom";

const indexLoader = () => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  if (jwt || jwt !== null) {
    console.log("hello");
    return redirect("/main");
  }
  return null;
};
export default indexLoader;
