import { FiDownload, FiPlus, FiUploadCloud } from "react-icons/fi";

const LearnerClassCard = ({ learnerClass }) => {
  const statusText = learnerClass.active ? "No Learner add" : "No Learner add";

  return (
    <article className={learnerClass.active ? "learner-class-card is-active" : "learner-class-card"}>
      <div className="learner-count-block">
        <div className="learner-count">{learnerClass.count}</div>
        <span>{statusText}</span>
      </div>

      <button className="learner-class-pill" type="button">
        {learnerClass.label}
      </button>

      <button className="add-new-learner-button" type="button">
        <FiPlus aria-hidden="true" />
        Add New Learner
      </button>

      <div className="template-actions">
        <button className="download-template-button" type="button">
          <FiDownload aria-hidden="true" />
          Download Template
        </button>
        <button className="upload-template-button" type="button">
          <FiUploadCloud aria-hidden="true" />
          Upload Template
        </button>
      </div>
    </article>
  );
};

export default LearnerClassCard;
