const SchoolDetailsFields = () => {
  return (
    <div className="setup-fields">
      <label>
        <span>School Name</span>
        <input type="text" placeholder="Enter School Name" />
      </label>

      <label>
        <span>Acronym</span>
        <input type="text" placeholder="e.g.  GSS" />
      </label>

      <label>
        <span>Address</span>
        <textarea placeholder="Enter school address" rows="4" />
      </label>
    </div>
  );
};

export default SchoolDetailsFields;
