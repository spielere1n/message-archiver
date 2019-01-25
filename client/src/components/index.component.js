import React, { Component } from 'react';
import axios from 'axios';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { messages: [] };
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

    render() {
        return(
            <div>
                <h3>Messages</h3>
                <ul>
                {
                    this.state.messages.map(function(item, i){
                        return <li key={i}></li>
                    })
                }
                </ul>
            </div>
        );
    }

}