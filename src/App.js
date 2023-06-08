import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../src/pages/Login/Login";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
