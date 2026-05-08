import ConfirmFormCard from "./ConfirmFormCard";
import ConfirmNavigation from "./ConfirmNavigation";
import ConfirmSidebar from "./ConfirmSidebar";
import ConfirmTopBar from "./ConfirmTopBar";

const ConfirmLayout = () => {
  return (
    <main className="confirm-page">
      <ConfirmSidebar />

      <section className="confirm-main" aria-labelledby="confirm-title">
        <ConfirmTopBar />

        <div className="confirm-content">
          <header className="confirm-heading">
            <h1 id="confirm-title">Confirm School Head/Admin Detail</h1>
            <p>
              confirm your &#123;school owner&#125; details if the details are
              correct, if incorrect click <a href="#help">Get Help</a>
            </p>
          </header>

          <ConfirmFormCard />
        </div>

        <ConfirmNavigation />
      </section>
    </main>
  );
};

export default ConfirmLayout;
