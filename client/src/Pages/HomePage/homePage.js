import React, { Component } from "react";
import "./homePage.scss";
import axios from "axios";
import Cards from "../../Components/Cards";
import Chart from "../../Components/Chart";
import CountrySelector from "../../Components/CountrySelector";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";

const API_URL = "https://covid19.mathdro.id/api";

class HomePage extends Component {
  state = {
    data: {},
  };

  defaultData() {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.defaultData();
  }

  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <>
        <Header />
        <Hero />
        <Cards data={data} />
        <Chart />
        <CountrySelector />
      </>
    );
  }
}

export default HomePage;
