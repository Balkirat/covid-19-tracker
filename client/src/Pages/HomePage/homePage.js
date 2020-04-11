import React, { Component } from "react";
import "./homePage.scss";
import Cards from "../../Components/Cards";
import Chart from "../../Components/Chart";
import CountrySelector from "../../Components/CountrySelector";

class HomePage extends Component{
    render(){
        return(
            <>
                <h1>Hi </h1>
                <Cards />
                <Chart />
                <CountrySelector />
            </>
        )
    }
}

export default HomePage;