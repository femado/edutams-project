import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const AddTeachersNavigation = () => {
  return (
    <nav className="add-teachers-navigation" aria-label="Add teachers setup navigation">
      <button className="add-teachers-back-button" type="button">
        <IoArrowBack aria-hidden="true" />
        Back
      </button>

      <div className="add-teachers-forward-actions">
        <button className="add-teachers-skip-button" type="button">Skip</button>
        <button className="add-teachers-save-button" type="button">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default AddTeachersNavigation;
