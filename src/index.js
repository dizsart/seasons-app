import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
 

class App extends React.Component {

  state = { lat: null, err: ''};

  componentDidMount ()  {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat : position.coords.latitude });
      },
      err => {
        this.setState({err : err.message})
      }
    );
  }

  componentDidUpdate () {
    console.log('My component just updated it re-rendered!')
  }
  render() {
    
    if(this.state.err && !this.state.lat){
      return (
      <div> Error: {this.state.err}</div>
      )
    }
    if(!this.state.err && this.state.lat){
    return <SeasonDisplay lat = {this.state.lat}/>
    }
    return <div>Loading...</div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));