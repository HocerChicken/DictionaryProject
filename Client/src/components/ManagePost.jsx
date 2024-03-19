import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

export default function ManagePost() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getPosts();
    }, []);

    const handleDeleteClick = async (event, id) => {
        event.preventDefault();
        await axios.delete(`/posts/${id}`);
        const updatedPosts = posts.filter((item) => item._id !== id);
        setPosts(updatedPosts);
    };

    const handlePostClick = (event, id) => {
        event.preventDefault();
        navigate(`/single/${id}`);
    };

    const getPosts = async () => {
        let res = await axios.get("/posts");
        if (res && res.data) {
            setPosts(res.data);
        }
    };

    const PF = "http://localhost:5000/images/"

    return (
        <div className="table-posts">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {posts &&
                        posts.length > 0 &&
                        posts.map((item, index) => {
                            return (
                                <tr key={`post-${index}`}>
                                    <td>{item.title}</td>
                                    <td>
                                        <img
                                            className="postImg"
                                            src={PF + item.image}
                                            style={{ width: "150px", height: "80px" }}
                                        />
                                    </td>
                                    <td>
                                        <button className="delete-button"
                                            onClick={(event) => handleDeleteClick(event, item._id)}
                                        >
                                            Xóa
                                        </button>
                                        <button className="response-button"
                                            onClick={(event) => handlePostClick(event, item._id)}
                                        >
                                            Chỉnh sửa
                                        </button>
                                        {/* <button className="response-button">
                                            <a style={{ color: "white", textDecoration: "none" }} href="/adminManage">Chỉnh sửa</a>
                                        </button> */}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </div>
    )
}
