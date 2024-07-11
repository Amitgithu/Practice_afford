import React, { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  let [post, setPost] = useState([]);

  async function fetchPost() {
    let result = await axios.get("https://dummyjson.com/posts");
    console.log(result.data.posts);
    setPost(result.data.posts);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  function handleClick() {
    console.log("Button Click");
    fetchPost();
    console.log("After click");
  }

  return (
    <>
      <h1>All Post</h1>
      <button onClick={handleClick}>Fetch Data</button>
      {post.map((data) => {
        return (
          <div
            key={data.id}
            style={{ border: "2px solid red", padding: "5px", margin: "8px" }}
          >
            <h3>Title : {data.title}</h3>
            <p>User Views : {data.views}</p>
          </div>
        );
      })}
    </>
  );
}

export default Post;
