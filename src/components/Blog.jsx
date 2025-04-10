import React from 'react';
import './BlogCard.css'; 

const BlogCard = ({ title, date, author, comments}) => {
    const year = new Date().toDateString();
    
  return (<section><div className='Head'>
    <h3> From the Blog</h3>
    <h2> News & Articles</h2>
    </div>


    <div className="blog-card">
      <img src="./images/div.master-news.png" alt={title} />
      <button>{year}</button>
      <div className="blog-info">
        <span className="date">{date}</span>
        <div className="author-info">
          <span className="author-name">  KevinMartin/</span>

          <span className="comments"> 1Comments</span>
        </div>
        <h3>Bringing Food <br />production Back to cities</h3>
      </div>
    </div>


    <div className="blog-card">
      <img src="./images/div.master-news (2).png" alt={title} />
      <button>{year}</button>
      <div className="blog-info">
        <span className="date">{date}</span>
        <div className="author-info">
          <span className="author-name">Kevin Martin </span>
          <span className="comments">/ 0 Comments</span>
        </div>
        <h3>The Future of Farming ,Smart Irrigation Solutions</h3>
      </div>
    </div>


    <div className="blog-card">
      <img src="./images/div.master-news (1).png "alt={title} />
      <button>{year}</button>
      <div className="blog-info">
        <span className="date">{date}</span>
        <div className="author-info">
          <span className="author-name">Kevin Martin</span>
          <span className="comments">/0 Comments</span>
        </div>
        <h3>Agronomy and <br />relation to other sciences</h3>
      </div>
    </div>
    </section>
  );
};

export default BlogCard;