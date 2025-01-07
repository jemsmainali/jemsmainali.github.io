import React from 'react';

const Blogs = () => {
  return (
    <section className="blogs">
      <h2 className="section-title">Latest Blogs</h2>
      <div className="blog-list">
        <div className="blog-item">
          <h3>Blog Title 1</h3>
          <p>Snippet of Blog 1 content...</p>
        </div>
        <div className="blog-item">
          <h3>Blog Title 2</h3>
          <p>Snippet of Blog 2 content...</p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
