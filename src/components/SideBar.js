import React, { Component } from 'react';
import Favorites from './Favorites';
import Filter from './Filter';

export default class SideBar extends Component {

  render() {
    return (
      < div className='side-bar' >
        < Favorites favorites={ this.props.favorites }
                    handleClickFavorite={ this.props.handleClickFavorite }/>
        < Filter filter={ this.props.filter } handleFilter={ this.props.handleFilter }/>
      </ div >
    )
  }

}
