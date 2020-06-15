import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import PropTypes from "prop-types";
import SearchForm from "./Components/SearchForm";
import SearchButton from "./Components/SearchButton";
import ImgList from "./Components/ImgList";
import { Container, Button, Row, Col } from "reactstrap";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch("dog");
  }

  performSearch = (query) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
      )
      .then(response => {
        this.setState({
          imgs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  buttonAt = buttonText => this.performSearch(buttonText);
  render() {
    console.log(this.state.imgs);
    return (
      <Container>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Flickr IMG Search</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <Row className="col">
          <SearchButton handleButton={()=>this.buttonAt("monkey")} text="monkeys"/>
          <SearchButton handleButton={()=>this.buttonAt("cat")} text="cats"/>
          <SearchButton handleButton={()=>this.buttonAt("dog")} text="dogs"/>

        </Row>
        <div>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <ImgList data={this.state.imgs} />
          )}
        </div>
      </Container>
    );
  }
}
