import classes from "./EnrollmentForm.module.css";
import SearchBar from "../../ui/SearchBar/SearchBar";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <div className={classes.frm}>
      <SearchBar
        onChange={props.onChange}
        placeHolder="Type CourseId ex. 123456"
        type="number"
      />
      <button onClick={props.onToggle}>CANCEL</button>
    </div>
  );
};

const Backdrop = (props) => {
  return (
    <div className={classes.enroll} onClick={props.onToggle}>
      {" "}
    </div>
  );
};

const EnrollmentForm = (props) => {
  const typeSearchHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onToggle={props.onToggle} />,
        document.getElementById("enrollment-overlay")
      )}
      {ReactDOM.createPortal(
        <Modal onChange={typeSearchHandler} onToggle={props.onToggle} />,
        document.getElementById("enrollment-modal")
      )}
    </>
  );
};
export default EnrollmentForm;
