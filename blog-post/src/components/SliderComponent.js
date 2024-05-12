import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogModal from './BlogModal';
import './img.css';

const truncateText = (text, length) => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

const SliderComponent = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id} className="featured-post">
            <h3>{blog.title}</h3>
            {blog.image && (
              <img
                className="featured-blog-image"
                src={blog.image}
                alt={blog.title}
              />
            )}
            <p>
              {truncateText(blog.body, 100)}{' '}
              <button onClick={() => handleOpenModal(blog)}>Read More</button>
            </p>
            <p className="category">{blog.category}</p>
          <p className="author">{blog.author}</p>
          </div>
        ))}
      </Slider>
      <BlogModal
        blog={selectedBlog}
        isVisible={Boolean(selectedBlog)}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SliderComponent;
