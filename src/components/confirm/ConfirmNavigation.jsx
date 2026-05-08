import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ConfirmNavigation = () => {
  return (
    <nav className="confirm-navigation" aria-label="Confirm setup navigation">
      <button className="confirm-back-button" type="button">
        <IoArrowBack aria-hidden="true" />
        Back
      </button>

      <div className="confirm-forward-actions">
        <button className="confirm-skip-button" type="button">Skip</button>
        <button className="confirm-save-button" type="button">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default ConfirmNavigation;
