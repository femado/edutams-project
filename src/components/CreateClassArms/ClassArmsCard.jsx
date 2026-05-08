import ClassArmsHeader from "./ClassArmsHeader";
import ClassArmsRow from "./ClassArmsRow";

const classRows = [
  { name: "JSS 1", count: 2, disabled: false },
  { name: "JSS 2", count: 2, disabled: false },
  { name: "JSS 3", count: 2, disabled: false },
  { name: "SSS 1", count: 2, disabled: false },
  { name: "SSS 2", count: 0, disabled: true },
];

const ClassArmsCard = () => {
  return (
    <section className="class-arms-card" aria-label="Create class arms">
      <ClassArmsHeader />

      <div className="class-arms-list">
        {classRows.map((classRow) => (
          <ClassArmsRow classRow={classRow} key={classRow.name} />
        ))}
      </div>
    </section>
  );
};

export default ClassArmsCard;
