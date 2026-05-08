import ManageSessionsCard from "./ManageSessionsCard";

const ManageContent = () => {
  return (
    <div className="manage-content">
      <header className="manage-heading">
        <h2>Manage Sessions</h2>
        <p>Select the session and subscribe</p>
      </header>

      <ManageSessionsCard />
    </div>
  );
};

export default ManageContent;
