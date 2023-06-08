import FormInput from "../../ui/FormInput/FormInput";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={classes.form}>
      <FormInput label="Email" type="email" name="userEmail" />
      <FormInput label="Password" type="password" name="userPassword" />
      <button>LOGIN</button>
    </form>
  );
};
export default LoginForm;

export async function action({ request, params }) {
  ///to-do
}
