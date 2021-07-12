import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="screen-color">
        <GeneralInfo />
      </div>
    );
  }
}

export default App;