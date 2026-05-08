import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";

const ManageNavigation = () => {
  return (
    <nav className="manage-navigation" aria-label="Manage sessions navigation">
      <Link className="manage-back-button" to="/setup">
        <FiArrowLeft aria-hidden="true" />
        Back
      </Link>

      <button className="manage-bottom-menu" type="button" aria-label="More steps">
        <HiDotsHorizontal aria-hidden="true" />
      </button>

      <div className="manage-forward-actions">
        <button className="manage-skip-button" type="button">
          Skip
        </button>
        <Link className="manage-save-button" to="/calender">
          Save &amp; Continue
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default ManageNavigation;
