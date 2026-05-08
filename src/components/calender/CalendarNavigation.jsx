import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const CalendarNavigation = () => {
  return (
    <nav className="calendar-navigation" aria-label="Calendar setup navigation">
      <button className="back-button" type="button">
        <IoArrowBack aria-hidden="true" />
        Back
      </button>

      <div className="forward-actions">
        <button className="skip-button" type="button">Skip</button>
        <button className="save-button" type="button">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default CalendarNavigation;
