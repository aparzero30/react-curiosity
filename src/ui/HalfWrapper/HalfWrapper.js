import classes from "./HalfWrapper.module.css";

const HalfWrapper = (props) => {
  return <div className={classes.half}>{props.children}</div>;
};
export default HalfWrapper;
