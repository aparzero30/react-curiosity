import classes from "./FormInput.module.css";
const FormInput = (props) => {
  return (
    <div className={classes.inputWrapper} required>
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} name={props.name} />
    </div>
  );
};
export default FormInput;
