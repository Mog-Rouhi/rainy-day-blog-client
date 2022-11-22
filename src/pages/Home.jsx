import React from "react";
import { Link } from "react-router-dom";
import down from "../img/down-out.jpg";
import nine from "../img/1984.jpeg";
import animal from "../img/animal-farm.jpg";

function Home() {
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
    <div className="home">
      this is home
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key="post.id">
              <div className="img">
                <img src={post.img} alt="a" />
              </div>

              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                </Link>
                <button>Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
