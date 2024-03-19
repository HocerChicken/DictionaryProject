import axios from "axios";
import { useEffect, useState, useContext } from "react";
import "../App.scss";
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
    const getPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${params.id}`);
        setPost(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    getPost();
  }, [params.id]);

  const PF = "http://localhost:5000/images/";

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`);
      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
        username: user.username,
        title,
        content,
      });

      setUpdateMode(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        {updateMode ?
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          /> : (
            <h1 className="singlePostTitle">{title}</h1>
          )}
        {post.username === user?.username && (
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
        )}

        {post.image && (<img src={PF + post.image} className="singlePostImg" alt="error" />)}
        {updateMode ? (
          <textarea className="singlePostDescInput"
            value={content}
            onChange={(e) => setContent(e.target.value)} />
        ) :
          (
            <div
              className="singlePostDesc"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          )
        }
        {
          updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>Cập nhật</button>

          )
        }
      </div>
    </div>
  );
};
export default SinglePost;
