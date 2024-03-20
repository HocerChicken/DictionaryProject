import "../../App.scss";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const AdminManage = () => {
    const [title, setTitle] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [content, setContent] = useState("")
    const [file, setFile] = useState("")
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            thumbnail,
            content,
        }
        console.log(">>> title", title);
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            console.log("file-name: ", filename)
            data.append("name", filename);
            data.append("file", file);
            newPost.image = filename;

            try {
                await axios.post("/upload", data)
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/single/" + res.data._id)
        } catch (err) { }
    }
    return (
        <div className="adminManage">
            {file &&
                (<img
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt=""
                />)
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
                        required
                    />

                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeDesc"
                        placeholder="Mô tả ngắn"
                        type="text"
                        autoFocus={true}
                        onChange={e => setThumbnail(e.target.value)}
                        required
                    />
                </div>

                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Viết nội dụng"
                        type="text"
                        autoFocus={true}
                        onChange={e => setContent(e.target.value)}
                        required
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Đăng bài
                </button>
            </form>
        </div>
    );
}
export default AdminManage;
