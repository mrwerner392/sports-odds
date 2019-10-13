import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import SideBar from './components/SideBar';
import OddsHeader from './components/OddsHeader'
import OddsContainer from './components/OddsContainer';

class App extends Component {

  state = {
    odds: [],
    favorites: [],
    filter: ''
  }

  handleFilter = evt => {
    const slug = evt.target.value
    fetch(`https://app.oddsapi.io/api/v1/odds?sport=${slug.toLowerCase()}&apikey=27cfbf70-edea-11e9-9b0f-9d1c661c1a93`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.slice(0, 2));
      const odds = data.slice(0, 5);
      this.setState({
        odds,
        filter: slug
      });
    });
  }

  componentDidMount() {
    fetch('https://app.oddsapi.io/api/v1/odds?apikey=27cfbf70-edea-11e9-9b0f-9d1c661c1a93')
    .then(res => res.json())
    .then(data => {
      // console.log(data.slice(0, 2));
      const odds = data.slice(0, 5);
      this.setState({
        odds
      });
    });

    // fetch('https://app.oddsapi.io/api/v1/odds?sport=tennis&apikey=27cfbf70-edea-11e9-9b0f-9d1c661c1a93')
    // .then(res => res.json())
    // .then(data => console.log(data.splice(0, 5)))
    //

  }


  render() {
    return (
      < div className="App" >
        < TitleBar />
        < SideBar favorites={ this.state.favorites }
                  filter={ this.state.filter }
                  handleFilter={ this.handleFilter }/>
        < OddsHeader filter={ this.state.filter }/>
        < OddsContainer odds={ this.state.odds }/>
      </ div >
    );
  }

}

export default App;
