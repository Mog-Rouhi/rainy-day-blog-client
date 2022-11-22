import React from "react";
import down from "../img/down-out.jpg";
import nine from "../img/1984.jpeg";
import animal from "../img/animal-farm.jpg";

function Menu() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium provident.",
      img: down,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium provident.",
      img: nine,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium provident.",
      img: animal,
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
