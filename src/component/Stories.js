import React from "react";

const Stories = () => {
  const stories = [
    {
      key: Math.random(),
      name: "Utkarsh Joshi",
      time: "10",
      image:
        "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      key: Math.random(),
      name: "Ashutosh Omble",
      time: "54",
      image:
        "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      key: Math.random(),
      name: "Ankit K",
      time: "6",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      key: Math.random(),
      name: "Jinesh k",
      time: "5",
      image:
        "https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];
  return (
    <div className="ui segment">
      <div className="ui float-left left meta">Stories</div>
      <div className="ui float-right right floated">See all</div>
      <br />
      <div className="ui relaxed divided list scroller">
        {stories.map((item) => {
          return (
            <div key={item.key} className="item">
              <img
                className="ui avatar image"
                alt={item.name}
                src={item.image}
              />
              <div className="content">
                <a
                  className=" text-strong"
                  style={{ color: "black !important" }}
                >
                  {item.name}
                </a>
                <div className="description">{item.time} mins ago</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
