import React from "react";

const Suggestions = () => {
  return (
    <div className="ui segment">
      <div className="ui float-left left meta">Suggestions For You</div>
      <div className="ui float-right right floated">See all</div>
      <br />
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
          <div className="ui float-right right floated follow-color">
            <b>Follow</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
