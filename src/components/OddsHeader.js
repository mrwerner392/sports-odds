import React, { Component } from 'react';
import LeagueFilter from './LeagueFilter';
import TeamSearch from './TeamSearch';


export default class OddsHeader extends Component {

  getTeams = () => {
    let teams = this.props.odds.map(oddsObj => {
      return [oddsObj.event.home, oddsObj.event.away]
    });
    teams = teams.flat();
    return teams.filter((team, index) => teams.indexOf(team) === index);
  }

  render() {
    // console.log(this.props);
    return (
      < div className='odds-header' >
        { this.props.sportFilter.length ?
          < h2 className='odds-sport-label' >{ this.props.sportFilter + '  ' }< span >< button className='add-favorite' onClick={ this.props.handleAddFavorite }>Add to Favorites</ button ></ span ></ h2 > :
          < h2 className='odds-sport-label' >All Sports</ h2 > }
        < div className='filter-and-search' >
          < LeagueFilter odds={ this.props.odds }
                         sportFilter={ this.props.sportFilter }
                         leagueFilter={ this.props.leagueFilter }
                         handleLeagueFilter={ this.props.handleLeagueFilter } />
          < TeamSearch handleTeamSearch={ this.props.handleTeamSearch }
                       teams={ this.getTeams() } />
        </ div >
      </ div >
    )
  }

}
