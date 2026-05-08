import circleImage from "../../assets/images/Group 1261158898.png";
import schoolImage from "../../assets/images/ChatGPT Image May 6, 2026, 10_49_17 AM 3.png";

const AddTeachersSidebar = () => {
  return (
    <aside className="add-teachers-sidebar">
      <div className="add-teachers-sidebar-copy">
        <h2>Build a smarter school experience in minutes.</h2>
        <p>
          From lesson planning to student engagement-everything in one place.
          Teach better. Manage easier.
        </p>
      </div>

      <div className="add-teachers-sidebar-art" aria-hidden="true">
        <img className="add-teachers-sidebar-circle" src={circleImage} alt="" />
        <img className="add-teachers-sidebar-school" src={schoolImage} alt="" />
      </div>
    </aside>
  );
};

export default AddTeachersSidebar;
