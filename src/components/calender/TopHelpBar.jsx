import { HiVideoCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const TopHelpBar = () => {
  return (
    <div className="top-help-bar">
      <div className="help-actions">
        <span>
          Having Troubles? <a href="#help">Get Help</a>
        </span>
        <button className="logout-button" type="button">
          <IoLogOutOutline aria-hidden="true" />
          Logout
        </button>
      </div>

      <button className="profile-guide" type="button">
        <span className="profile-guide-icon">
          <HiVideoCamera aria-hidden="true" />
        </span>
        <span>How to setup your Profile</span>
        <MdKeyboardArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default TopHelpBar;
