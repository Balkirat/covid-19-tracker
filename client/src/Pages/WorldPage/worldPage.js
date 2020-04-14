import React, { Component } from "react";
import Table from "../../Components/Table";
import axios from "axios";

const API_URL = "https://corona.lmao.ninja";

class WorldPage extends Component {
  state = {
    data: [],
    worldData: {},
  };

  tableData() {
    axios.get(`${API_URL}/v2/countries`).then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }

  worldData() {
    axios
      .get(`${API_URL}/v2/all`)
      .then((response) => {
        this.setState({
          worldData: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.tableData();
    this.worldData();
  }
  render() {
    return (
      <>
        <Table tableData={this.state.data} worldData={this.state.worldData} />
      </>
    );
  }
}

export default WorldPage;
