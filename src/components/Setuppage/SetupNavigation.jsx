import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SetupNavigation = () => {
  return (
    <nav className="setup-navigation" aria-label="School setup navigation">
      <Link className="setup-back-button" to="/?stage=1">
        <FiArrowLeft aria-hidden="true" />
        Back
      </Link>

      <div className="setup-forward-actions">
        <Link className="setup-skip-button" to="/?stage=3">
          Skip
        </Link>
        <Link className="setup-save-button" to="/?stage=3">
          Save &amp; Continue
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default SetupNavigation;
