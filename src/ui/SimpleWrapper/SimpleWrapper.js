import classes from "./SimpleWrapper.module.css";
const SimpleWrapper = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};
export default SimpleWrapper;
