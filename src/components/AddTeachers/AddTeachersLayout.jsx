import AddTeachersNavigation from "./AddTeachersNavigation";
import AddTeachersSidebar from "./AddTeachersSidebar";
import AddTeachersTable from "./AddTeachersTable";
import AddTeachersTopBar from "./AddTeachersTopBar";

const AddTeachersLayout = () => {
  return (
    <main className="add-teachers-page">
      <AddTeachersSidebar />

      <section className="add-teachers-main" aria-labelledby="add-teachers-title">
        <AddTeachersTopBar />

        <div className="add-teachers-content">
          <header className="add-teachers-heading">
            <h1 id="add-teachers-title">Add Teacher s</h1>
            <p>Onboard your teachers to your school</p>
          </header>

          <div className="add-teacher-action-wrap">
            <button className="add-teacher-button" type="button">
              <span aria-hidden="true">+</span>
              <span>Add New<br />Teacher</span>
            </button>
          </div>

          <AddTeachersTable />
        </div>

        <AddTeachersNavigation />
      </section>
    </main>
  );
};

export default AddTeachersLayout;
