import boyStudent from "../../assets/images/thhrer 1.png";
import girlStudent from "../../assets/images/thheheh 1.png";

const HeroStudents = () => {
  return (
    <div className="landing-students" aria-hidden="true">
      <div className="landing-white-arc" />
      <img className="landing-boy" src={boyStudent} alt="" />
      <img className="landing-girl" src={girlStudent} alt="" />
    </div>
  );
};

export default HeroStudents;
