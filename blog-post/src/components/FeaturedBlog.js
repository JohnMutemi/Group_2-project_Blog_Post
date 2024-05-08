// components/FeaturedBlog.js
import React from 'react';
import SliderComponent from './SliderComponent';

const FeaturedBlog = ({ blogs }) => {
  return <SliderComponent blogs={blogs} />;
};

export default FeaturedBlog;
