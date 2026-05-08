import { FaInfoCircle } from "react-icons/fa";

const tabs = ["School Owner Detail", "School Head Detail", "Portal Admin"];

const ConfirmStepTabs = () => {
  return (
    <div className="confirm-tabs" aria-label="Confirm detail categories">
      {tabs.map((tab) => (
        <button className="confirm-tab" type="button" key={tab}>
          <FaInfoCircle aria-hidden="true" />
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ConfirmStepTabs;
