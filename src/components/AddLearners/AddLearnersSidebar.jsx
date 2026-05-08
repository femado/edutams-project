import circleImage from "../../assets/images/Group 1261158898.png";
import learnerImage from "../../assets/images/thhrer 1.png";

const AddLearnersSidebar = () => {
  return (
    <aside className="add-learners-sidebar">
      <div className="add-learners-sidebar-copy">
        <h2>Build a smarter school experience in minutes.</h2>
        <p>
          From lesson planning to student engagement-everything in one place.
          Teach better. Manage easier.
        </p>
      </div>

      <div className="add-learners-sidebar-art" aria-hidden="true">
        <img className="add-learners-sidebar-circle" src={circleImage} alt="" />
        <img className="add-learners-sidebar-child" src={learnerImage} alt="" />
      </div>
    </aside>
  );
};

export default AddLearnersSidebar;
