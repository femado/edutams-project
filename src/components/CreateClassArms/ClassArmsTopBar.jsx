import { HiVideoCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const ClassArmsTopBar = () => {
  return (
    <div className="class-arms-top-bar">
      <div className="class-arms-help-actions">
        <span>
          Having Troubles? <a href="#help">Get Help</a>
        </span>
        <button className="class-arms-logout-button" type="button">
          <IoLogOutOutline aria-hidden="true" />
          Logout
        </button>
      </div>

      <button className="class-arms-profile-guide" type="button">
        <span className="class-arms-profile-icon">
          <HiVideoCamera aria-hidden="true" />
        </span>
        <span>How to setup your Profile</span>
        <MdKeyboardArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default ClassArmsTopBar;
