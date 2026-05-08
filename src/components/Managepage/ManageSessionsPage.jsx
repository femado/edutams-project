import "./managepage.css";
import ManageContent from "./ManageContent";
import ManageHelpCard from "./ManageHelpCard";
import ManageNavigation from "./ManageNavigation";
import ManageSidebar from "./ManageSidebar";

const ManageSessionsPage = () => {
  return (
    <main className="manage-page" aria-label="Manage sessions">
      <ManageSidebar />

      <section className="manage-main">
        <ManageHelpCard />
        <ManageContent />
        <ManageNavigation />
      </section>
    </main>
  );
};

export default ManageSessionsPage;
