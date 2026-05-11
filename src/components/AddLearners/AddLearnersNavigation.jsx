import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const AddLearnersNavigation = () => {
  return (
    <nav className="add-learners-navigation" aria-label="Add learners setup navigation">
      <button className="add-learners-back-button" type="button">
        <IoArrowBack aria-hidden="true" />
        Back
      </button>

      <div className="add-learners-forward-actions">
        <button className="add-learners-skip-button" type="button">Skip</button>
        <button className="add-learners-save-button" type="button">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default AddLearnersNavigation;
