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
              <div className="content">
                {/* <div className="right floated meta">14h</div> */}
                <img
                  className="ui circle avatar image"
                  alt="user"
                  src="https://instagram.fbom11-1.fna.fbcdn.net/vp/b4c6f3c97c20bc07e8e527006552290d/5CEEB1D8/t51.2885-19/s150x150/46959381_745323512511418_5824924179723452416_n.jpg?_nc_ht=instagram.fbom11-1.fna.fbcdn.net"
                />{" "}
                <strong>evilsempire</strong>
              </div>
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
