import sidebarArt from "../../assets/images/ChatGPT Image May 6, 2026, 10_49_17 AM 3.png";

const SetupSidebar = () => {
  return (
    <aside className="setup-sidebar">
      <div className="setup-sidebar-copy">
        <h1>
          Build a smarter
          school experience
          in minutes.
        </h1>
        <p>
          From lesson planning to student engagement-everything in one place.
          Teach better. Manage easier.
        </p>
      </div>

      <img
        className="setup-sidebar-art"
        src={sidebarArt}
        alt=""
        aria-hidden="true"
      />
    </aside>
  );
};

export default SetupSidebar;
