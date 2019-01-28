import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  
  constructor (props) {
    super(props);
    this.messageList = this.messageList.bind(this);

    this.state = {messages: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000')
        .then(res => {
            this.setState({ messages: res.data });
        })
        .catch(err => {
            console.log(err);
        });
  }

  messageList() {
    return this.state.messages.map((message, i) => {
        return <li key={i}>{message}</li>
    });
  }

 /*nameList = () => {
    let names = ['jerry', 'marshall', 'bob'];
    let list = names.map(name => {
      return <li>{name}</li>
    });
    return <ul>{list}</ul>
  }*/
  
  render() {
    return (
      //<div className="App">
      <div>
        <h3>Messages</h3>
        <ul>
          { this.messageList() }
        </ul>
      </div>
      //</div>
    );
  }
}

export default App;
