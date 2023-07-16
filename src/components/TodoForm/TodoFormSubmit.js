import { json } from "react-router-dom";

const TodoFormSubmitHandler = async (todo) => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  const response = await fetch("http://localhost:8080/api/v1/todo/addTodo", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    // Handle error response
    //   throw new Error("Failed to load user data");
    throw json({ message: "failed to load resources" }, { status: 500 });
  }
  // Handle successful response
  const data = await response.json();

  return data;
};
export default TodoFormSubmitHandler;
