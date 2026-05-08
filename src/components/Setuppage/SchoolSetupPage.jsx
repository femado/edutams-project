import "./setuppage.css";
import SetupForm from "./SetupForm";
import SetupHelpCard from "./SetupHelpCard";
import SetupNavigation from "./SetupNavigation";
import SetupSidebar from "./SetupSidebar";

const SchoolSetupPage = () => {
  return (
    <main className="setup-page" aria-label="Set up school profile">
      <SetupSidebar />

      <section className="setup-main">
        <SetupHelpCard />
        <SetupForm />
        <SetupNavigation />
      </section>
    </main>
  );
};

export default SchoolSetupPage;
