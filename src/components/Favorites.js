import React, { Component } from 'react';

export default class Favorites extends Component {

  render() {
    console.log(this.props);
    return (
      < div className='favorites'>
        < p >Favorites</ p >
        { this.props.favorites.map(favorite => {
          return < li className='favorite' >
            { favorite }
          </ li >
        }) }
      </ div >
    )
  }

}
