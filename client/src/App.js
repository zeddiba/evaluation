import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {data: null, rep: ''};
  }

  componentWillMount(){
    console.log(axios);
    axios.get('https://node-zak.herokuapp.com/api')
    .then((data) => this.setState({data: data.data.data + ' (Choix Oui/Non)'}))
    .catch((err) => console.log(err));
  }

  onResponse(event){
    this.setState({rep: 'Chargement ...'})
    let rep = event.target.value;
    axios.post('https://node-zak.herokuapp.com/api', { response: rep })
    .then((data) => this.setState({rep: data.data.data}) )
    .catch((err) => console.log(err))
  }

  render() {

    return (
      <div>
        <h1>{ this.state.data }</h1>
          Oui<input onChange={this.onResponse.bind(this)} type="radio" value="Oui" name="rep"/>
          Non<input onChange={this.onResponse.bind(this)} type="radio" value="Non" name="rep"/>
          <br/>
          <label>{this.state.rep}</label>
      </div>
    );
  }
}

export default App;
