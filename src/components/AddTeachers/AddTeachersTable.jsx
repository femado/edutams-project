import TeacherTableRow from "./TeacherTableRow";

const teachers = Array.from({ length: 6 }, (_, index) => ({
  id: `teacher-${index + 1}`,
  staffId: "STF001",
  surname: "Adeyemi",
  firstName: "Oluwaseun",
  phone: "08012345678",
  gender: "Male",
  email: "adeyemi@smaiplm.com",
  arm: "A",
}));

const AddTeachersTable = () => {
  return (
    <section className="teachers-table-card" aria-label="Teachers list">
      <div className="teachers-table-scroll">
        <table className="teachers-table">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Surname</th>
              <th>First Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Arm</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <TeacherTableRow teacher={teacher} key={teacher.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AddTeachersTable;
