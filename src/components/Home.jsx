import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get("http://localhost:5050/posts");
        setPosts(res.data.data.posts);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
    
      <h1>Welcome to MiForum</h1>
      <h2>Following are the latest posts</h2>

      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.user_id} 
        />
      ))}
    </div>
  );
}

export default Home;