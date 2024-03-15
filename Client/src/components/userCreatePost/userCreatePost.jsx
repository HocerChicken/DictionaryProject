import "../../App.scss";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const UserCreatePost = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content,
        }
        console.log(">> title:", title)
        console.log(">> content:", content)
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.image = filename;
            try {
                await axios("/upload", data)
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id)

        } catch (err) { }
    }
    return (
        <div className="userCreatePost">
            {file &&
                <img
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt=""
                />
            }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        className="writeInput"
                        placeholder="Tiêu đề"
                        type="text"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Viết nội dụng"
                        type="text"
                        autoFocus={true}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Đăng bài
                </button>
            </form>
        </div>
    );
}
export default UserCreatePost;
