import FormWrapper from "../../ui/LoginSignUpWrapper/FormWrapper";
import classes from "./Error.module.css";

const ErrorPage = () => {
  return (
    <FormWrapper>
      <div className={classes.err}>
        <i className="fa-solid fa-cat fa-bounce" />
        <h1>Page Not Found (404)</h1>
      </div>
    </FormWrapper>
  );
};
export default ErrorPage;
