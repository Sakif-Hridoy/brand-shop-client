import React from 'react';

const BlogPost = ({ title, date, image }) => {
  return (
    <div className="blog-post">
      <img src={image} alt="Product" />
      <div className="blog-details">
        <h2>{title}</h2>
        <p>Date: {date}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis lorem non velit consequat, sed posuere arcu volutpat. Nullam id pulvinar nunc. Sed at dui vitae justo rhoncus iaculis. Suspendisse potenti.</p>
        <a href="#">Read more</a>
      </div>
    </div>
  );
};

const LatestBlogPosts = () => {
  const blogPosts = [
    {
      title: 'New Product Launch!',
      date: 'February 10, 2024',
      image: 'product1.jpg',
    },
    {
      title: 'Top 5 Fashion Trends of the Season',
      date: 'February 5, 2024',
      image: 'product2.jpg',
    },
    {
      title: '10 Tips for Healthy Living',
      date: 'January 28, 2024',
      image: 'product3.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-3 latest-blog-posts">
      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} date={post.date} image={post.image} />
      ))}
    </div>
  );
};

export default LatestBlogPosts;
