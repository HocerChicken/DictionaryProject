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
              <th>Từ</th>
              <th>Nghĩa</th>
            </tr>
          </thead>
        )}
        <tbody>
          {jsonData?.dinhnghia?.phanloai?.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  fontWeight: "600",
                  color: "blue",
                  fontSize: "20px",
                  padding: "30px",
                }}
              >
                {jsonData.quocngu}
              </td>
              <td>
                <ul>
                  <li className="tb-meaning-cell">Nôm: {item.nom}</li>
                  <li className="tb-meaning-cell">Bộ thủ: {item.bothu}</li>
                  <li className="tb-meaning-cell">Ngữ cảnh: {item.ngucanh}</li>
                  <li className="tb-meaning-cell">Phiên âm: {item.phienam}</li>
                  <p className="tb-meaning-cell">
                    {" "}
                    Nguồn tham khảo: {item.nguon}
                  </p>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
