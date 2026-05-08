import { Link } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const CalendarNavigation = () => {
  return (
    <nav className="calendar-navigation" aria-label="Calendar setup navigation">
      <Link className="back-button" to="/?stage=3">
        <IoArrowBack aria-hidden="true" />
        Back
      </Link>

      <div className="forward-actions">
        <Link className="skip-button" to="/?stage=5">Skip</Link>
        <Link className="save-button" to="/?stage=5">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default CalendarNavigation;
