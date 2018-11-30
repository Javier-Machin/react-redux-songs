import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
// Example named import
// import { selectSong } from '../actions'; // Webpack provides index.js if no file specified

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;