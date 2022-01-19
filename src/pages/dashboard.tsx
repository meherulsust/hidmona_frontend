import CardStats from 'components/Cards/CardStats';
import React from 'react';

// layout for page

// import Admin from "layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div>
        {/* Card stats */}
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
            <CardStats
              statSubtitle="Total Offices"
              statTitle="35"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
            <CardStats
              statSubtitle="Total Users"
              statTitle="2,356"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Since last week"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-purple-500"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
            <CardStats
              statSubtitle="Total Transactions"
              statTitle="924,437"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Since yesterday"
              statIconName="fas fa-users"
              statIconColor="bg-green-800"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
            <CardStats
              statSubtitle="PERFORMANCE"
              statTitle="49,65%"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-percent"
              statIconColor="bg-green-400"
            />
          </div>
        </div>
      </div>
    </>
  );
}
