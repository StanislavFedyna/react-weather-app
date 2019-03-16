import React from 'react';

export default class Info extends React.Component {
  constructor(props){
    super();
    this.props = props;
  }


  render() {                
    return (
        <div>
          <h2>Weather application</h2>
          <p>Get weather in your city!</p>
        </div>
    );
  }
}