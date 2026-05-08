import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ClassArmsNavigation = () => {
  return (
    <nav className="class-arms-navigation" aria-label="Class arms setup navigation">
      <button className="class-arms-back-button" type="button">
        <IoArrowBack aria-hidden="true" />
        Back
      </button>

      <div className="class-arms-forward-actions">
        <button className="class-arms-skip-button" type="button">Skip</button>
        <button className="class-arms-save-button" type="button">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default ClassArmsNavigation;
