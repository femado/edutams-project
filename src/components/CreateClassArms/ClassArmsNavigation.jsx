import { Link } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ClassArmsNavigation = () => {
  return (
    <nav className="class-arms-navigation" aria-label="Class arms setup navigation">
      <Link className="class-arms-back-button" to="/?stage=5">
        <IoArrowBack aria-hidden="true" />
        Back
      </Link>

      <div className="class-arms-forward-actions">
        <Link className="class-arms-skip-button" to="/?stage=7">Skip</Link>
        <Link className="class-arms-save-button" to="/?stage=7">
          Save & Continue
          <IoArrowForward aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default ClassArmsNavigation;
