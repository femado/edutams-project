import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";

const ManageNavigation = () => {
  return (
    <nav className="manage-navigation" aria-label="Manage sessions navigation">
      <Link className="manage-back-button" to="/?stage=2">
        <FiArrowLeft aria-hidden="true" />
        Back
      </Link>

      <button className="manage-bottom-menu" type="button" aria-label="More steps">
        <HiDotsHorizontal aria-hidden="true" />
      </button>

      <div className="manage-forward-actions">
        <Link className="manage-skip-button" to="/?stage=4">
          Skip
        </Link>
        <Link className="manage-save-button" to="/?stage=4">
          Save &amp; Continue
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default ManageNavigation;
