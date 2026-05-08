import { HiVideoCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const ConfirmTopBar = () => {
  return (
    <div className="confirm-top-bar">
      <div className="confirm-help-actions">
        <span>
          Having Troubles? <a href="#help">Get Help</a>
        </span>
        <button className="confirm-logout-button" type="button">
          <IoLogOutOutline aria-hidden="true" />
          Logout
        </button>
      </div>

      <button className="confirm-profile-guide" type="button">
        <span className="confirm-profile-icon">
          <HiVideoCamera aria-hidden="true" />
        </span>
        <span>How to setup your Profile</span>
        <MdKeyboardArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default ConfirmTopBar;
