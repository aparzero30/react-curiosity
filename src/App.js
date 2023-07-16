import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../src/pages/Login/Login";
import loginAction from "./components/LoginForm/LoginAction";
import registerAction from "./components/RegisterForm/RegisterAction";
import SignupPage from "./pages/Signup/Signup";
import MainLoader from "./pages/Main/MainLoader";
import MainPage from "./pages/Main/Main";
import indexLoader from "./pages/Login/indexLoader";
import LandingPage from "./pages/Landing/Landing";
import RootLayout from "./pages/Login/Root";
import ErrorPage from "./pages/Error/Error";
import CreateCoursePage from "./pages/CreateCourse/CreateCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: "true",
        element: <LandingPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
        action: registerAction,
        loader: indexLoader,
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: loginAction,
        loader: indexLoader,
      },
      {
        path: "/main",
        element: <MainPage />,
        loader: MainLoader,
      },
      {
        path: "/create",
        element: <CreateCoursePage />,
        loader: MainLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
