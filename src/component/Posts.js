import React from "react";

class Posts extends React.Component {
  render() {
    return (
      <div className="ui card no-width">
        <div className="content">
          <div className="right floated meta">14h</div>
          <img
            className="ui avatar image"
            alt="user"
            src="https://semantic-ui.com/images/avatar/large/elliot.jpg"
          />{" "}
          Elliot
        </div>
        <div className="image">
          <img
            alt="post meta"
            src="https://semantic-ui.com/images/wireframe/image.png"
          />
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon" />
            17 likes
          </span>
          <i className="comment icon" />3 comments
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon" />
            <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
