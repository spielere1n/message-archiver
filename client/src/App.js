import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Index />
      </div>
    );
  }
}

export default App;
