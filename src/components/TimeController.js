import React from "react";
import MonthList from "./MonthList";
import { connect } from 'react-redux';

class TimeController extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      
    };
  }

  render(){
    // let currentlyVisibleState = null;
    // let buttonText = null;

    // currentlyVisibleState = <MonthList />

    return (
      <React.Fragment>
        <p>Test</p>
        <MonthList />
      </React.Fragment>
    );
  }
}

TimeController = connect()(TimeController);

export default TimeController;