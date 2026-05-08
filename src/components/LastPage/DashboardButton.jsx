import { Link } from "react-router-dom";

const DashboardButton = () => {
  return (
    <Link className="dashboard-button" to="/?stage=1">
      Continue to Dashboard
    </Link>
  );
};

export default DashboardButton;
