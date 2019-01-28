import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  
  constructor (props) {
    super(props);

    this.state = {messages: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000')
        .then(res => res.json())
        .then(messages => this.setState({messages}))
        .catch(err => console.log(err))
  }

  /*messageList() {
    return this.state.messages.map((message, i) => {
        return <li key={i}>{message}</li>
    });
  }*/
  
  render() {
    return (
      //<div className="App">
      <div>
        <h3>Messages</h3>
        <ul>
          {this.state.messages.map(message => 
            <li key={message.id}>{message}</li>  
          )}
        </ul>
      </div>
      //</div>
    );
  }
}

export default App;
