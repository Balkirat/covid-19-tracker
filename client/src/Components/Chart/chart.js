import React from "react";
import "./chart.scss";
import { Line, Bar } from 'react-chartjs-2';

const Chart = (props) => {
  props.dailyData.map((data) => {
    return console.log("to check map",data.deaths.total)
  }
  )
  const lineChart = (
    props.dailyData[0] ? (
      <Line
        data={{
          labels: props.dailyData.map(( data ) => data.reportDate),
          datasets: [{
            data: props.dailyData.map((data) => data.totalConfirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: props.dailyData.map((data) => data.deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
      
    ) : null
  );

  return (
    <>
    <div className="chart">
      {lineChart}
    </div> 
    </>
  );
}

export default Chart;
