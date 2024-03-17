import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function RadioButtonGroups({ onChildData }) {
  const [radioValue, setRadioValue] = useState("1");

  const radioList = [
    { name: "Quốc ngữ", value: "1" },
    { name: "Hán Nôm", value: "2" },
    { name: "Mã Unicode", value: "3" },
  ];

  const handleRadioChange = (e) => {
    const value = e.currentTarget.value;
    setRadioValue(value);
    onChildData(value);
  };
  return (
    <ButtonGroup>
      {radioList.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={idx % 2 ? "outline-success" : "outline-danger"}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={handleRadioChange}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default RadioButtonGroups;
