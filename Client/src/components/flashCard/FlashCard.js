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

    useEffect(setMaxHeight, [flashcard.title, flashcard.definitions.source[0]?.meaning])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight);
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                {flashcard.title}
            </div>
            <div className="back" ref={backEl}>
                {flashcard.definitions.source[0]?.meaning || 'Không có thông tin'}
            </div>
        </div>

    )
}
