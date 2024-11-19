import { memo } from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { post } = props;
  console.log("postcard rendered");
  return (
    <>
      <h3>
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>
      <p>{post.body}</p>
    </>
  );
};

export default memo(PostCard);
