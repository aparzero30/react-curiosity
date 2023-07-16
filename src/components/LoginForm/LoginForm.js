import FormInput from "../../ui/FormInput/FormInput";
import classes from "./LoginForm.module.css";
import { Form, useNavigation, useActionData, Link } from "react-router-dom";
import { useState } from "react";

import LoadingButton from "../../ui/LoadingButton/LoadingButton";

const LoginForm = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(true);
  let timeoutId = null;

  const validateForm = () => {
    if (emailIsValid && passwordIsValid) {
      setFormIsInvalid(false);
    } else {
      setFormIsInvalid(true);
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setFormIsInvalid(true);
      setEmailIsValid(false);
    } else {
      if (!passwordIsValid) {
        setFormIsInvalid(true);
      } else {
        setFormIsInvalid(false);
      }
      setEmailIsValid(true);
    }
  };
  const validatePassword = (value) => {
    if (value.length < 6) {
      setFormIsInvalid(true);
      setPasswordIsValid(false);
    } else {
      if (!emailIsValid) {
        setFormIsInvalid(true);
      } else {
        setFormIsInvalid(false);
      }
      setPasswordIsValid(true);
    }
  };

  const handleInputEmailChange = (e) => {
    clearTimeout(timeoutId);
    setEmailIsValid(true);

    // Debounce email validation for 1000 milliseconds
    timeoutId = setTimeout(() => {
      validateEmail(e.target.value);
    }, 500);
  };

  const handleInputPasswordChange = (e) => {
    clearTimeout(timeoutId);

    setPasswordIsValid(true);
    // Debounce email validation for 1000 milliseconds
    timeoutId = setTimeout(() => {
      validatePassword(e.target.value);
    }, 500);
  };

  return (
    <Form className={classes.form} method="POST">
      <h1>Login</h1>
      <i
        className="fa-solid fa-cat"
        style={{ color: "white", fontSize: "13vh", margin: "3vh" }}
      ></i>
      {data && <p className={classes.error}>{data.message}</p>}

      <FormInput
        label="Email e.g john@doe.com"
        type="email"
        name="userEmail"
        className="fa-solid fa-envelope"
        onChange={handleInputEmailChange}
        validity={emailIsValid}
        onBlur={validateForm}
        required={true}
      />
      <FormInput
        label="Password (atleast 6 Characters)"
        type="password"
        name="userPassword"
        className="fa-solid fa-lock"
        onChange={handleInputPasswordChange}
        validity={passwordIsValid}
        onBlur={validateForm}
        required={true}
      />
      <Link className={classes.forgotPassword}>
        <p>Forgot password?</p>
      </Link>

      {!isSubmitting && <button disabled={formIsInvalid}>LOGIN</button>}

      {isSubmitting && <LoadingButton height="6vh" width="21vw" />}

      <Link to="/signup">
        <p>
          No Account ?<span> Sign up now</span>
        </p>
      </Link>
    </Form>
  );
};
export default LoginForm;
