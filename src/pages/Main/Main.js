import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LearnerMainPage from "./LearnerMain";
import InstructorMainPage from "./InstructorMain";

const MainPage = () => {
  const data = useLoaderData();

  const dispatch = useDispatch();
  dispatch({ type: "SET_USER_DATA", userData: data });

  const user = useSelector((state) => state.userData);

  if (user.role === "INSTRUCTOR") {
    return <InstructorMainPage />;
  }
  if (user.role === "LEARNER") {
    return <LearnerMainPage />;
  }
};

export default MainPage;
