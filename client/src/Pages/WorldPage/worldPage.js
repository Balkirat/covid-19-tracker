import React, { Component } from "react";
import Table from "../../Components/Table";
import axios from "axios";

const API_URL = "https://corona.lmao.ninja";

class WorldPage extends Component {
  state = {
    data: [],
    worldData: {},
    searchedData: [],
    searched: false,
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

  searchCountry = (e) => {
    e.preventDefault();
    console.log("IN World Page");
    let newData = this.state.data.filter((data) => {
      return e.target.value !== ""
        ? data.country.includes(e.target.value)
        : data;
    });
    console.log(newData);
    this.setState({
      searchedData: newData,
      searched: true,
    });
  };

  componentDidMount() {
    this.tableData();
    this.worldData();
  }

  render() {
    return (
      <>
        <form onChange={this.searchCountry} onSubmit={this.searchCountry}>
          <input name="search" type="search" placeholder="Search..."></input>
        </form>
        {!this.state.searched && (
          <Table tableData={this.state.data} worldData={this.state.worldData} />
        )}
        {this.state.searched && (
          <Table
            tableData={this.state.searchedData}
            worldData={this.state.worldData}
          />
        )}
      </>
    );
  }
}

export default WorldPage;
