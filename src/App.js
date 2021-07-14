import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationList from './components/EducationList';
import WorkXpList from './components/WorkXpList';
import './App.css';

class App extends Component {
  /*constructor() {
    super();
  }*/

  render() {
    return (
      <div className="app-container">
        <GeneralInfo />
        <EducationList />
        <WorkXpList />
      </div>
    );
  }
}

export default App;