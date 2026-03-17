import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

useEffect(() => {
  async function getPost(postid) {
    const res = await axios.get(`http://localhost:5050/posts/${postid}`);
    const postData = res.data.data;
    setPost(postData);
  }

  getPost(id);
}, [id]);
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <Post
        id={post.id}
        title={post.title}
        content={post.content}
        author={post.user_id}
        showReadMore ={true}
      />
    </div>
  );
}

export default PostPage;