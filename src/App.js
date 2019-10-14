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
    filter: ""
  }

  handleFilter = evt => {
    const filter = evt.target.value;
    const slug = filter.split(' ').join('-').toLowerCase();
    this.fetchByFilter(filter, slug);
  }

  handleClickFavorite = evt => {
    const filter = evt.target.id;
    const slug = filter.split(' ').join('-').toLowerCase();
    this.fetchByFilter(filter, slug);
  }

  handleAddFavorite = () => {
    this.setState({
      favorites: [...this.state.favorites, this.state.filter]
    })
  }

  fetchByFilter = (filter, slug) => {
    fetch(`https://app.oddsapi.io/api/v1/odds?sport=${slug}&apikey=27cfbf70-edea-11e9-9b0f-9d1c661c1a93`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.slice(0, 5));
      const odds = data;
      // console.log(slug);
      this.setState({
        odds,
        filter
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
                  filter={ this.state.filter }
                  handleFilter={ this.handleFilter }
                  handleClickFavorite={ this.handleClickFavorite }/>
        < OddsHeader filter={ this.state.filter } handleAddFavorite={ this.handleAddFavorite }/>
        < OddsContainer odds={ this.state.odds }/>
      </ div >
    );
  }

}
