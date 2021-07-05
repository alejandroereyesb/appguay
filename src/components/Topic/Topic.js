import React, { useState, useEffect } from "react";

const Topic = () => {
  const [value, setValue] = useState("reactjs");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      // 2. Use a template string to set the URL:
      try{
        const res = await fetch(`https://www.reddit.com/r/${value}.json`);
        const json = await res.json();
        setPosts(json.data.children.map(c => c.data));
      }catch(e){
        console.log("no hay datos")
        setPosts([]);
      }
    }
    getPosts()
  },[value]);

  return (
    <>
    <h2>Introduce tema a buscar</h2>
      <form>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <h2>Resultados</h2>
      <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
};

export default Topic;
