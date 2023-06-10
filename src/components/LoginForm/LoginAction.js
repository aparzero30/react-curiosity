import { json, redirect } from "react-router-dom";

async function loginAction({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  const formData = {
    email: data.get("userEmail"),
    password: data.get("userPassword"),
  };

  let url = "http://localhost:8080/api/v1/auth/authenticate";

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

  const responseData = await response.json();
  localStorage.setItem("token", responseData.token);
  return redirect("/main");
}

export default loginAction;
