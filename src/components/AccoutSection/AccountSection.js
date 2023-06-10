import classes from "./AccountSection.module.css";

const AccountSection = (props) => {
  return (
    <div className={classes.accountSection}>
      <section>
        <label>Enroll</label>
        <i class="fa-solid fa-plus"></i>
      </section>
      <i class="fa-solid fa-message" />
      <i class="fa-solid fa-chalkboard" />
      <i class="fa-solid fa-bell" />
      <div className={classes.profile}>JC</div>
    </div>
  );
};
export default AccountSection;
