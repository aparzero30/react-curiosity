import classes from "./TodoForm.module.css";
import FormInput from "../../ui/FormInput/FormInput";
import { useState } from "react";
import TodoFormSubmitHandler from "./TodoFormSubmit";
// import { useDispatch } from "react-redux";

const TodoForm = (props) => {
  const [minimized, setMinimized] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [body, setBody] = useState(null);

  const [titleIsValid, setTitleIsValid] = useState(false);
  const [dateIsValid, setDateIsValid] = useState(false);
  const [bodyIsValid, setBodyIsValid] = useState(false);

  // const dispatch = useDispatch();

  const validateForm = () => {
    if (titleIsValid && dateIsValid && bodyIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const changeMinimizeHandler = async (event) => {
    event.preventDefault();
    if (!minimized) {
      const data = await TodoFormSubmitHandler({
        title,
        date,
        body,
        status: "NOT_DONE",
      });
      props.onSubmit(data);
      // dispatch({ type: "ADD_USER_TODO", todo: data });
    } else {
      setMinimized((prev) => !prev);
      props.toggle();
    }
  };

  const formStyle = {
    minHeight: minimized ? "6vh" : "45vh",
    backgroundColor: minimized ? "transparent" : "#12192c",
    boxShadow: minimized ? "none" : "2px 2px 2px 2px rgba(3, 2, 1, 0.1)",
  };

  const closeForm = () => {
    setMinimized((prev) => !prev);
    props.toggle();
    setFormIsValid(false);
  };

  const handleInputTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim === "" || e.target.value.trim().length === 0) {
      setTitleIsValid(false);
    } else {
      setTitleIsValid(true);
    }
    validateForm();
  };

  const handleInputBodyChange = (e) => {
    setBody(e.target.value);
    if (e.target.value.trim === "" || e.target.value.trim().length === 0) {
      setBodyIsValid(e.target.value);
    } else {
      setBodyIsValid(true);
    }

    validateForm();
  };
  const handleInputDateChange = (e) => {
    setDateIsValid(true);
    setDate(e.target.value);
    if (e.target.value.trim === "" || e.target.value.trim().length === 0) {
      setDateIsValid(e.target.value);
    }

    validateForm();
  };

  return (
    <form className={classes.todoform} style={formStyle}>
      {!minimized && (
        <FormInput
          label="Title....."
          type="text"
          name="todoTitle"
          className="fa-solid fa-paw"
          validity={titleIsValid}
          onChange={handleInputTitleChange}
          onBlur={validateForm}
        />
      )}
      {!minimized && (
        <FormInput
          label="date....."
          type="date"
          className="fa-solid fa-greater-than"
          name="todoTitle"
          onChange={handleInputDateChange}
          onBlur={validateForm}
          validity={dateIsValid}
        />
      )}
      {!minimized && (
        <textarea
          rows={4}
          placeholder="Type here..."
          onChange={handleInputBodyChange}
          onBlur={validateForm}
          required
        />
      )}

      <button
        disabled={!formIsValid && !minimized}
        onClick={changeMinimizeHandler}
        className={classes.tdbtn}
        style={{
          borderColor: minimized ? "transparent" : "white",
        }}
      >
        {minimized ? "ADD NEW TODO" : "CREATE"}
      </button>

      {!minimized && (
        <div className={classes.canceldiv} onClick={closeForm}>
          CANCEL
        </div>
      )}
    </form>
  );
};
export default TodoForm;
