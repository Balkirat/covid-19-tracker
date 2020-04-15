import React, { Component } from "react";
import Table from "../../Components/Table";
import "./worldPage.scss";
import axios from "axios";
import Form from "react-bootstrap/Form";
import MediaQuery from "react-responsive";

const API_URL = "https://corona.lmao.ninja";

class WorldPage extends Component {
  state = {
    data: [],
    worldData: {},
    searchedData: [],
    searched: false,
    toggle: true,
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

  toggleHandler = (e) => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  handleMediaQueryChange = (matches) => {
    console.log("matches", matches);
    if (!matches) {
      this.setState({
        toggle: true,
      });
    }
  };

  componentDidMount() {
    this.tableData();
    this.worldData();
  }

  render() {
    return (
      <>
        <div className="worldPage">
          <div className="worldPage__form">
            <form onChange={this.searchCountry} onSubmit={this.searchCountry}>
              <input
                className="worldPage__form--search"
                name="search"
                type="search"
                placeholder="Filter..."
              ></input>
            </form>
            <MediaQuery
              minDeviceWidth={768}
              onChange={this.handleMediaQueryChange}
            >
              <></>
            </MediaQuery>
            <Form className="worldPage__switch" onChange={this.toggleHandler}>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Table / Cards"
              />
            </Form>
          </div>
          {!this.state.searched && (
            <Table
              tableData={this.state.data}
              worldData={this.state.worldData}
              toggle={this.state.toggle}
            />
          )}
          {this.state.searched && (
            <Table
              tableData={this.state.searchedData}
              worldData={this.state.worldData}
              toggle={this.state.toggle}
            />
          )}
        </div>
      </>
    );
  }
}

export default WorldPage;
