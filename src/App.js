import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../src/pages/Login/Login";
import loginAction from "./components/LoginForm/LoginAction";
import registerAction from "./components/RegisterForm/RegisterAction";
import SignupPage from "./pages/Signup/Signup";
import MainPage from "./pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <LoginPage />,
    action: loginAction,
  },
  {
    path: "/main",
    element: <MainPage />,
    action: loginAction,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
