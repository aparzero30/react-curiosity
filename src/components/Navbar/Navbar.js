import classes from "./Navbar.module.css";
import AccountSection from "../AccoutSection/AccountSection";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <label>Curiosity</label>
      <AccountSection />
    </div>
  );
};
export default Navbar;
