import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
 

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

  renderContent() {

    if(this.state.err && !this.state.lat){
      return (
      <div> Error: {this.state.err}</div>
      )
    }
    if(!this.state.err && this.state.lat){
    return <SeasonDisplay lat = {this.state.lat}/>
    }
    return <Loader message = "Please accept location request"/>
  }

  render() {
    
    return (
      <div>
        {this.renderContent()}
      </div>
    );
};
};


ReactDOM.render(<App/>, document.querySelector('#root'));