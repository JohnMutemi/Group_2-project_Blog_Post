import React from 'react';

const FeaturedBlog = ({ blogs }) => {
  return (
    <div className="container">
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <div className="card">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <a href={blog.link} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlog;