import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { BlogContext } from "../contexts/blog.context";
import { UserContext } from "../contexts/user.context";

const BlogPage = () => {
  const { posts, error, getPosts } = useContext(BlogContext);
  const { login, logout } =useContext(UserContext)

  useEffect(() => {
    getPosts();
  }, []);

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}></PostCard>
      </li>
    );
  });

  return (
    <>
      <Header></Header>
      <hr />
      <section>
        <h2 data-testid="blog-title">Blog</h2>

        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>

        {error ? (
          <h2 data-testid="error-msg">Algo ha salido mal</h2>
        ) : postCards.length > 0 ? (
          <ul>{postCards}</ul>
        ) : (
          <h2 data-testid="loading-msg">Loading...</h2>
        )}
      </section>
    </>
  );
};

export default BlogPage;
