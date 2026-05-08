const weeks = Array.from({ length: 6 }, (_, index) => ({
  name: `Week ${index + 1}`,
  date: "05/01/2026",
}));

const WeekTable = () => {
  return (
    <div className="week-table-wrap">
      <table className="week-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Start on</th>
            <th>Holiday</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={week.name}>
              <td>{week.name}</td>
              <td>{week.date}</td>
              <td>
                <span className="holiday-dot" aria-label={`${week.name} holiday marker`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeekTable;
