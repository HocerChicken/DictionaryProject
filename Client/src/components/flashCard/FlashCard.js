import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function FlashCard({ flashcard }) {
    const [flip, setFlip] = useState();

    return (
        // <div
        //     className={`card ${flip ? 'flip' : ''}`}
        //     onClick={() => setFlip(!flip)}
        // >
        //     <div className="front">
        //         {!isLoading && wordData.length > 0 && wordData[0].title}

        //     </div>
        //     <div className="back">
        //         {!isLoading && wordData.length > 0 && wordData[0].definitions.source[0] && wordData[0].definitions.source[0].meaning}

        //     </div>
        // </div>

        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front">
                {flashcard.title}
            </div>
            <div className="back">
                {flashcard.definitions.source[0]?.meaning || 'Không có thông tin'}
            </div>
        </div>

    )
}
