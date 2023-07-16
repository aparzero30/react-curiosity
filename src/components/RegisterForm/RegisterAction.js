import { json, redirect } from "react-router-dom";

async function registerAction({ request }) {
  const data = await request.formData();
  const method = request.method;
  const formData = {
    email: data.get("userEmail"),
    password: data.get("userPassword"),
    firstName: data.get("userFirstName"),
    lastName: data.get("userLastName"),
    role: data.get("userRole"),
  };

  let url = "http://localhost:8080/api/v1/auth/register";

  const response = await fetch(url, {
    method: method,
    headers: {
      "CONTENT-TYPE": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 400
  ) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not login" }, { status: 500 });
  }

  // const responseData = await response.json();

  return redirect("/login");
}

export default registerAction;
