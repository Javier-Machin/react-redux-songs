import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

  renderList() {
    return this.props.songs.map((song) =>{
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              onClick={() => this.props.selectSong(song)} 
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Name of the function is convention, state is all the content of the store
const mapStateToProps = (state) => {
  return { songs: state.songs };
}

// connect() returns a function that we call with the argument SongList
export default connect(mapStateToProps, { selectSong })(SongList); 