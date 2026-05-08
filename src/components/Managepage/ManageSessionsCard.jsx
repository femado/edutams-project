import { HiDotsHorizontal } from "react-icons/hi";

const sessions = [
  "2025/2026 -First Term",
  "2025/2026 -Second Term",
  "2025/2026 -Third Term",
];

const ManageSessionsCard = () => {
  return (
    <section className="manage-card" aria-label="Session list">
      <div className="manage-card-top">
        <h3>Manage Sessions</h3>
        <button className="manage-card-menu" type="button" aria-label="More options">
          <HiDotsHorizontal aria-hidden="true" />
        </button>
      </div>

      <div className="manage-table-wrap">
        <table className="manage-table">
          <thead>
            <tr>
              <th>Session / Term</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session}>
                <td data-label="Session / Term">{session}</td>
                <td data-label="Status">
                  <span className="manage-status">Active to start the term</span>
                </td>
                <td data-label="Action">
                  <button
                    className="manage-row-action"
                    type="button"
                    aria-label={`Manage ${session}`}
                  >
                    <HiDotsHorizontal aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageSessionsCard;
