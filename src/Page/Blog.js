import React from "react";

const Blog = () => {
  return (
    <div className="row">
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              <b>React Day 1</b>
            </span>
            <p>
              At the first day of our MERN training we learned about how to
              create your first react app. We also understand about file
              structure, Components etc.
            </p>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              <b>React Day 2</b>
            </span>
            <p>
              At the second day of our MERN training we learn about CDN Links,
              Routing using React Router Dom, and also creating a Navbar through
              materlize CSS
            </p>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">React Day 3</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              minima molestiae iusto ab impedit placeat?sit amet consectetur
              adipisicing elit. Atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
