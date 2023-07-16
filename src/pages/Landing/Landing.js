import { Link } from "react-router-dom";
import MainWrapper from "../../ui/MainWrapper/MainWrapper";
import classes from "./Landing.module.css";

const LandingPage = () => {
  return (
    <MainWrapper>
      <div className={classes.box}>
        <img
          src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_curious_cat_icon_158943.png"
          alt="Curious Cat Icon"
        />
        <h3>"Curiosity is the engine of achievement."</h3>
        <div className={classes.btnWrapper}>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
          <Link to="/signup">
            <button>SIGNUP</button>
          </Link>
        </div>
      </div>
    </MainWrapper>
  );
};
export default LandingPage;
