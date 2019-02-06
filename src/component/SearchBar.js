import "./style.css";
import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      // <div className="m-5 flex ui raised segment">
      //   <div className="ui left aligned">
      //     <i class=" huge instagram icon" />
      //   </div>
      //   <div className="straight-line" />
      //   <div className="ui flex-middle input center icon aligned">
      //     <i class="search icon" />
      //     <input type="text" placeholder="Search" />
      //   </div>
      //   <div className="ui  flex-middle right  aligned">
      //     <i class="large compass outline icon" />
      //     <i class="heart outline icon" />
      //     <i class="user outline icon" />
      //   </div>
      // </div>
      <div className="ui grid raised segment">
        <div className="three column row">
          <div className=" left floated column">
            <div className="ui flex">
              <i class="huge instagram icon" />
              <div className="straight-line" />
              <div className="logo">Instagram</div>
            </div>
          </div>

          <div className="column middle aligned flex-middle">
            <div className="ui  input center icon aligned">
              <i class="search icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="right middle aligned floated column">
            <i class="m-r-5 large compass outline icon" />
            <i class="m-r-5 large heart outline icon" />
            <i class="m-r-5 large user outline icon" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
