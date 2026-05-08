import calendarImage from "../../assets/images/c1663bf1-6721-489d-bc59-ff85fcd8e64d 2.png";
import circleImage from "../../assets/images/Group 1261158898.png";

const OnboardingSidebar = () => {
  return (
    <aside className="calendar-sidebar">
      <div className="sidebar-copy">
        <h2>Build a smarter school experience in minutes.</h2>
        <p>
          From lesson planning to student engagement-everything in one place.
          Teach better. Manage easier.
        </p>
      </div>

      <div className="sidebar-art" aria-hidden="true">
        <img className="sidebar-circle" src={circleImage} alt="" />
        <img className="sidebar-calendar" src={calendarImage} alt="" />
      </div>
    </aside>
  );
};

export default OnboardingSidebar;
