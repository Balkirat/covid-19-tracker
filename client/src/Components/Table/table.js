import React from "react";

const Table = (props) => {
  console.log("in table", props.tableData);
  return (
    <>
      <div className="table">
        <table className="data__table">
          <thead>
            <tr>
              <th className="data__table__titles">Country</th>
              <th className="data__table__titles">Total Cases</th>
              <th className="data__table__titles">Total Deaths</th>
              <th className="data__table__titles">New Cases</th>
              <th className="data__table__titles">New Deaths</th>
              <th className="data__table__titles">Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr className="data__table__column data__table__column--mobile">
              <th className="data__table__titles--mobile">World</th>
  <td className="data__table__row data__table__row--bold">{props.worldData.cases}</td>
  <th className="data__table__titles--mobile">{props.worldData.deaths}</th>
  <td className="data__table__row">{props.worldData.todayCases}</td>
  <th className="data__table__titles--mobile">{props.worldData.todayDeaths}</th>
  <td className="data__table__row">{props.worldData.recovered}</td>
            </tr>
            {props.tableData.map((data) => {
              return (
                <tr className="data__table__column data__table__column--mobile">
                  <td className="data__table__titles--mobile">
                    {data.country}
                  </td>
                  <td className="data__table__row data__table__row--bold">
                    {data.cases}
                  </td>
                  <td className="data__table__row data__table__row--bold">
                    {data.deaths}
                  </td>
                  <td className="data__table__row data__table__row--bold">
                    {data.todayCases}
                  </td>
                  <td className="data__table__row data__table__row--bold">
                    {data.todayDeaths}
                  </td>
                  <td className="data__table__row data__table__row--bold">
                    {data.recovered}
                  </td>
                </tr>
              );
            })}

            {/* <th className="data__table__titles--mobile">300</th>
              <td className="data__table__row">Ronald Lane</td>
              <th className="data__table__titles--mobile">LOCATION</th>
              <td className="data__table__row">San Fancisco, CA</td> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
