import MainWrapper from "../../ui/MainWrapper/MainWrapper";
import LearnerNavbar from "../../components/Navbar/LearnerNavbar";
import TodoPage from "../Todo/TodoPage";

const LearnerMainPage = () => {
  return (
    <MainWrapper>
      <LearnerNavbar />
      <TodoPage />
    </MainWrapper>
  );
};
export default LearnerMainPage;
