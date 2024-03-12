import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormPostCreate = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [isHot, setIsHot] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, image, thumbnail, content, isHot }),
      });

      if (response.ok) {
        alert("Post created successfully!");
      } else {
        alert("Failed to create post.");
      }
    } catch (error) {
      alert("Failed to create post");
      console.error(error);
    }

    onSubmit({ title, image, thumbnail, content, isHot });
  };

  return (
    <div className="PostsAdmin">
      <h1 className="mt-5">Tạo bài viết</h1>
      <Form onSubmit={handleSubmit} method="POST" className="mt-5">
        <Form.Group>
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Đường dẫn ảnh</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Tiểu tiêu đề</Form.Label>
          <Form.Control
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Check
            type="checkbox"
            label="Nổi bật"
            className="my-3"
            checked={isHot}
            onChange={(e) => setIsHot(e.target.checked)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className="full-">
            Tạo bài viết
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormPostCreate;
