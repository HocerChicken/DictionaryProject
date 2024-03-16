import "../App.scss";
import Sidebar from "./sidebar";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { createPath } from "react-router-dom";

const AccountSettings = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const { user, dispatch } = useContext(Context);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${user._id}`);
            window.location.replace("/");
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }

        try {
            console.log(">> user ID", user._id)
            const res = await axios.put("/users/" + user._id, updatedUser);
            console.log("success")
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });

        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
            console.log("fail")
        }
    }

    return (
        <div className="accountSettings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Cập nhật tài khoản</span>
                    <span className="settingsTitleDelete" onClick={handleDelete}>Xóa tài khoản</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Tên người dùng</label>
                    <input type="text" placeholder={user ? user.username : ''} name="name" onChange={e => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} name="email" onChange={e => setEmail(e.target.value)} />
                    <label>Mật khẩu</label>
                    <input type="password" placeholder="Nhập mật khẩu" name="password" onChange={e => setPassword(e.target.value)} />
                    <button className="settingsSubmitButton" type="submit">
                        Cập nhật
                    </button>
                    {success && <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
                        Thông tin đã được cập nhật...</span>}
                </form>
            </div>
            {/* <Sidebar style={{ display: "none" }} /> */}
        </div >
    );
}

export default AccountSettings;