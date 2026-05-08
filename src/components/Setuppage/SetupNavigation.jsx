import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SetupNavigation = () => {
  return (
    <nav className="setup-navigation" aria-label="School setup navigation">
      <Link className="setup-back-button" to="/">
        <FiArrowLeft aria-hidden="true" />
        Back
      </Link>

      <div className="setup-forward-actions">
        <button className="setup-skip-button" type="button">
          Skip
        </button>
        <Link className="setup-save-button" to="/manage">
          Save &amp; Continue
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default SetupNavigation;
