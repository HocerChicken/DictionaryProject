import React from "react";
import Table from "react-bootstrap/Table";
import "../App.scss";
import { Context } from "../context/Context";
import { useContext } from "react";
import { useState } from "react"

export default function TableData({ data, translate }) {
  const dataGet = JSON.stringify(data);
  const jsonData = JSON.parse(dataGet);
  const { user } = useContext(Context);
  const [saveMessage, setSaveMessage] = useState("");

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/dictionaries/${user.username}`);
      const data = await response.json();
      if (!data) {
        console.log("hi")
        const createResponse = await fetch('http://localhost:5000/api/dictionaries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: user.username, title: [jsonData.title] }),
        });

        if (createResponse.ok) {
          console.log('New data saved successfully');
        } else {
          console.error('Failed to save new data:', createResponse.statusText);
        }
      }
      const isWordExists = data.title.includes(jsonData.title);
      if (isWordExists) {
        setSaveMessage("Từ đã có trong từ điển");
      }

      else {
        const updatedTitles = [...data.title, jsonData.title];
        const updateResponse = await fetch(`http://localhost:5000/api/dictionaries/${user.username}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: updatedTitles,
          }),
        });
        if (updateResponse.ok) {
          setSaveMessage("Đã lưu vào từ điển");
          console.log('Data updated successfully');
        } else {
          console.error('Failed to update data:', updateResponse.statusText);
        }
      }
    } catch (error) {
      console.error('Error saving data:', error.message);
    }
  }
  return (
    <>
      {translate && <h1>Viet - Viet</h1>}
      <Table striped bordered hover style={{ width: "1200px", margin: "0 auto" }}>
        {jsonData && <thead>
          <tr>
            <th>Từ</th>
            <th>Nghĩa</th>
          </tr>
        </thead>}
        <tbody>
          {jsonData?.definitions?.source.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  fontWeight: "600",
                  color: "blue",
                  fontSize: "20px",
                  padding: "30px",
                }}
              >
                {jsonData.title}
              </td>
              <td>
                {Array.isArray(item.meaning) ? (
                  item.meaning.map((item, index) => (
                    <p className="tb-meaning-cell" key={index}>
                      {item}
                    </p>
                  ))
                ) : (
                  <p className="tb-meaning-cell">{item.meaning}</p>
                )}
                <p
                  style={{
                    textAlign: "right",
                    color: "red",
                    fontStyle: "italic",
                  }}
                >
                  {item["@class"]}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {data && user && <button className="saveWord" onClick={handleSave}>Lưu từ</button>}

      {saveMessage && <p className="saveMessage">{saveMessage}</p>}

    </>


  );
}
