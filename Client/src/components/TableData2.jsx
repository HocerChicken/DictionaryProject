import React from "react";
import Table from "react-bootstrap/Table";
import "../App.scss";

export default function TableData2({ data }) {
  const dataGet = JSON.stringify(data);
  const jsonData = JSON.parse(dataGet);
  console.log(jsonData);
  // const jsonData = {
  //   quocngu: "a",
  //   dinhnghia: {
  //     phanloai: [
  //       {
  //         nom: "𠲞V+20c9e",
  //         bothu: "Bộ: khẩu - 0030 Số nét: 6",
  //         ngucanh: "a dàng",
  //         nguon: "vhn",
  //         phienam: "English:   Âm Bắc Kinh:   Âm Quảng Đông:",
  //       },
  //       {
  //         nom: "丫U+4e2b",
  //         bothu: "Bộ: cổn - 0002 Số nét: 2",
  //         ngucanh: "chạy a vào",
  //         nguon: "vhn",
  //         phienam:
  //           "English: forked; bifurcation Âm Bắc Kinh: YA1 ZHONG4 Âm Quảng Đông: A1",
  //       },
  //       {
  //         nom: "亞U+4e9e",
  //         bothu: "Bộ: nhị - 0007 Số nét: 6",
  //         ngucanh: "A ha! vui quá.",
  //         nguon: "gdhn",
  //         phienam:
  //           "English: Asia; second; used as a prefix to names Âm Bắc Kinh: YA1 YA4 Âm Quảng Đông: A3 NGA3",
  //       },
  //       {
  //         nom: "啊U+554a",
  //         bothu: "Bộ: khẩu - 0030 Số nét: 8",
  //         ngucanh: "ề à (hoạt động chậm chạp)",
  //         nguon: "gdhn",
  //         phienam:
  //           "English: exclamatory particle Âm Bắc Kinh: A5 QIANG1 Âm Quảng Đông: A1 A2 A3",
  //       },
  //       {
  //         nom: "妸U+59b8",
  //         bothu: "Bộ: nữ - 0038 Số nét: 5",
  //         ngucanh: "Cô ả",
  //         nguon: "btcn",
  //         phienam: "English: person Âm Bắc Kinh: E1 Âm Quảng Đông:",
  //       },
  //       {
  //         nom: "婀U+5a40",
  //         bothu: "Bộ: nữ - 0038 Số nét: 8",
  //         ngucanh: "dáng thướt tha",
  //         nguon: "gdhn",
  //         phienam:
  //           "English: be beautiful, be graceful Âm Bắc Kinh: E1 Âm Quảng Đông: O2",
  //       },
  //       {
  //         nom: "桠U+6860",
  //         bothu: "Bộ: mộc - 0075 Số nét: 6",
  //         ngucanh: "a (rẽ đôi, trạc cây)",
  //         nguon: "gdhn",
  //         phienam:
  //           "English: the forking branch of a tree Âm Bắc Kinh: YA2 Âm Quảng Đông: NGA4",
  //       },
  //       {
  //         nom: "椏U+690f",
  //         bothu: "Bộ: mộc - 0075 Số nét: 8",
  //         ngucanh: "a (rẽ đôi, trạc cây)",
  //         nguon: "gdhn",
  //         phienam:
  //           "English: the forking branch of a tree Âm Bắc Kinh: YA1 YA2 Âm Quảng Đông: NGA4",
  //       },
  //       {
  //         nom: "疴U+75b4",
  //         bothu: "Bộ: nạch - 0104 Số nét: 5",
  //         ngucanh: "trầm a (trầm kha: ốm nặng)",
  //         nguon: "btcn",
  //         phienam:
  //           "English: illness, sickness, disease; pain Âm Bắc Kinh: KE1 Âm Quảng Đông: O1",
  //       },
  //       {
  //         nom: "錒U+9312",
  //         bothu: "Bộ: kim - 0167 Số nét: 8",
  //         ngucanh: "chất Actinium",
  //         nguon: "gdhn",
  //         phienam: "English: actinium Âm Bắc Kinh: A1 Âm Quảng Đông: A1",
  //       },
  //       {
  //         nom: "锕U+9515",
  //         bothu: "Bộ: kim - 167S Số nét: 7",
  //         ngucanh: "chất Actinium",
  //         nguon: "gdhn",
  //         phienam: "English: ac Âm Bắc Kinh: A1 ZHE3 Âm Quảng Đông: A1",
  //       },
  //       {
  //         nom: "阿U+963f",
  //         bothu: "Bộ: phụ - 0170 Số nét: 5",
  //         ngucanh: "a tòng, a du",
  //         nguon: "vhn",
  //         phienam:
  //           "English: prefix for people's names; used in transliteration Âm Bắc Kinh: A1 Âm Quảng Đông: A3 O1",
  //       },
  //       {
  //         nom: "鴉U+9d09",
  //         bothu: "Bộ: điểu - 0196 Số nét: 4",
  //         ngucanh: "nha tước (con quạ)",
  //         nguon: "gdhn",
  //         phienam: "English: crow, raven Âm Bắc Kinh: YA1 Âm Quảng Đông: A1",
  //       },
  //       {
  //         nom: "鵶U+9d76",
  //         bothu: "Bộ: điểu - 0196 Số nét: 8",
  //         ngucanh: "ác vàng",
  //         nguon: "gdhn",
  //         phienam: "English:   Âm Bắc Kinh: YA1 Âm Quảng Đông:",
  //       },
  //     ],
  //   },
  // };

  return (
    <Table striped bordered hover style={{ width: "1200px", margin: "0 auto" }}>
      <thead>
        <tr>
          <th>Từ</th>
          <th>Định nghĩa</th>
        </tr>
      </thead>
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
                <li className="tb-meaning-cell">{item.nom}</li>
                <li className="tb-meaning-cell">{item.bothu}</li>
                <li className="tb-meaning-cell">{item.ngucanh}</li>
                <li className="tb-meaning-cell">
                  Nguồn tham khảo {item.nguon}
                </li>
                <p className="tb-meaning-cell">{item.phienam}</p>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
