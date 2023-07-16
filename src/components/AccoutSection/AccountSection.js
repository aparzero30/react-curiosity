import { useSelector } from "react-redux";
import classes from "./AccountSection.module.css";
import UserSettings from "../UserSettings/UserSettings";
import { useState } from "react";
import EnrollmentForm from "../EnrollmentForm/EnrollmentForm";
import { Link } from "react-router-dom";

const AccountSection = (props) => {
  const fname = useSelector((state) => state.userData.firstName);
  const sname = useSelector((state) => state.userData.lastName);
  const role = useSelector((state) => state.userData.role);

  var fInitial = fname.charAt(0).toUpperCase();
  var sInitial = sname.charAt(0).toUpperCase();

  const [options, setOptions] = useState(false);
  const [notif, setNotif] = useState(false);
  const [enrollFormVisble, setEnrollFormIsVisible] = useState(false);

  const showOptionsHandler = () => {
    setNotif(false);
    setOptions((prevState) => !prevState);
  };

  const toggleEnrollmentForm = () => {
    setEnrollFormIsVisible((prevState) => !prevState);
  };

  const showNotificationHandler = () => {
    setOptions(false);
    setNotif(true);
    console.log(notif);
  };

  const courseCompnent = () => {
    if (role === "INSTRUCTOR") {
      return (
        <Link to="/create">
          <section>
            <label>CREATE</label>
            <i className="fa-solid fa-plus"></i>
          </section>
        </Link>
      );
    }
  };

  return (
    <div className={classes.accountSection}>
      {enrollFormVisble && <EnrollmentForm onToggle={toggleEnrollmentForm} />}

      {courseCompnent()}

      <i className="fa-solid fa-message" />
      <i className="fa-solid fa-chalkboard" />
      <i className="fa-solid fa-bell" onClick={showNotificationHandler} />
      <div className={classes.profile} onClick={showOptionsHandler}>
        {fInitial}
        {sInitial}
      </div>
      {options && <UserSettings visible={options} />}
    </div>
  );
};
export default AccountSection;
