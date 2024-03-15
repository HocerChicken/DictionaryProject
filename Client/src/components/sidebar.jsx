import { useEffect, useState } from "react";
import "../App.scss";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/posts/ishot")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/single/${postId}`);
  };
  const PF = "http://localhost:5000/images/"

  return (
    <div className="sidebar">
      <span className="sidebarSection">Bài quan tâm</span>
      {Array.isArray(posts) &&
        posts.map((post) => (
          <div className="section-post" key={post.id}>
            <img src={PF + post.image} alt=""></img>
            <p
              className="section-title"
              onClick={() => handlePostClick(post.title)}
            >
              {post.title}
            </p>
          </div>
        ))}
    </div>
  );
};
export default Sidebar;
