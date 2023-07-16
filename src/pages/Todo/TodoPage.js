import HalfWrapper from "../../ui/HalfWrapper/HalfWrapper";
import fetchTodayTodo from "./TodoHelper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../../components/TodoForm/TodoForm";
import classes from "./TodoPage.module.css";
import TodosWrapper from "../../components/TodosWrapper/TodosWrapper";
import { fetchUpcomingTodo } from "./TodoHelper";

const TodoPage = () => {
  const [todayTodo, setTodayTodo] = useState([]);
  const [formShown, setFormIsShown] = useState(false);
  const [upcomingTodo, setUpcomingTodo] = useState([]);
  const dispatch = useDispatch();
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  const getTodos = async () => {
    try {
      const data = await fetchUpcomingTodo();
      setUpcomingTodo(data);

      dispatch({ type: "SET_USER_UPCOMING_TODO", upcomingTodo: data });

      // Handle the retrieved data
    } catch (error) {
      // Handle the error
      console.error(error);
    }

    try {
      const data = await fetchTodayTodo();
      setTodayTodo(data);
      // console.log(todayTodo);
      dispatch({ type: "SET_USER_TODAY_TODO", todayTodo: data });
      // Handle the retrieved data
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const formShownToggleHandler = () => {
    setFormIsShown((prev) => !prev);
  };

  const addTodoHandler = (todo) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    if (todo.date === formattedDate) {
      console.log("hi");
      setTodayTodo((prev) => [...prev, todo]);
    } else {
      console.log("hello");
      setUpcomingTodo((prev) => [...prev, todo]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUpcomingTodo();
        setUpcomingTodo(data);

        dispatch({ type: "SET_USER_UPCOMING_TODO", upcomingTodo: data });

        // Handle the retrieved data
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTodayTodo();
        setTodayTodo(data);
        // console.log(todayTodo);
        dispatch({ type: "SET_USER_TODAY_TODO", todayTodo: data });
        // Handle the retrieved data
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <HalfWrapper>
      <div className={classes.todoWrapper}>
        <div className={classes.row1}>
          <h1>{currentDayOfWeek.toUpperCase()}</h1>
          <TodoForm toggle={formShownToggleHandler} onSubmit={addTodoHandler} />
          <h3>TODAY'S TODOS</h3>
          <TodosWrapper
            todos={todayTodo}
            formIsShown={formShown}
            onChange={getTodos}
            height="67vh"
          />
        </div>
        <div className={classes.row1}>
          <h3>UPCOMING TODOS</h3>
          <TodosWrapper
            todos={upcomingTodo}
            onChange={getTodos}
            height="83vh"
          />
        </div>
      </div>
    </HalfWrapper>
  );
};
export default TodoPage;
