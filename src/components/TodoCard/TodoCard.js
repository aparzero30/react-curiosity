import classes from "./TodoCard.module.css";
import deleteTodo from "./DeleteTodo";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoCard = (props) => {
  const dispatch = useDispatch();

  const [delLoading, setDelLoading] = useState(false);

  const removeTodo = async () => {
    setDelLoading((prev) => setDelLoading(!prev));
    dispatch({ type: "REMOVE_USER_TODO", todo: props.todo });
    const data = await deleteTodo(props.todo.todoId);
    console.log(data);

    props.onDelete(props.todo.date);
    setDelLoading((prev) => setDelLoading(!prev));
  };

  return (
    <div className={classes.todoCard}>
      <h4>{props.todo.title}</h4>
      <label>{props.todo.body}</label>
      <label>{props.todo.date}</label>
      <div className={classes.action}>
        <i className="fa-sharp fa-solid fa-check" />
        <i className="fa-solid fa-pen-to-square" />
        {!delLoading && (
          <i className="fa-solid fa-trash" onClick={removeTodo} />
        )}
        {delLoading && <i className="fa-solid fa-spinner fa-spin" />}
      </div>
    </div>
  );
};
export default TodoCard;
