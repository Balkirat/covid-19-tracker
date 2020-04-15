import React from "react";
import "./table.scss";
import CountUp from "react-countup";

const Table = (props) => {
  props.tableData.sort((a, b) => parseFloat(b.cases) - parseFloat(a.cases));
  if (!props.worldData.cases) {
    return "Loading.....";
  }
  console.log(props.tableData)
  return (
    <>
      <div className="table">
        <table className="table__container">
          <thead className="table__head">
            <tr>
              <th className="table__head--row table__head--row--name">Country</th>
              <th className="table__head--row">Total Cases</th>
              <th className="table__head--row">Total Deaths</th>
              <th className="table__head--row">New Cases</th>
              <th className="table__head--row">New Deaths</th>
              <th className="table__head--row">Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table__world">
              <td className="table__data--name">World</td>
              <td>
                <CountUp
                  start={0}
                  end={props.worldData.cases}
                  duration={5}
                  separator=","
                />
              </td>
              <td className="table__data--deaths">
                <CountUp
                  start={0}
                  end={props.worldData.deaths}
                  duration={5}
                  separator=","
                />
              </td>
              <td>
                <CountUp
                  start={0}
                  end={props.worldData.todayCases}
                  duration={5}
                  separator=","
                />
              </td>
              <td>
                <CountUp
                  start={0}
                  end={props.worldData.todayDeaths}
                  duration={5}
                  separator=","
                />
              </td>
              <td className="table__data--recovered">
                <CountUp
                  start={0}
                  end={props.worldData.recovered}
                  duration={5}
                  separator=","
                />
              </td>
            </tr>
            {props.tableData.map((data) => {
              return (
                <>
                  <tr key={data.countryInfo._id}>
                    <td className="table__data--name">{data.country}</td>
                    <td>
                      <CountUp
                        start={0}
                        end={data.cases}
                        duration={5}
                        separator=","
                      />
                    </td>
                    <td className="table__data--deaths">
                      <CountUp
                        start={0}
                        end={data.deaths}
                        duration={5}
                        separator=","
                      />
                    </td>
                    <td>
                      <CountUp
                        start={0}
                        end={data.todayCases}
                        duration={5}
                        separator=","
                      />
                    </td>
                    <td>
                      <CountUp
                        start={0}
                        end={data.todayDeaths}
                        duration={5}
                        separator=","
                      />
                    </td>
                    <td className="table__data--recovered">
                      <CountUp
                        start={0}
                        end={data.recovered}
                        duration={5}
                        separator=","
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="cards-wrapper">
      {  props.tableData.map((data) =>{
        return (
          <>
          <div className="cards">
            <h3>{data.country}  <img className="cards__logo" src={data.countryInfo.flag}></img></h3>
            <h5>Total Cases: {data.cases}</h5>
            <h5>Total Deaths: {data.deaths}</h5>
            <h5>New Cases: {data.todayCases}</h5>
            <h5>New Deaths: {data.todayDeaths}</h5>
            <h5>Total Recovered: {data.recovered}</h5>
            <h5>Active Cases: {data.active}</h5>
            <h5>Critical Cases: {data.critical}</h5>
          </div>
          </>
        )
      }) }
      </div>
    </>
  );
};

export default Table;
