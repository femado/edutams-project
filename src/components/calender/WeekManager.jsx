import { BsCalendar2Week } from "react-icons/bs";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { IoReload } from "react-icons/io5";
import { MdOutlineNotificationsOff } from "react-icons/md";
import WeekTable from "./WeekTable";

const WeekManager = () => {
  return (
    <section className="week-card" aria-label="Manage school weeks">
      <div className="week-card-top">
        <div className="week-card-title">
          <BsCalendar2Week aria-hidden="true" />
          <span>Manage Weeks</span>
        </div>

        <button className="holiday-button" type="button">
          <MdOutlineNotificationsOff aria-hidden="true" />
          Set Holiday
        </button>
      </div>

      <div className="week-controls">
        <label className="week-count-control">
          <span>Number Of School Weeks</span>
          <input type="number" min="1" defaultValue="12" aria-label="Number of school weeks" />
        </label>

        <label className="date-control">
          <span>State Date</span>
          <div className="date-input-wrap">
            <HiOutlineCalendarDays aria-hidden="true" />
            <input type="text" placeholder="dd/mm/yyyy" aria-label="State date" />
          </div>
        </label>

        <button className="generate-button" type="button">
          <IoReload aria-hidden="true" />
          Generate Week
        </button>
      </div>

      <WeekTable />
    </section>
  );
};

export default WeekManager;
