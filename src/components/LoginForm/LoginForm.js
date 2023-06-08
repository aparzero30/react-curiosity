import FormInput from "../../ui/FormInput/FormInput";
import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className={classes.form}>
      <h1>Login Form</h1>
      <i
        className="fa-solid fa-cat"
        style={{ color: "white", fontSize: "13vh", margin: "3vh" }}
      ></i>
      <FormInput
        label="Email"
        type="email"
        name="userEmail"
        className="fa-solid fa-envelope"
      />
      <FormInput
        label="Password"
        type="password"
        name="userPassword"
        className="fa-solid fa-lock"
      />
      <Link className={classes.forgotPassword}>
        <p>Forgot password?</p>
      </Link>
      <button>LOGIN</button>
      <Link>
        <p>
          No Account ?<span> Sign up now</span>
        </p>
      </Link>
    </form>
  );
};
export default LoginForm;

export async function action({ request, params }) {
  ///to-do
}
