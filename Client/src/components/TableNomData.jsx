import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import "../App.scss";
import { Context } from "../context/Context";

export default function TableNomData({ data, translate }) {
  const dataGet = JSON.stringify(data);
  let jsonData = JSON.parse(dataGet);
  const [saveMessage, setSaveMessage] = useState("");
  const { user } = useContext(Context);
  let jsonDataTitle = "";
  // {}
  // if (typeof jsonData === "object" && translate) {
  //   jsonData = [jsonData];
  // }

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      if (Array.isArray(jsonData)) {
        jsonData.forEach((item, index) => {
          jsonDataTitle += item.quocngu + " ";
        });
      }
      const response = await fetch(
        `http://localhost:5000/api/dictionaries/${user.username}`
      );
      const data = await response.json();
      console.log(jsonDataTitle);
      if (!data) {
        const createResponse = await fetch(
          "http://localhost:5000/api/dictionaries",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: user.username,
              title: [jsonDataTitle],
            }),
          }
        );

        if (createResponse.ok) {
          console.log("New data saved successfully");
        } else {
          console.error("Failed to save new data:", createResponse.statusText);
        }
      }
      const isWordExists = data.title.includes(jsonDataTitle.trimEnd());
      if (isWordExists) {
        setSaveMessage("Từ đã có trong từ điển");
      } else {
        const updatedTitles = [...data.title, jsonDataTitle];
        const updateResponse = await fetch(
          `http://localhost:5000/api/dictionaries/${user.username}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: updatedTitles,
            }),
          }
        );
        if (updateResponse.ok) {
          setSaveMessage("Đã lưu vào từ điển");
          console.log("Data updated successfully");
        } else {
          console.error("Failed to update data:", updateResponse.statusText);
        }
      }
    } catch (error) {
      console.error("Error saving data:", error.message);
    }
  };

  return (
    <>
      {translate && <h1>Viet - Nom</h1>}
      <Table
        striped
        bordered
        hover
        style={{ width: "1200px", margin: "0 auto" }}
      >
        {jsonData && (
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Quốc Ngữ</th>
              <th>Định nghĩa</th>
            </tr>
          </thead>
        )}
        <tbody>
          {Array.isArray(jsonData) &&
            jsonData?.map((item, index) =>
              item?.dinhnghia?.phanloai.map((definition, index2) => (
                <tr key={index2}>
                  <td
                    style={{
                      fontWeight: "600",
                      color: "blue",
                      fontSize: "20px",
                      padding: "30px",
                    }}
                  >
                    {item.quocngu}
                  </td>
                  <td>
                    <ul>
                      <li className="tb-meaning-cell">
                        Nôm:{" "}
                        <span style={{ color: "blue", fontSize: "22px" }}>
                          {definition.hannom}
                        </span>
                      </li>
                      <li className="tb-meaning-cell">
                        Ngữ cảnh: {definition.ngucanh}
                      </li>
                      <li className="tb-meaning-cell">
                        Phiên âm: {definition.phienam}
                      </li>
                      <p className="tb-meaning-cell">
                        {" "}
                        Nguồn tham khảo: {definition.nguon}
                      </p>
                    </ul>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </Table>
      {data && user && (
        <button className="saveWord" onClick={handleSave}>
          Lưu từ
        </button>
      )}

      {saveMessage && <p className="saveMessage">{saveMessage}</p>}
    </>
  );
}
