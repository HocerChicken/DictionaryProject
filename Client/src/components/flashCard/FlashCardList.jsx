import FlashCard from "./FlashCard";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function FlashCardList({ flashcards }) {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);

  const handleDropdownSelect = (eventKey) => {
    setSelectedDropdownItem(eventKey);
  };

  return (
    <div>
      <Alert key={"warning"} variant={"warning"} className="mt-4">
        <svg
          style={{ width: "24px", height: "24px", stroke: "teal" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>{" "}
        Chọn màu bạn muốn để hiển thị Flashcard{" "}
      </Alert>
      <div style={{ marginTop: "20px" }}>
        <Dropdown onSelect={handleDropdownSelect}>
          <Dropdown.Toggle
            variant={selectedDropdownItem ? selectedDropdownItem : "success"}
            id="dropdown-basic"
          >
            Chọn màu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="primary">Xanh dương</Dropdown.Item>
            <Dropdown.Item eventKey="secondary">Xám</Dropdown.Item>
            <Dropdown.Item eventKey="success">Xanh lá</Dropdown.Item>
            <Dropdown.Item eventKey="info">Lam</Dropdown.Item>
            <Dropdown.Item eventKey="warning">Vàng</Dropdown.Item>
            <Dropdown.Item eventKey="danger">Đỏ nhạt</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="card-grid">
        {flashcards.map((flashcard) => {
          return (
            <FlashCard
              flashcard={flashcard}
              dropdownValue={selectedDropdownItem}
              key={flashcard._id}
            />
          );
        })}
      </div>
    </div>
  );
}
