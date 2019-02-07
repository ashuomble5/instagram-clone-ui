import React from "react";

import SearchBar from "./SearchBar";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="ui container m-t-5">
          <div className="ui grid">
            <div className="ten wide column">
              <Posts />
            </div>
            <div className="six wide column">
              <Stories />
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
