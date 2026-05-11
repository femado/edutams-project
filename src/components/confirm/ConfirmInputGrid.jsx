const fields = ["Surname", "First Name", "Other Name", "Phone", "Email"];
const rows = Array.from({ length: 3 }, (_, index) => index + 1);

const ConfirmInputGrid = () => {
  return (
    <div className="confirm-input-panel">
      {rows.map((row) => (
        <div className="confirm-input-row" key={row}>
          {fields.map((field) => (
            <input
              aria-label={`${field} ${row}`}
              key={`${row}-${field}`}
              placeholder={field}
              type={field === "Email" ? "email" : "text"}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ConfirmInputGrid;
