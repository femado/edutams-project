import ConfirmInputGrid from "./ConfirmInputGrid";
import ConfirmStepTabs from "./ConfirmStepTabs";

const ConfirmFormCard = () => {
  return (
    <section className="confirm-card" aria-label="Confirm admin details">
      <ConfirmStepTabs />
      <ConfirmInputGrid />
    </section>
  );
};

export default ConfirmFormCard;
