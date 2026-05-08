import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const StartSetupButton = () => {
  return (
    <Link className="landing-start-button" to="/setup">
      Start Setup
      <FiArrowRight aria-hidden="true" />
    </Link>
  );
};

export default StartSetupButton;
