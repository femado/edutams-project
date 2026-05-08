import LearnerClassCard from "./LearnerClassCard";

const learnerClasses = [
  { count: "40", label: "JSS 1", active: true },
  { count: "00", label: "JSS 2", active: false },
  { count: "00", label: "JSS 3", active: false },
  { count: "00", label: "SSS 1", active: false },
];

const AddLearnersPanel = () => {
  return (
    <section className="add-learners-panel" aria-label="Learner class upload list">
      <div className="learner-class-list">
        {learnerClasses.map((learnerClass) => (
          <LearnerClassCard learnerClass={learnerClass} key={learnerClass.label} />
        ))}
      </div>
    </section>
  );
};

export default AddLearnersPanel;
