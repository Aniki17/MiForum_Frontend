function Post({ title, content, author }) {
  return (
    <div className="post">
      <h4 className="post-title">{title}</h4>
      <p className="post-content">{content}</p>
      <span className="post-author">Posted by user #{author}</span>
    </div>
  );
}

export default Post