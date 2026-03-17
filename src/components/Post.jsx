import { Link, useLocation } from "react-router-dom";

function Post({ id, title, content, author }) {
  const location = useLocation();
  const isSinglePostPage = location.pathname.startsWith("/post/");

  const preview = content.slice(0, 120);

  return (
    <div className="post">
      <h4 className="post-title">{title}</h4>

      <p className="post-content">
        {isSinglePostPage ? content : preview}
      </p>

      <span className="post-author">Posted by user #{author}</span>

      {!isSinglePostPage && (
        <Link to={`/post/${id}`}>
          <button>Read More</button>
        </Link>
      )}
    </div>
  );
}

export default Post;