import "./style.css";
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui grid raised segment">
        <div className="three column row">
          <div className=" left floated column">
            <div className="ui flex">
              <i className="huge instagram icon" />
              <div className="straight-line" />
              <div className="logo">Instagram</div>
            </div>
          </div>

          <div className="column middle aligned flex-middle">
            <div className="ui  input center icon aligned">
              <i className="search icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="right middle aligned floated column">
            <i className="m-r-5 large compass outline icon" />
            <i className="m-r-5 large heart outline icon" />
            <i className="m-r-5 large user outline icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
