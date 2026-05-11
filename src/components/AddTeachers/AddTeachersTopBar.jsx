import { HiVideoCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const AddTeachersTopBar = () => {
  return (
    <div className="add-teachers-top-bar">
      <div className="add-teachers-help-actions">
        <span>
          Having Troubles? <a href="#help">Get Help</a>
        </span>
        <button className="add-teachers-logout-button" type="button">
          <IoLogOutOutline aria-hidden="true" />
          Logout
        </button>
      </div>

      <button className="add-teachers-profile-guide" type="button">
        <span className="add-teachers-profile-icon">
          <HiVideoCamera aria-hidden="true" />
        </span>
        <span>How to setup your Profile</span>
        <MdKeyboardArrowRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default AddTeachersTopBar;
