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

  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        <h1 className="singlePostTitle">{post.title}</h1>
        {/* <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div> */}

        <img src={post.image} className="singlePostImg" alt="error" />

        <div className="singlePostInfo">
          {/* <span className="singlePostAuthor">
            Tác giả: <b>Nguyễn Tấn Lực</b>
          </span> */}
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
