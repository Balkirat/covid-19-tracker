import React, { Component } from "react";
import "./homePage.scss";
import axios from "axios";
import Cards from "../../Components/Cards";
import Chart from "../../Components/Chart";
import Hero from "../../Components/Hero";

const API_URL = "https://corona.lmao.ninja";

class HomePage extends Component {
  state = {
    data: {},
    dailyData: [],
  };

  defaultData() {
    axios
      .get(`${API_URL}/v2/all`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  dailyData() {
    axios
      .get(`${API_URL}/v2/historical/all`)
      .then((response) => {
        console.log("daily data", response.data);
        this.setState({
          dailyData: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.defaultData();
    this.dailyData();
  }

  render() {
    let { data, dailyData } = this.state;
    return (
      <>
        <Hero />
        <Cards data={data} />
        <Chart dailyData={dailyData} />
      </>
    );
  }
}

export default HomePage;
