import DashboardButton from "./DashboardButton";
import SuccessBadge from "./SuccessBadge";

const SuccessPanel = () => {
  return (
    <section className="success-panel" aria-label="Setup completed">
      <SuccessBadge />
      <DashboardButton />
    </section>
  );
};

export default SuccessPanel;
