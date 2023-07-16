import TodoCard from "../TodoCard/TodoCard";
import classes from "./TodosWrapper.module.css";
import { useEffect, useState } from "react";

const TodosWrapper = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(props.todos);
  }, [props.todos]);

  const divHeight = props.formIsShown ? "28vh" : props.height;

  const deleteTodo = async () => {
    props.onChange();
  };

  return (
    <div className={classes.todosWrapper} style={{ maxHeight: divHeight }}>
      {todos.map((todo) => (
        <TodoCard
          key={todo.todoId}
          todo={todo}
          onDelete={(date) => deleteTodo(date)}
        />
      ))}
    </div>
  );
};
export default TodosWrapper;
