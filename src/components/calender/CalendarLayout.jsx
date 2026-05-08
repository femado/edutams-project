import CalendarNavigation from "./CalendarNavigation";
import OnboardingSidebar from "./OnboardingSidebar";
import TopHelpBar from "./TopHelpBar";
import WeekManager from "./WeekManager";

const CalendarLayout = () => {
  return (
    <main className="calendar-page">
      <OnboardingSidebar />

      <section className="calendar-main" aria-labelledby="manage-weeks-title">
        <TopHelpBar />

        <div className="calendar-content">
          <header className="calendar-heading">
            <h1 id="manage-weeks-title">Manage Weeks</h1>
            <p>
              Choose the type of school you want to set up. This helps us
              tailor the platform to your needs.
            </p>
          </header>

          <WeekManager />
        </div>

        <CalendarNavigation />
      </section>
    </main>
  );
};

export default CalendarLayout;
