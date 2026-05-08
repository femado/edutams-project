import { Link } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const AddTeachersNavigation = () => {
  return (
    <nav className="add-teachers-navigation" aria-label="Add teachers setup navigation">
      <Link className="add-teachers-back-button" to="/?stage=7">
        <IoArrowBack aria-hidden="true" />
        Back
      </Link>

      <div className="add-teachers-forward-actions">
        <Link className="add-teachers-skip-button" to="/?stage=final">Skip</Link>
        <Link className="add-teachers-save-button" to="/?stage=final">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default AddTeachersNavigation;
