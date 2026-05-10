import LogoUpload from "./LogoUpload";
import SchoolDetailsFields from "./SchoolDetailsFields";

const SetupForm = () => {
  return (
    <div className="setup-content">
      <header className="setup-heading">
        <h2>Set Up Your School Profile</h2>
        <p>
          Upload your school logo and Check your school details,
          if the details is incorrect click here <a href="#help">(Get Help)</a> to make
          complaint
        </p>
      </header>

      <form className="setup-form">
        <LogoUpload />
        <SchoolDetailsFields />
      </form>
    </div>
  );
};

export default SetupForm;
