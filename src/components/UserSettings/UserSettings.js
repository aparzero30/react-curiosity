import { useSelector } from "react-redux";
import classes from "./UserSettings.module.css";

const UserSettings = (props) => {
  const fname = useSelector((state) => state.userData.firstName.slice(0, 13));
  const sname = useSelector((state) => state.userData.lastName);
  const email = useSelector((state) => state.userData.email);
  var fInitial = fname.charAt(0).toUpperCase();
  var sInitial = sname.charAt(0).toUpperCase();

  const logoutHandler = () => {
    localStorage.removeItem("JWT-TOKEN");
    window.location.reload();
  };

  return (
    <div
      className={`${classes.settings} ${props.visible ? classes.visible : ""}`}
    >
      <div className={classes.info}>
        <div className={classes.profile}>
          {fInitial}
          {sInitial}
        </div>
        <div className={classes.contact}>
          <label>
            {fname}
            {/* {sname} */}
          </label>
          <p>{email}</p>
        </div>
      </div>
      <div className={classes.options}>
        <section>
          <i className="fa-solid fa-pen-to-square" />
          <label>Edit Profile</label>
        </section>
        <section>
          <i className="fa-solid fa-gear" />
          <label>Settings</label>
        </section>
        <section onClick={logoutHandler}>
          <i className="fa-solid fa-arrow-right-from-bracket" />
          <label>Logout</label>
        </section>
      </div>
    </div>
  );
};
export default UserSettings;
