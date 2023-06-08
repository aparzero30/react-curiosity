import classes from "./FormInput.module.css";
const FormInput = (props) => {
  return (
    <div className={classes.inputWrapper} required>
      <i className={props.className}></i>
      <input type={props.type} name={props.name} placeholder={props.label} />
    </div>
  );
};
export default FormInput;
