import React from "react";

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      comment: ""
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      liked: !prevState.liked
    }));
  };

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = (e) => {
    e.preventDefault();
    if (this.state.comment) {
      this.props.addComment(this.props.song.id, this.state.comment);
      this.setState({ comment: "" });
    }
  };

  render() {
    const { song } = this.props;
    const { liked, comment } = this.state;

    return (
      <div className="song">
        <p>{song.name}</p>
        <button onClick={this.handleLike}>
          {liked ? "Unlike" : "Like"}
        </button>
        <form onSubmit={this.handleCommentSubmit}>
          <input
            type="text"
            value={comment}
            onChange={this.handleCommentChange}
            placeholder="Add a comment"
          />
          <button type="submit">Comment</button>
        </form>
        <div className="comments">
          <h4>Comments:</h4>
          <ul>
            {song.comments.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Song;
