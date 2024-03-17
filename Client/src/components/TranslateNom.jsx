import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import TableNomData from "./TableNomData";

const TranslateNom = (props) => {
  useEffect(() => window.scrollTo(50, 50), []);
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const arrayOfTitle = title.split(" ") || "";
    const arrayOfData = [];
    for (let title of arrayOfTitle) {
      const resData = await getResByTitle(title);
      if (resData) {
        arrayOfData.push(resData);
      }
    }
    setData(arrayOfData);
  };

  const getResByTitle = async (title) => {
    const response = await fetch(`http://localhost:5000/api/wordnoms/${title}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      } else {
        throw new Error(`${response.status}`);
      }
    }
    const data = await response.json();
    return data;
  };
  return (
    <div className="translate-container">
      <Breadcrumb className="mt-5">
        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item active>Từ điển</Breadcrumb.Item>
        <Breadcrumb.Item active>Việt - Nôm</Breadcrumb.Item>
      </Breadcrumb>
      <main>
        <div className="translate-area">
          <form>
            <input
              className="translate-input"
              placeholder="Nhập văn bản cần dịch"
              onChange={(e) => setTitle(e.target.value.toLocaleLowerCase())}
            ></input>
            <div>
              <button type="submit" onClick={handleSubmit}>
                Tra từ
              </button>
            </div>
          </form>
          <div className="translation-result">
            {data && <h3>Kết quả dịch</h3>}
            <p>
              {data && data.length === 0 ? (
                "không tìm thấy"
              ) : (
                <TableNomData data={data} />
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TranslateNom;
