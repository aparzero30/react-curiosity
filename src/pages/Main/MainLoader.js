import { redirect } from "react-router-dom";

const MainLoader = async () => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  if (!jwt || jwt === null) {
    return redirect("/login");
  }

  try {
    const response = await fetch("http://localhost:8080/api/v1/user/login", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!response.ok) {
      // Handle error response
      //   throw new Error("Failed to load user data");
      alert("An error occured please login again");
      localStorage.removeItem("JWT-TOKEN");
      return redirect("/login");
    }
    // Handle successful response
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle fetch error
    console.log(error);
    return null;
  }
};

export default MainLoader;
