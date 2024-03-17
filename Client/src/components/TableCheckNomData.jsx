import React from "react";
import Table from "react-bootstrap/Table";
import "../App.scss";

export default function TableCheckNomData({ data, translate }) {
  const dataGet = JSON.stringify(data);
  const jsonData = JSON.parse(dataGet);

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
          {jsonData?.map((item, index) =>
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
                        {definition.nom}
                      </span>
                    </li>
                    <li className="tb-meaning-cell">
                      Nôm:{" "}
                      <span style={{ color: "blue", fontSize: "22px" }}>
                        {definition.maunicode}
                      </span>
                    </li>
                    <li className="tb-meaning-cell">
                      Bộ thủ: {definition.bothu}
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
    </>
  );
}
