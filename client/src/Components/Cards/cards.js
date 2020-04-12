import React from "react";
import "./cards.scss";
import CountUp from "react-countup";

function cards(props) {
  console.log("in cards ", props.data.confirmed);
  if (!props.data.confirmed) {
    return "Loading.....";
  } else {
    console.log("in cards ", props.data.confirmed.value);
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
              end={props.data.confirmed.value}
              duration={5}
              separator=","
            />
          </p>
          <p>{new Date(props.data.lastUpdate).toDateString()}</p>
          <p>Total No. Infected People from Covid-19</p>
        </div>
        <div className="cards">
          <h3 className="cards__heading cards__heading--green">RECOVERED</h3>
          <h5>Recovered</h5>
          <p>
            {" "}
            <CountUp
              start={0}
              end={props.data.recovered.value}
              duration={3}
              separator=","
            />
          </p>
          <p>{new Date(props.data.lastUpdate).toDateString()}</p>
          <p>Total No. Recovered People from Covid-19</p>
        </div>
        <div className="cards">
          <h3 className="cards__heading cards__heading--red">TOTAL DEATHS</h3>
          <h5>Deaths</h5>
          <p>
            {" "}
            <CountUp
              start={0}
              end={props.data.deaths.value}
              duration={3}
              separator=","
            />
          </p>
          <p>{new Date(props.data.lastUpdate).toDateString()}</p>
          <p>Total No. of Deaths from Covid-19</p>
        </div>
      </div>
    </>
  );
}

export default cards;
