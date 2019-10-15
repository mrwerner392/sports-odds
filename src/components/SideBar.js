import React, { Component } from 'react';
import Favorites from './Favorites';
import SportFilter from './SportFilter';

const SideBar = props => {

  const { favorites, handleClickFavorite, sportFilter, handleSportFilter } = props

  return (
    < div className='side-bar' >
      < Favorites favorites={ favorites }
                  handleClickFavorite={ handleClickFavorite }/>
      < SportFilter sportFilter={ sportFilter } handleSportFilter={ handleSportFilter }/>
    </ div >
  )

}

export default SideBar;
