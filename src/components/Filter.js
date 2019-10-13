import React, { Component } from 'react';

export default class Filter extends Component {

  state = {
    filterOptions: []
  }

  getFilterValues = () => {
    return this.state.filterOptions.map(option => {
      return < option key={Math.floor(Math.random() * 1000000)} value={ option }>{ option }</ option >
    })
  }

  render() {
    return (
      < div className='filter'>
        < label htmlFor='filter' >Filter by Sport: < /label >
        < select onChange={ this.props.handleFilter }>
          { this.getFilterValues() }
        </ select >
      </ div >
    )
  }

  componentDidMount() {
    fetch('https://app.oddsapi.io/api/v1/leagues?apikey=27cfbf70-edea-11e9-9b0f-9d1c661c1a93')
    .then(res => res.json())
    .then(data => {
      // const dataTrack = {};
      // for (let league in data) {
      //   // console.log(data[league]);
      //   // console.log(data[league].sport);
      //   if (dataTrack[data[league].sport]) {
      //     dataTrack[data[league].sport] += 1
      //   } else {
      //     dataTrack[data[league].sport] = 1
      //   }
      //
      // }
      // console.log(Object.keys(dataTrack).length)
      const filterOptions = [];
      for (let leagueKey in data) {
        if (!filterOptions.includes(data[leagueKey].sport))
          filterOptions.push(data[leagueKey].sport)
      }
      // console.log(filterOptions);
      this.setState({
        filterOptions
      })
    })
  }

}
