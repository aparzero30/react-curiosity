import classes from "./CourseForm.module.css";
import FormInput from "../../ui/FormInput/FormInput";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { useState } from "react";

const CourseForm = () => {
  const title = useSelector((state) => state.editCourse.title);
  const meetingLink = useSelector((state) => state.editCourse.meetingLink);
  const image = useSelector((state) => state.editCourse.image);
  const description = useSelector((state) => state.editCourse.description);

  const [newTitle, setNewTitle] = useState(title);
  const [newLink, setNewLink] = useState(meetingLink);
  const [newImage, setNewImage] = useState(image);
  const [newDescription, setNewDescription] = useState(description);

  console.log("hello: " + newTitle);
  console.log("hello: " + newLink);
  console.log("hello: " + newImage);
  console.log("hello: " + newDescription);

  return (
    <form className={classes.form}>
      <div className={classes.photo}>C</div>
      <FormInput
        label="Title Here"
        className="fa-solid fa-paw"
        validity="true"
      />
      <FormInput
        label="(Optional)Paste meeting link here"
        className="fa-solid fa-video"
        validity="true"
      />
      <div className={classes.upload}>
        <i className="fa-solid fa-upload" />
        <label> UPLOAD</label>
      </div>

      <textarea rows={4} placeholder="Type here..." required />
      <button>CREATE</button>
    </form>
  );
};
export default CourseForm;
