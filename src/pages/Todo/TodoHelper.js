import { json } from "react-router-dom";

const fetchTodayTodo = async () => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  const dateRequest = {
    date: new Date(),
  };

  const response = await fetch(
    "http://localhost:8080/api/v1/todo/getTodoByDateAndUser",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(dateRequest),
    }
  );

  if (!response.ok) {
    // Handle error response
    //   throw new Error("Failed to load user data");
    throw json({ message: "failed to load resources" }, { status: 500 });
  }
  // Handle successful response
  const data = await response.json();

  return data;
};

export default fetchTodayTodo;

export const fetchUpcomingTodo = async () => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  const dateRequest = {
    date: new Date(),
  };
  dateRequest.date.setDate(dateRequest.date.getDate() + 1);

  const response = await fetch(
    "http://localhost:8080/api/v1/todo/getUpcomingTodos",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(dateRequest),
    }
  );

  if (!response.ok) {
    // Handle error response
    //   throw new Error("Failed to load user data");
    throw json({ message: "failed to load resources" }, { status: 500 });
  }
  // Handle successful response
  const data = await response.json();

  console.log(data);

  return data;
};
