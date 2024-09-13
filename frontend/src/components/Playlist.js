import React from "react";
import Song from "./Song";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        { id: 1, name: "Hip Hop Song 1", comments: [] },
        { id: 2, name: "Hip Hop Song 2", comments: [] },
        { id: 3, name: "Hip Hop Song 3", comments: [] }
      ],
      newSong: ""
    };
  }

  handleSongChange = (e) => {
    this.setState({ newSong: e.target.value });
  };

  addSong = () => {
    if (this.state.newSong) {
      const newSong = {
        id: this.state.songs.length + 1,
        name: this.state.newSong,
        comments: []
      };
      this.setState((prevState) => ({
        songs: [...prevState.songs, newSong],
        newSong: ""
      }));
    }
  };

  addComment = (songId, comment) => {
    this.setState((prevState) => ({
      songs: prevState.songs.map((song) =>
        song.id === songId
          ? { ...song, comments: [...song.comments, comment] }
          : song
      )
    }));
  };

  render() {
    const { songs, newSong } = this.state;

    return (
      <div className="playlist">
        <h1>Hip Hop Playlist</h1>
        <div className="song-list">
          {songs.map((song) => (
            <Song key={song.id} song={song} addComment={this.addComment} />
          ))}
        </div>
        <div className="add-song">
          <input
            type="text"
            value={newSong}
            onChange={this.handleSongChange}
            placeholder="Add new song"
          />
          <button onClick={this.addSong}>Add Song</button>
        </div>
      </div>
    );
  }
}

export default Playlist;
