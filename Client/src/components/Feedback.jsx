import React, { useState } from 'react';
import '../App.scss';
import axios from "axios";

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [noti, setNoti] = useState("");
    const [showNoti, setShowNoti] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        // Gửi dữ liệu đến server hoặc xử lý theo nhu cầu của bạn
        try {
            const res = await axios.post("/feedback", {
                name,
                email,
                subject,
                message,
            });
            console.log(">>> res", res);
            if (res.data) {
                setNoti("Gửi phản hồi thành công");
                setShowNoti(true); // Hiển thị thông báo
                setTimeout(() => {
                    setShowNoti(false); // Ẩn thông báo sau 5 giây
                }, 3000);
            }
        } catch (err) {
            console.log("fail")
            setError(true);
        }
        // Reset form sau khi gửi
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="feedback-form">
            <h2 style={{ textTransform: "uppercase" }}>Liên hệ</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Tên:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Địa chỉ email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Tiêu đề:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Nội dung:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{ backgroundColor: "teal" }}>Gửi</button>
            </form>
            {
                showNoti && <div className="notification"
                    style={{ textAlign: "center", color: "red", fontSize: "20px", marginTop: "7px", fontWeight: "600" }}
                >
                    {noti}
                </div>
            }
        </div >
    );
}


export default FeedbackForm;