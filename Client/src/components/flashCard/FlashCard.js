import React, { useEffect, useState, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
export default function FlashCard({ flashcard, dropdownValue }) {
    const [flip, setFlip] = useState();
    const [height, setHeight] = useState('initial')
    const frontEl = useRef();
    const backEl = useRef();

    function setMaxHeight() {
        const frontHeight = frontEl.current?.getBoundingClientRect()?.height;
        const backHeight = backEl.current?.getBoundingClientRect()?.height;
        setHeight(Math.max(frontHeight, backHeight, 100));
    }

    useEffect(setMaxHeight, [flashcard.title, flashcard.definitions.source[0]?.meaning])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight);
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    console.log(dropdownValue)
    return (
        <div className={dropdownValue ? 'visible-style' : 'hidden-style'}>
            <Card
                bg={dropdownValue}
                key={dropdownValue}
                text={'dropdownValue'.toLowerCase() === 'light' ? 'dark' : 'white'}
                className={`card ${flip ? 'flip' : ''}`}
                style={{ height: height }}
                onClick={() => setFlip(!flip)}
            >
                <div className="front" ref={frontEl}>
                    {flashcard.title}
                </div>
                <div className="back" ref={backEl}>
                    {flashcard.definitions.source[0]?.meaning || flashcard.definitions.source?.meaning}
                </div>
            </Card>
            {/* } */}
        </div>
    )
}
