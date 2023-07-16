import MainWrapper from "../../ui/MainWrapper/MainWrapper";
import LearnerNavbar from "../../components/Navbar/LearnerNavbar";
import TodoPage from "../Todo/TodoPage";
const InstructorMainPage = () => {
  return (
    <MainWrapper>
      <LearnerNavbar />
      <TodoPage />
    </MainWrapper>
  );
};
export default InstructorMainPage;
