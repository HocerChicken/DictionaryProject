import { useEffect, useState } from "react";
import "../App.scss";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/single/${postId}`);
  };

  const PF = "http://localhost:5000/images/"

  return (
    <>
      {Array.isArray(posts) &&
        posts.map((aPost) => (
          <div className="main-post" key={aPost._id}>
            <img className="postImg" src={PF + aPost.image} />
            {console.log(">>>> Post image:", aPost.image)}
            {console.log(">>>> PF Post image:", PF + aPost.image)}

            <div className="postInfo">
              <span
                className="postTitle"
                onClick={() => handlePostClick(aPost.title)}
              >
                {aPost.title}
              </span>
            </div>
            <p className="postDesc">{aPost.thumbnail}</p>
          </div>
        ))}
    </>
  );
};

export default Post;
