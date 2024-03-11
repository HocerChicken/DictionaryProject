import React, { useState, useEffect } from "react";
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const PostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const Post = ({ post, onUpdate, onDelete }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.content}</Card.Text>
      <Button variant="primary" onClick={() => onUpdate(post)}>
        Update
      </Button>
      <Button variant="danger" onClick={() => onDelete(post.id)}>
        Delete
      </Button>
    </Card.Body>
  </Card>
);

const PostAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleCreate = (post) => {
    axios
      .post("/api/posts", post)
      .then((response) => setPosts([...posts, response.data]))
      .catch((error) => console.error(error));
  };

  const handleUpdate = (post) => {
    setSelectedPost(post);
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((error) => console.error(error));
  };

  const handleSubmit = (post) => {
    axios
      .put(`/api/posts/${selectedPost.id}`, post)
      .then((response) => {
        setPosts(
          posts.map((p) => (p.id === selectedPost.id ? response.data : p))
        );
        setSelectedPost(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Row>
        <Col>
          <PostForm
            post={selectedPost}
            onSubmit={selectedPost ? handleSubmit : handleCreate}
          />
        </Col>
      </Row>
      <Row>
        {posts.map((post) => (
          <Col key={post.id}>
            <Post post={post} onUpdate={handleUpdate} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostAdmin;
