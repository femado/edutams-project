import { HiVideoCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const LandingHelpCard = () => {
  return (
    <div className="landing-help">
      <div className="landing-help-actions">
        <span>
          Having Troubles? <a href="#help">Get Help</a>
        </span>
        <button className="landing-logout" type="button">
          <IoLogOutOutline aria-hidden="true" />
          Logout
        </button>
      </div>

      <button className="landing-profile-guide" type="button">
        <span className="landing-video-icon">
          <HiVideoCamera aria-hidden="true" />
        </span>
        <span>How to setup your Profile</span>
        <MdKeyboardArrowRight className="landing-guide-arrow" aria-hidden="true" />
      </button>
    </div>
  );
};

export default LandingHelpCard;
