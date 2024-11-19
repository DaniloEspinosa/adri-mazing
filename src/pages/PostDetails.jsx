import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  const fetchPost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    fetchPost(id);
  }, []);

  return (
    <>
      <Header />
      {post && (
        <section>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Id del post: {post.id}</p>
          <p>Id del usuario: {post.userId}</p>
        </section>
      )}
    </>
  );
};

export default PostDetails;
