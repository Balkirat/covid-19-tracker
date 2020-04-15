import React from "react";
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
        <table className="data__table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Cases</th>
              <th>Total Deaths</th>
              <th>New Cases</th>
              <th>New Deaths</th>
              <th>Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>World</th>
              <td>
                <CountUp
                  start={0}
                  end={props.worldData.cases}
                  duration={5}
                  separator=","
                />
              </td>
              <td>
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
              <td>
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
                    <th>{data.country}</th>
                    <td>
                      <CountUp
                        start={0}
                        end={data.cases}
                        duration={5}
                        separator=","
                      />
                    </td>
                    <td>
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
                    <td>
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
    </>
  );
};

export default Table;
