import ClassArmsCard from "./ClassArmsCard";
import ClassArmsNavigation from "./ClassArmsNavigation";
import ClassArmsSidebar from "./ClassArmsSidebar";
import ClassArmsTopBar from "./ClassArmsTopBar";

const CreateClassArmsLayout = () => {
  return (
    <main className="class-arms-page">
      <ClassArmsSidebar />

      <section className="class-arms-main" aria-labelledby="class-arms-title">
        <ClassArmsTopBar />

        <div className="class-arms-content">
          <header className="class-arms-heading">
            <h1 id="class-arms-title">Create Class Arms</h1>
            <p>
              Setup your class arm and deactivate any class you currently do not
              have in your school
            </p>
          </header>

          <ClassArmsCard />
        </div>

        <ClassArmsNavigation />
      </section>
    </main>
  );
};

export default CreateClassArmsLayout;
