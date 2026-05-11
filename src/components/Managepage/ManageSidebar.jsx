import sidebarArt from "../../assets/images/ChatGPT Image May 6, 2026, 10_49_17 AM 3.png";

const ManageSidebar = () => {
  return (
    <aside className="manage-sidebar">
      <div className="manage-sidebar-copy">
        <h1>Build a smarter school experience in minutes.</h1>
        <p>
          From lesson planning to student engagement-everything in one place.
          Teach better. Manage easier.
        </p>
      </div>

      <div className="manage-sidebar-art-wrap" aria-hidden="true">
        <img className="manage-sidebar-art" src={sidebarArt} alt="" />
      </div>
    </aside>
  );
};

export default ManageSidebar;
