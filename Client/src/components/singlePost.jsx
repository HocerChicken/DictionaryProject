import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "../App.scss";
// import { Base64 } from "js-base64";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const SinglePost = () => {
  const params = useParams();
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [content, setContent] = useState("")
  const [updateMode, setUpdateMode] = useState(false)


  useEffect(() => {

    fetch(`http://localhost:5000/api/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
    // setTitle(res.data.title);
    // setDesc(res.data.desc);
  }, [params]);
  const PF = "http://localhost:5000/images/"
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`)
      window.location.replace("/")

    } catch (err) { }
  }

  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        {updateMode ? <input type="text" value={post.title} className="singlePostTitleInput" autoFocus /> : (
          <h1 className="singlePostTitle">{post.title}</h1>
        )}
        {post.username === user?.username && (
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
        )}


        <img src={PF + post.image} className="singlePostImg" alt="error" />
        {/* <div className="singlePostInfo">
        </div> */}
        {updateMode ? (
          <textarea className="singlePostDescInput" value={post.content} />
        ) :
          (
            <div
              className="singlePostDesc"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          )
        }

      </div>
    </div>
  );
};
export default SinglePost;
