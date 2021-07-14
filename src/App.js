import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationList from './components/EducationList';
import WorkXpList from './components/WorkXpList';
import './styles/App.css';

class App extends Component {
  /*constructor() {
    super();
  }*/

  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationList />
        <WorkXpList />
      </div>
    );
  }
}

export default App;