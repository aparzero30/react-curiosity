import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.section}>
        <i className="fa-solid fa-paw" />
        <h5>Course</h5>
        <h5>Details</h5>
      </div>
      {/* <div className={classes.section}>
        <i className="fa-solid fa-envelope" />
        <h5>Invite</h5>
      </div> */}

      <div className={classes.section}>
        <i className="fa-solid fa-backward" />
        <h5>Return</h5>
      </div>
    </div>
  );
};

export default SideBar;
