import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./img.css";

const SliderComponent = ({ blogs }) => {
  // Filter the blogs where featured is true
  const featuredBlogs = blogs.filter((blog) => blog.featured === "true");

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {featuredBlogs.map((blog) => (
        <div key={blog.id} className="featured-post">
          <div>
            <h3>{blog.title}</h3>
            {blog.image && (
              <img className="blog-image" src={blog.image} alt={blog.title} />
            )}
            <p>{blog.body}</p>
            <p>{blog.category}</p>
            <p>{blog.author}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
