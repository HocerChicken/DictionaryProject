import FlashCard from './FlashCard'
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState, useRef } from 'react'

export default function FlashCardList({ flashcards }) {
    const [dropdownShown, setDropdownShown] = useState(false);
    const [height, setHeight] = useState('initial')

    const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);

    const handleDropdownSelect = (eventKey) => {
        setSelectedDropdownItem(eventKey);
    };

    return (
        <div>
            <div style={{ marginTop: "50px" }}>
                <Dropdown onSelect={handleDropdownSelect}>
                    <Dropdown.Toggle variant={selectedDropdownItem ? selectedDropdownItem : 'success'} id="dropdown-basic" >
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="primary">Xanh dương</Dropdown.Item>
                        <Dropdown.Item eventKey="secondary">Xám</Dropdown.Item>
                        <Dropdown.Item eventKey="success">Xanh lá</Dropdown.Item>
                        <Dropdown.Item eventKey="info">Xanh nhạt</Dropdown.Item>
                        <Dropdown.Item eventKey="warning">Vàng</Dropdown.Item>
                        <Dropdown.Item eventKey="danger">Đỏ nhạt</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="card-grid">
                {flashcards.map(flashcard => {
                    return <FlashCard flashcard={flashcard} dropdownValue={selectedDropdownItem} key={flashcard._id} />
                })}
            </div>

        </div>

    )
}
