import React, { Component } from 'react';
import Favorites from './Favorites';
import SportFilter from './SportFilter';

export default class SideBar extends Component {

  render() {
    return (
      < div className='side-bar' >
        < Favorites favorites={ this.props.favorites }
                    handleClickFavorite={ this.props.handleClickFavorite }/>
        < SportFilter sportFilter={ this.props.sportFilter } handleSportFilter={ this.props.handleSportFilter }/>
      </ div >
    )
  }

}
