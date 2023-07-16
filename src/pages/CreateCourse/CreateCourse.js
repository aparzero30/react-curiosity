import SimpleWrapper from "../../ui/SimpleWrapper/SimpleWrapper";
// import SideBar from "../../components/SideBar/SideBar";
import CourseForm from "../../components/CourseForm/CourseForm";
import InviteMember from "../../components/InviteMember/InviteMember";
const CreateCoursePage = () => {
  return (
    <SimpleWrapper>
      <CourseForm />
      <InviteMember />
    </SimpleWrapper>
  );
};
export default CreateCoursePage;
