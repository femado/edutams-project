import AddLearnersNavigation from "./AddLearnersNavigation";
import AddLearnersPanel from "./AddLearnersPanel";
import AddLearnersSidebar from "./AddLearnersSidebar";
import AddLearnersTopBar from "./AddLearnersTopBar";

const AddLearnersLayout = () => {
  return (
    <main className="add-learners-page">
      <AddLearnersSidebar />

      <section className="add-learners-main" aria-labelledby="add-learners-title">
        <AddLearnersTopBar />

        <div className="add-learners-content">
          <header className="add-learners-heading">
            <h1 id="add-learners-title">Add Learners</h1>
            <p>Add your learners into their&nbsp; classes</p>
          </header>

          <AddLearnersPanel />
        </div>

        <AddLearnersNavigation />
      </section>
    </main>
  );
};

export default AddLearnersLayout;
