import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form'
import Weather from './components/weather';

const API_KEY = '13ded9ef0bba1538ab5f79e98a8c447c';


export default class App extends Component {
  constructor(props){
    super();
    this.props = props;

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error: undefined
    }
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if(city){
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Ops, something goes wrong'
      });
    }
  }
  render() {
    const {temperature, city, country, pressure, sunset, error} = this.state;                
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
              <div className="row">
                <div className="col-sm-5 info"><Info/></div>
                <div className="col-sm-7 form">
                <Form gettingWeather={this.gettingWeather}/>
            <Weather
            temperatureData={temperature}
            cityData={city}
            countryData={country}
            pressureData={pressure}
            sunsetData={sunset}
            errorData={error}
            />
            </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


