import { BsThreeDots } from "react-icons/bs";

const TeacherTableRow = ({ teacher }) => {
  return (
    <tr>
      <td data-label="Staff ID">{teacher.staffId}</td>
      <td data-label="Surname">{teacher.surname}</td>
      <td data-label="First Name">{teacher.firstName}</td>
      <td data-label="Phone">{teacher.phone}</td>
      <td data-label="Gender">{teacher.gender}</td>
      <td data-label="Email">{teacher.email}</td>
      <td data-label="Arm">
        <span className="teacher-arm-badge">{teacher.arm}</span>
      </td>
      <td data-label="Action">
        <button className="teacher-action-button" type="button" aria-label={`Open actions for ${teacher.firstName}`}>
          <BsThreeDots aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};

export default TeacherTableRow;
