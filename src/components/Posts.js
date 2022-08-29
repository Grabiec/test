import { useState, useEffect } from "react";

import PostList from "./PostList";

function Posts() {
  // todo Move it to app.js
  const [posts, setPosts] = useState([]);

  // todo move pass it to app.js
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
      
  }, []);

  return <PostList items={posts} />;
}

export default Posts;
