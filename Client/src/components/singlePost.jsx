import { useEffect, useState } from "react";
import "../App.scss";
// import { Base64 } from "js-base64";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const title = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${title.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, [title]);
  const PF = "http://localhost:5000/images/"

  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        <h1 className="singlePostTitle">{post.title}</h1>
        {/* <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div> */}

        <img src={PF + post.image} className="singlePostImg" alt="error" />
        {console.log(">>>> Post image:", post.image)}
        {console.log(">>>> PF Post image:", PF + post.image)}

        <div className="singlePostInfo">

        </div>
        <div
          className="singlePostDesc"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
};
export default SinglePost;
