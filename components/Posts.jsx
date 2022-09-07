import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import Post from "./Post";
import { db } from "../firebase";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userImg={post.data().profileImg}
          username={post.data().ussername}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
