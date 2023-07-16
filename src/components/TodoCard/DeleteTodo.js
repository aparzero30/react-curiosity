import { json } from "react-router-dom";

const deleteTodo = async (todoId) => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  const response = await fetch(
    `http://localhost:8080/api/v1/todo/deleteTodoById?todoId=${todoId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      // body: todoId,
    }
  );

  if (!response.ok) {
    // Handle error response
    //   throw new Error("Failed to load user data");
    throw json({ message: "failed to load resources" }, { status: 500 });
  }

  return response;
};

export default deleteTodo;
