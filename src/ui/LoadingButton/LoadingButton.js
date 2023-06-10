import classes from "./LoadingButton.module.css";

const LoadingButton = (props) => {
  return (
    <div
      className={classes.loader}
      style={{ height: props.height, width: props.width }}
    >
      <i className="fa-brands fa-react fa-spin"></i>
    </div>
  );
};
export default LoadingButton;
