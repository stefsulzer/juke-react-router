import React, { Component } from 'react';
import { Link } from 'react-router';

import Songs from './Songs';
import Albums from './Albums';
import Artists from './Artists';


export default class Artist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtistInfo = this.props.selectArtistInfo;
    selectArtistInfo(artistId);

    const children = this.props.children;
    const propsToPassToChildren = {
      albums: this.props.albums,
      songs: this.props.songs
    }

  }

  render() {
    console.log("artist render props: ", this.props);
    return (
      <div>
        <h3>{ this.props.selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${this.props.routeParams.artistId}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${this.props.routeParams.artistId}/songs`}>SONGS</Link></li>
        </ul>
        { this.props.children && React.cloneElement(this.props.children, {
            albums: this.props.albums,
            songs: this.props.songs
          }) }
      </div>
    )
  }
}

// <div>


//   <h3>{ this.props.selectedArtist.name }</h3>

//   <Albums albums={this.props.albums}/>

//   <Songs songs={this.props.songs}/>



// </div>
