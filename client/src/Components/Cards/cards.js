import React from "react";
import "./cards.scss";
import CountUp from "react-countup";

function cards(props) {
  if (!props.data.cases) {
    return "Loading.....";
  }
  return (
    <>
      <div className="card--container">
        <div className="cards">
          <h3 className="cards__heading cards__heading--yellow">
            ACTIVE CASES
          </h3>
          <h5>Infected</h5>
          <p>
            <CountUp
              start={0}
              end={props.data.cases}
              duration={5}
              separator=","
            />
          </p>
          <p>{new Date(props.data.updated).toDateString()}</p>
          <p>Total No. Infected People from Covid-19</p>
        </div>
        <div className="cards">
          <h3 className="cards__heading cards__heading--green">
            RECOVERED CASES
          </h3>
          <h5>Recovered</h5>
          <p>
            {" "}
            <CountUp
              start={0}
              end={props.data.recovered}
              duration={3}
              separator=","
            />
          </p>
          <p>{new Date(props.data.updated).toDateString()}</p>
          <p>Total No. Recovered People from Covid-19</p>
        </div>
        <div className="cards">
          <h3 className="cards__heading cards__heading--red">TOTAL DEATHS</h3>
          <h5>Deaths</h5>
          <p>
            {" "}
            <CountUp
              start={0}
              end={props.data.deaths}
              duration={3}
              separator=","
            />
          </p>
          <p>{new Date(props.data.updated).toDateString()}</p>
          <p>Total No. of Deaths from Covid-19</p>
        </div>
        <div className="cards">
          <h3 className="cards__heading cards__heading--lightgray">
            TODAY'S DATA
          </h3>
          <h5>New Cases</h5>
          <p>
            {" "}
            <CountUp
              start={0}
              end={props.data.todayCases}
              duration={2}
              separator=","
            />
          </p>
          <h5>New Deaths</h5>
          <p>
            {" "}
            <CountUp
              start={0}
              end={props.data.todayDeaths}
              duration={2}
              separator=","
            />
          </p>
          <p>{new Date(props.data.updated).toDateString()}</p>
        </div>
      </div>
    </>
  );
}

export default cards;
