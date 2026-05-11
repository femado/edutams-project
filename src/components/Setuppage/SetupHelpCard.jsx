import { HiVideoCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const SetupHelpCard = () => {
  return (
    <div className="setup-help">
      <div className="setup-help-actions">
        <span>
          Having Troubles? <a href="#help">Get Help</a>
        </span>
        <button className="setup-logout" type="button">
          <IoLogOutOutline aria-hidden="true" />
          Logout
        </button>
      </div>

      <button className="setup-profile-guide" type="button">
        <span className="setup-video-icon">
          <HiVideoCamera aria-hidden="true" />
        </span>
        <span>How to setup your Profile</span>
        <MdKeyboardArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default SetupHelpCard;
