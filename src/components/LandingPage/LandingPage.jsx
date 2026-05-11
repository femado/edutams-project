import "./landing-page.css";
import HeroCopy from "./HeroCopy";
import HeroStudents from "./HeroStudents";
import LandingHelpCard from "./LandingHelpCard";
import PoweredBy from "./PoweredBy";
import StartSetupButton from "./StartSetupButton";

const LandingPage = () => {
  return (
    <main className="landing-page" aria-label="School portal onboarding">
      <section className="landing-blue-panel">
        <HeroCopy />
        <PoweredBy />
      </section>

      <section className="landing-light-panel" aria-label="Setup help">
        <LandingHelpCard />
      </section>

      <HeroStudents />
      <StartSetupButton />
    </main>
  );
};

export default LandingPage;
