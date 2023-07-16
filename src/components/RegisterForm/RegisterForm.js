import classes from "./RegisterForm.module.css";
import FormInput from "../../ui/FormInput/FormInput";
import { useState } from "react";
import { Form, useNavigation, useActionData, Link } from "react-router-dom";

import LoadingButton from "../../ui/LoadingButton/LoadingButton";

const RegisterForm = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [password, setPassword] = useState("");
  // const [secPassword, setSecPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [secPasswordIsValid, setSecPasswordIsValid] = useState(false);
  const [fnameIsValid, setFnameIsValid] = useState(false);
  const [snameIsValid, setSnameIsValid] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  let timeoutId = null;

  const validateForm = () => {
    if (
      !emailIsValid ||
      !passwordIsValid ||
      !secPasswordIsValid ||
      !formIsInvalid ||
      !snameIsValid
    ) {
      setFormIsInvalid(true);
    }

    setFormIsInvalid(false);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setFormIsInvalid(true);
      setEmailIsValid(false);
    } else {
      if (
        !passwordIsValid ||
        !secPasswordIsValid ||
        !fnameIsValid ||
        !snameIsValid
      ) {
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
      if (
        !emailIsValid ||
        !secPasswordIsValid ||
        !fnameIsValid ||
        !snameIsValid
      ) {
        setFormIsInvalid(true);
      } else {
        setFormIsInvalid(false);
      }

      setPasswordIsValid(true);
    }
  };

  const validateSecPassword = (value) => {
    if (value !== password) {
      setSecPasswordIsValid(false);
    } else {
      setSecPasswordIsValid(true);
      if (!emailIsValid || !passwordIsValid || !fnameIsValid || !snameIsValid) {
        setFormIsInvalid(true);
      } else {
        setFormIsInvalid(false);
      }
    }
  };

  const checkNameIsValid = (value) => {
    if (value.length === 0 || value.trim() === 0 || /^\d+$/.test(value)) {
      return false;
    }
    return true;
  };

  const validateFirstName = (value) => {
    if (!checkNameIsValid(value)) {
      setFormIsInvalid(true);
      setFnameIsValid(false);
    } else {
      if (
        !emailIsValid ||
        !passwordIsValid ||
        !secPasswordIsValid ||
        !snameIsValid
      ) {
        setFormIsInvalid(true);
      } else {
        setFormIsInvalid(false);
      }
      setFnameIsValid(true);
    }
  };

  const validateSecondName = (value) => {
    if (!checkNameIsValid(value)) {
      setFormIsInvalid(true);
      setSnameIsValid(false);
    } else {
      if (
        !emailIsValid ||
        !passwordIsValid ||
        !secPasswordIsValid ||
        !fnameIsValid
      ) {
        setFormIsInvalid(true);
      } else {
        setFormIsInvalid(false);
      }
      setSnameIsValid(true);
    }
  };

  const handleInputFnameChange = (e) => {
    clearTimeout(timeoutId);
    setFnameIsValid(true);

    // Debounce email validation for 500 milliseconds
    timeoutId = setTimeout(() => {
      validateFirstName(e.target.value);
    }, 500);
  };

  const handleInputSnameChange = (e) => {
    clearTimeout(timeoutId);
    setSnameIsValid(true);

    // Debounce email validation for 500 milliseconds
    timeoutId = setTimeout(() => {
      validateSecondName(e.target.value);
    }, 500);
  };

  const handleInputSecPasswordChange = (e) => {
    clearTimeout(timeoutId);
    setSecPasswordIsValid(true);

    // Debounce email validation for 500 milliseconds
    timeoutId = setTimeout(() => {
      validateSecPassword(e.target.value);
    }, 500);
  };

  const handleInputEmailChange = (e) => {
    clearTimeout(timeoutId);
    setEmailIsValid(true);

    // Debounce email validation for 500 milliseconds
    timeoutId = setTimeout(() => {
      validateEmail(e.target.value);
    }, 500);
  };

  const handleInputPasswordChange = (e) => {
    setPassword(e.target.value);
    clearTimeout(timeoutId);
    setPasswordIsValid(true);

    // Debounce email validation for 500 milliseconds
    timeoutId = setTimeout(() => {
      validatePassword(e.target.value);
    }, 500);
  };
  return (
    <div className={classes.wrapper}>
      <Form className={classes.form} method="POST">
        <h1>SignUp</h1>
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
        <FormInput
          label="Retype Password"
          type="password"
          name="userSecondPassword"
          className="fa-solid fa-lock"
          onChange={handleInputSecPasswordChange}
          validity={secPasswordIsValid}
          onBlur={validateForm}
          required={true}
        />
        <FormInput
          label="First Name"
          type="name"
          name="userFirstName"
          className="fa-regular fa-user"
          onChange={handleInputFnameChange}
          validity={fnameIsValid}
          onBlur={validateForm}
          required={true}
        />
        <FormInput
          label="Last Name"
          type="name"
          name="userLastName"
          className="fa-regular fa-user"
          onChange={handleInputSnameChange}
          validity={snameIsValid}
          onBlur={validateForm}
          required={true}
        />
        <FormInput
          label="Role"
          type="name"
          name="userRole"
          className="fa-solid fa-face-smile"
          onBlur={validateForm}
          validity={true}
          required={true}
        />

        {!isSubmitting && <button disabled={formIsInvalid}>SIGNUP</button>}

        {isSubmitting && <LoadingButton height="6vh" width="21vw" />}
      </Form>
      <div className={classes.formBanner}>
        <h1>Curiosity</h1>
        <i className="fa-solid fa-paw fa-rotate-180"></i>
        <Link to="/login">
          <p>
            Already have an account ?<span> Login instead</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
export default RegisterForm;
