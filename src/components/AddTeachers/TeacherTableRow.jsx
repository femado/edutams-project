import { BsThreeDots } from "react-icons/bs";

const TeacherTableRow = ({ teacher }) => {
  return (
    <tr>
      <td>{teacher.staffId}</td>
      <td>{teacher.surname}</td>
      <td>{teacher.firstName}</td>
      <td>{teacher.phone}</td>
      <td>{teacher.gender}</td>
      <td>{teacher.email}</td>
      <td>
        <span className="teacher-arm-badge">{teacher.arm}</span>
      </td>
      <td>
        <button className="teacher-action-button" type="button" aria-label={`Open actions for ${teacher.firstName}`}>
          <BsThreeDots aria-hidden="true" />
        </button>
      </td>
    </tr>
  );
};

export default TeacherTableRow;
