import React, { Component } from 'react';
import './App.css';
import TitleBar from './components/TitleBar';
import SideBar from './components/SideBar';
import OddsHeader from './components/OddsHeader'
import OddsContainer from './components/OddsContainer';

export default class App extends Component {

  state = {
    odds: [],
    favorites: [],
    sportFilter: ""
  }

  handleSportFilter = evt => {
    const sportFilter = evt.target.value;
    const slug = sportFilter.split(' ').join('-').toLowerCase();
    this.fetchBySportFilter(sportFilter, slug);
  }

  handleClickFavorite = evt => {
    const sportFilter = evt.target.id;
    const slug = sportFilter.split(' ').join('-').toLowerCase();
    this.fetchBySportFilter(sportFilter, slug);
  }

  handleAddFavorite = () => {
    this.setState({
      favorites: [...this.state.favorites, this.state.sportFilter]
    })
  }

  fetchBySportFilter = (sportFilter, slug) => {
    fetch(`https://app.oddsapi.io/api/v1/odds?sport=${slug}&apikey=27cfbf70-edea-11e9-9b0f-9d1c661c1a93`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.slice(0, 5));
      const odds = data;
      // console.log(slug);
      this.setState({
        odds,
        sportFilter
      });
    });
  }

  componentDidMount() {
    fetch('https://app.oddsapi.io/api/v1/odds?apikey=27cfbf70-edea-11e9-9b0f-9d1c661c1a93')
    .then(res => res.json())
    .then(data => {
      // console.log(data.slice(0, 6));
      const odds = data.slice(0, 50);
      this.setState({
        odds
      });
    });
  }


  render() {
    return (
      < div className="App" >
        < TitleBar />
        < SideBar favorites={ this.state.favorites }
                  sportFilter={ this.state.sportFilter }
                  handleSportFilter={ this.handleSportFilter }
                  handleClickFavorite={ this.handleClickFavorite }/>
        < OddsHeader sportFilter={ this.state.sportFilter } handleAddFavorite={ this.handleAddFavorite }/>
        < OddsContainer odds={ this.state.odds }/>
      </ div >
    );
  }

}
