import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationList from './components/EducationList';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationList />
      </div>
    );
  }
}

export default App;