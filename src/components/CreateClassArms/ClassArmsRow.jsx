import { FaInfoCircle } from "react-icons/fa";

const arms = ["Alpha", "Beta", "Arm 3", "Arm 4", "Arm 5"];

const ClassArmsRow = ({ classRow }) => {
  return (
    <div className={classRow.disabled ? "class-arm-row is-disabled" : "class-arm-row"}>
      <button className="class-name-pill" type="button">
        <FaInfoCircle aria-hidden="true" />
        {classRow.name}
      </button>

      <label className="generate-arm-control">
        <input aria-label={`${classRow.name} number of arms`} defaultValue={classRow.count} />
        <button type="button">Generate</button>
      </label>

      <div className="arm-buttons" aria-label={`${classRow.name} arms`}>
        {!classRow.disabled &&
          arms.map((arm) => (
            <button className="arm-button" type="button" key={arm}>
              {arm}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ClassArmsRow;
