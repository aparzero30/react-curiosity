import classes from "./Navbar.module.css";
import AccountSection from "../AccoutSection/AccountSection";

const LearnerNavbar = (props) => {
  return (
    <div className={classes.navbar}>
      <label>Curiosity</label>
      <AccountSection />
    </div>
  );
};
export default LearnerNavbar;
