import React from 'react';

export default class Form extends React.Component {
  constructor(props){
    super();
    this.props = props;
  }


  render() {     
    const { gettingWeather } = this.props;         
    return(
      <form action="" onSubmit={gettingWeather}>
        <input type="text" name="city" placeholder="city"/>
        <button>Get Weather</button>
      </form>
    )
  }
}