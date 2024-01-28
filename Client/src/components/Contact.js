import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic gửi thông tin liên hệ
        console.log('Gửi thông tin liên hệ:', { name, email, message });
        // Đặt lại trạng thái của form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className="contact-container">
                <header>
                    <h1>Liên hệ</h1>
                </header>
                <main>
                    <section className="contact-section">
                        <h2>Gửi tin nhắn</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Họ và tên:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Tin nhắn:</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit">Gửi</button>
                        </form>
                    </section>
                </main>

            </div>
        </>
    );
}

export default Contact;