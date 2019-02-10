import React from "react";

const Stories = () => {
  return (
    <div className="ui segment">
      <div className="meta">Stories</div>
      <div className="ui relaxed divided list">
        <div className="item">
          <img
            className="ui avatar image"
            alt="user"
            src="https://semantic-ui.com/images/avatar/large/elliot.jpg"
          />
          <div class="content">
            <a class=" text-strong" style={{ color: "black !important" }}>
              Utkarsh Joshi
            </a>
            <div class="description">10 mins ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
