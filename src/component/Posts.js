import React from "react";

class Posts extends React.Component {
  render() {
    return (
      <div className="ui card no-width">
        <div className="content">
          {/* <div className="right floated meta">14h</div> */}
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
            src="https://instagram.fbom11-1.fna.fbcdn.net/vp/dc990c784323955ab02c71a535372423/5CEB12DD/t51.2885-15/e35/47693218_276767672950930_7921643510482234717_n.jpg?_nc_ht=instagram.fbom11-1.fna.fbcdn.net"
          />
        </div>
        <div className="content">
          <span className="right floated">
            <i class="bookmark outline icon" />
          </span>
          {/* <i className="comment icon" />3 comments */}
          <i className="heart outline icon" />
          <i className="comment outline icon" />
          <i className="upload icon" />
        </div>
        <div className="content">
          <img
            className="ui avatar image"
            alt="User"
            src="https://instagram.fbom11-1.fna.fbcdn.net/vp/b4c6f3c97c20bc07e8e527006552290d/5CEEB1D8/t51.2885-19/s150x150/46959381_745323512511418_5824924179723452416_n.jpg?_nc_ht=instagram.fbom11-1.fna.fbcdn.net"
          />
          <span>
            Liked by <b>evilsempire</b> and <b>54 others</b>
          </span>
          <p>
            <strong>evilsempire</strong> If there’s a will there’s a wave.!
            <span className="color-blue">
              #beach#beautifuldestinations#goodvibes#oceanwaves#sunsetbeach#happytime.
            </span>
            <div className="meta font-10">9 MINUTES AGO</div>
          </p>
        </div>

        <div className="extra content">
          <div className="ui large transparent right icon input full-width">
            <input type="text" placeholder="Add Comment..." />
            <i class="ellipsis horizontal icon right floated" />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
