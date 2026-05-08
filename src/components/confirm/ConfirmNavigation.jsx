import { Link } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ConfirmNavigation = () => {
  return (
    <nav className="confirm-navigation" aria-label="Confirm setup navigation">
      <Link className="confirm-back-button" to="/?stage=4">
        <IoArrowBack aria-hidden="true" />
        Back
      </Link>

      <div className="confirm-forward-actions">
        <Link className="confirm-skip-button" to="/?stage=6">Skip</Link>
        <Link className="confirm-save-button" to="/?stage=6">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default ConfirmNavigation;
