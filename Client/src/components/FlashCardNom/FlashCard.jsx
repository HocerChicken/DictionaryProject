import React, { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";

export default function FlashCard({ flashcard, dropdownValue }) {
  const [flip, setFlip] = useState();
  const [height, setHeight] = useState("initial");
  const $s = 5;
  const frontEl = useRef();
  const backEl = useRef();
  console.log($s);

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [
    flashcard.quocngu,
    flashcard.dinhnghia?.phanloai[0],
  ]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);
  console.log(">>>> nghia:", flashcard.dinhnghia?.phanloai[0]?.hannom);

  return (
    <div className={dropdownValue ? "visible-style" : "hidden-style"}>
      <Card
        bg={dropdownValue}
        key={dropdownValue}
        text={"dropdownValue".toLowerCase() === "light" ? "dark" : "white"}
        className={`card ${flip ? "flip" : ""}`}
        style={{ height: height }}
        onClick={() => setFlip(!flip)}
      >
        <div className="front" ref={frontEl}>
          {flashcard.quocngu}
        </div>
        <div className="back" ref={backEl}>
          Nôm:{" "}
          <p>
            {flashcard.dinhnghia?.phanloai[0]?.hannom ||
              flashcard.dinhnghia?.phanloai?.hannom}
          </p>
          <br />
          Ngữ cảnh:{" "}
          {flashcard.dinhnghia?.phanloai[0]?.ngucanh ||
            flashcard.dinhnghia?.phanloai?.ngucanh}
          <br />
          Phiên âm:{" "}
          {flashcard.dinhnghia?.phanloai[0]?.phienam ||
            flashcard.dinhnghia?.phanloai?.phienam}
          <br />
          Nguồn:{" "}
          <p style={{ color: "red", fontSize: "16px", display: "in-line" }}>
            {flashcard.dinhnghia?.phanloai[0]?.nguon ||
              flashcard.dinhnghia?.phanloai?.nguon}
          </p>
        </div>
      </Card>
      {/* } */}
    </div>
  );
}
