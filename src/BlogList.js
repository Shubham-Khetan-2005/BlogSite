import { Link } from "react-router-dom";

function BlogList({ blogs, heading, handleDelte }) {
  return (
    <div>
      <h2>{heading}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <button className="delete" onClick={() => handleDelte(blog.id)}>
            Delete Temporarily
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
