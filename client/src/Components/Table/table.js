import React from "react";
import "./table.scss";
import CountUp from "react-countup";

const Table = (props) => {
  props.tableData.sort((a, b) => parseFloat(b.cases) - parseFloat(a.cases));
  if (!props.worldData.cases) {
    return "Loading.....";
  }
  console.log(props.toggle);
  return (
    <>
      {!props.toggle && (
        <div className="table">
          <table className="table__container">
            <thead className="table__head">
              <tr>
                <th className="table__head--row table__head--row--name">
                  Country
                </th>
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
      )}
      {props.toggle && (
        <div className="card-wrapper">
          {props.tableData.map((data) => {
            return (
              <>
                <div className="card">
                  <h3>
                    {data.country}{" "}
                    <img
                      className="card__logo"
                      src={data.countryInfo.flag}
                    ></img>
                  </h3>
                  <div className="card__description">
                    <div className="card__description--left">
                      <h5>
                        Total Cases <span>{data.cases}</span>
                      </h5>
                      <h5>
                        Total Deaths <span>{data.deaths}</span>
                      </h5>
                      <h5>
                        New Cases <span>{data.todayCases}</span>
                      </h5>
                      <h5>
                        New Deaths <span>{data.todayDeaths}</span>
                      </h5>
                    </div>

                    <div className="card__description--right">
                      <h5>
                        Total Recovered <span>{data.recovered}</span>
                      </h5>
                      <h5>
                        Active Cases <span>{data.active}</span>
                      </h5>
                      <h5>
                        Critical Cases <span>{data.critical}</span>
                      </h5>
                      <h5>
                        Cases Per Million <span>{data.casesPerOneMillion}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Table;
