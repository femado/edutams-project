import { Link } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const AddLearnersNavigation = () => {
  return (
    <nav className="add-learners-navigation" aria-label="Add learners setup navigation">
      <Link className="add-learners-back-button" to="/?stage=6">
        <IoArrowBack aria-hidden="true" />
        Back
      </Link>

      <div className="add-learners-forward-actions">
        <Link className="add-learners-skip-button" to="/?stage=8">Skip</Link>
        <Link className="add-learners-save-button" to="/?stage=8">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default AddLearnersNavigation;
