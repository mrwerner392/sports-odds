import React, { Component } from 'react';

export default class Favorites extends Component {

  render() {
    console.log(this.props);
    return (
      < div className='favorites'>
        < h4 >Favorites</ h4 >
        { this.props.favorites.map(favorite => {
          return < li id={ favorite }
                      className='favorite'
                      onClick={ this.props.handleClickFavorite }>
            { favorite }
          </ li >
        }) }
      </ div >
    )
  }

}
