import React from "react";
import "./chart.scss";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
  const lineChart = props.dailyData.cases ? (
    <Line
      data={{
        labels: Object.keys(props.dailyData.cases),
        datasets: [
          {
            data: Object.values(props.dailyData.cases),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: Object.values(props.dailyData.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: Object.values(props.dailyData.recovered),
            label: "Recovered",
            borderColor: "Green",
            backgroundColor: "rgba(127,255,0,.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <div className="chart">{lineChart}</div>
    </>
  );
};

export default Chart;
