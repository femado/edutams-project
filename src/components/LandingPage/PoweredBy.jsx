import edutamsLogo from "../../assets/images/image.png";

const PoweredBy = () => {
  return (
    <div className="landing-powered">
      <span className="landing-powered-label">Powered by</span>
      <div className="landing-brand">
        <img className="landing-powered-logo" src={edutamsLogo} alt="EduTAMS" />
      </div>
    </div>
  );
};

export default PoweredBy;
