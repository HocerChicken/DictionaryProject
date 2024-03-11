import React from "react";
import Table from "react-bootstrap/Table";
import "../App.scss";

export default function TableData({ data }) {
  const dataGet = JSON.stringify(data);
  const jsonData = JSON.parse(dataGet);
  // const jsonData = {
  //   definitions: {
  //     source: [
  //       {
  //         "@class": "Nguồn tham khảo: Từ điển - Lê Văn Đức",
  //         meaning: [
  //           "st. Số đếm hoặc số thứ-tự giữa một và ba, được hình-dung bằng 2 hoặc II:Một với một là hai; Thứ hai, anh Hai, bác Hai; Mặt vàng đổi lấy mặt xanh, Hai tay hai gậy lạy anh sông Bờ(CD).",
  //           "hallo",
  //         ],
  //       },
  //       {
  //         "@class": "Nguồn tham khảo: Từ điển mở - Hồ Ngọc Đức",
  //         meaning:
  //           "- dt. 1. Số tiếp theo số một trong dãy số tự nhiên: hai người hai con gà. 2. đphg Những người lớn tuổi hơn cả trong cùng một thế hệ ở một gia đình: anh Hai chị Hai.",
  //       },
  //       {
  //         "@class": "Nguồn tham khảo: Từ điển - Nguyễn Lân",
  //         meaning:
  //           "stSố đếm sau số một và trước số ba: Hai vợ chồng son, đẻ một con thành bốn (tng); Đã nguyền hai chữ đồng tâm (K); Khá trao hai lượng bạc ròng (LVT).tt1. Sau người anh cả: Anh hai2. Sau người vợ cả: Vợ hai3. Sau thứ nhất: Thứ hai; Phương trình bậc hai.",
  //       },
  //       {
  //         "@class": "Nguồn tham khảo: Từ điển - Thanh Nghị",
  //         meaning:
  //           "st. Một cọng với một: Sắc đành đòi một, tài đành đòi hai(Ng.Du)// Hai bên. Hai bậc. Hai đầu. Hai thứ tiếng. Hai sắc. ánh sáng hai sắc. // Thứ hai:a) bực thứ hai. b) ngày thứ hai.Hai lần. Hai vợ chồng. Bắt cá hai tay,làm một công hai việc tham lam.",
  //       },
  //       {
  //         "@class": "Nguồn tham khảo: Từ điển - Việt Tân",
  //         meaning:
  //           ".-t.Số đếm sau số một và trước số ba:Một với một là hai.Hai mắt dồn một. Hết sức chú ý. Hai năm rõ mười. Rõ ràng quá, không cãi được nữa. Hai sương một nắng.X. Nắng. Hai tay buông xuôi. Chết. Hai thưng một đấu. Cùng một nhà với nhau, của mỗi người đều là của chung.",
  //       },
  //       {
  //         "@class": "Nguồn tham chiếu: Từ điển - Khai Trí",
  //         meaning:
  //           "Số đếm, đứng sau số một.Văn-liệu: Hai năm rõ mười. Hai sương, một nắng. Hai thóc, một gạo. Hai thưng vào một đấu. ấm-oái như hai gái lấy một chồng. Hai vợ chồng son, đẻ một con hoá bốn(T-ng).",
  //       },
  //     ],
  //   },
  //   _id: "65ec80ebe9f99182428e2423",
  //   title: "hai",
  // };

  return (
    <Table striped bordered hover style={{ width: "1200px", margin: "0 auto" }}>
      <thead>
        <tr>
          <th>Từ</th>
          <th>Nghĩa</th>
        </tr>
      </thead>
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

  );
}
