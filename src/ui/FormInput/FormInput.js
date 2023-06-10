import classes from "./FormInput.module.css";
const FormInput = (props) => {
  return (
    <div className={classes.inputWrapper} required>
      <i className={props.className}></i>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.label}
        onChange={props.onChange}
        style={{ color: props.validity ? "white" : "rgb(222, 148, 148)" }}
        onBlur={props.onBlur}
        required
      />
    </div>
  );
};
export default FormInput;
