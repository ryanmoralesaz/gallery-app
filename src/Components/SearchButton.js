import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";


const SearchButton = props => (
  <Button onClick={props.handleButton} className="col">{ props.text }</Button>
)

SearchButton.propTypes = {

  handleButton: PropTypes.func.isRequired,

};

export default SearchButton;
