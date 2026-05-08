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
              <td data-label="Week">{week.name}</td>
              <td data-label="Start on">{week.date}</td>
              <td data-label="Holiday">
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
