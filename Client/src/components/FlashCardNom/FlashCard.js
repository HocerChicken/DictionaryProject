import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

export default function FlashCard({ flashcard }) {
    const [flip, setFlip] = useState();
    const [height, setHeight] = useState('initial')

    const frontEl = useRef();
    const backEl = useRef();


    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100));
    }

    useEffect(setMaxHeight, [flashcard.quocngu, flashcard.dinhnghia?.phanloai[0]])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight);
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])
    console.log(">>>> nghia:", flashcard.dinhnghia?.phanloai[0]?.hannom)

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                {flashcard.quocngu}
            </div>
            <div className="back" ref={backEl}>
                {/* {flashcard.dinhnghia.phanloai[0] || 'Không có thông tin'} */}
                Nôm: <p >{flashcard.dinhnghia?.phanloai[0]?.hannom}</p>
                <br />
                Ngữ cảnh: {flashcard.dinhnghia?.phanloai[0]?.ngucanh}
                <br />
                Phiên âm: {flashcard.dinhnghia?.phanloai[0]?.phienam}
                <br />
                Nguồn: <p style={{ color: "red", fontSize: "16px", display: "in-line" }}>{flashcard.dinhnghia?.phanloai[0]?.nguon}</p>

            </div>
        </div>

    )
}
