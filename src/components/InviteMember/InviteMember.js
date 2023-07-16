import FormInput from "../../ui/FormInput/FormInput";
import classes from "./InviteMember.module.css";

const InviteMember = (props) => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <FormInput
          label="Invite Email"
          type="email"
          className="fa-solid fa-envelope"
          required={true}
        />
        <button>Invite</button>
      </form>
      <h4>Class</h4>
    </div>
  );
};
export default InviteMember;
