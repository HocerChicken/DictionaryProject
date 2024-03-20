import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TableFeedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [show, setShow] = useState(false);
  const [feedback, setFeedback] = useState([]);

  const handleSubjectClick = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  useEffect(() => {
    getFeedback();
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteClick = async (event, id) => {
    event.preventDefault();
    await axios.delete(`/feedback/${id}`);
    const updatedFeedback = feedback.filter((item) => item._id !== id);
    setFeedback(updatedFeedback);
    setShow(false);
  };

  const getFeedback = async () => {
    let res = await axios.get("/feedback");
    if (res && res.data) {
      setFeedback(res.data);
    }
  };

  return (
    <div className="table-feedback">
      <h2 style={{ margin: "30px 0 20px 0" }}>Danh sách phản hồi</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>Tiêu đề</th>
            <th>Hành động</th>

          </tr>
        </thead>
        <tbody>
          {feedback &&
            feedback.length > 0 &&
            feedback.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <span
                      className="subject-link"
                      onClick={() => handleSubjectClick(item.message)}
                      style={{ color: "blue", fontWeight: "700" }}
                    >
                      {item.subject}
                    </span>
                  </td>
                  <td>
                    <Button className="delete-button" show={show} variant=" danger" onClick={handleShow}>
                      Xóa
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Thông báo</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Bạn có chắc chắn muốn xóa phản hồi?</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Đóng
                        </Button>
                        <Button variant="danger" onClick={(event) => handleDeleteClick(event, item._id)}>
                          Xóa
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="response-button">
                      <a style={{ color: "white", textDecoration: "none" }} href={`mailto:${item.email}`}>Phản hồi</a>
                    </button>
                    {console.log()}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nội dung</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableFeedback;
