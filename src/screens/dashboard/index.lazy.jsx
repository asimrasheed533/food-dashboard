import { Chart, DashboardOrderEntry, DashboardStartEntry } from "components";

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__left">
        <div className="dashboard__container__left__entry">
          <div className="dashboard__container__left__main">
            <div className="dashboard__container__left__main__header">
              Daily Sales
            </div>
            <div className="dashboard__container__left__main__content">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
