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
    const response = await fetch(`http://localhost:5000/api/wordnoms/${title}`);
    if (!response.ok) {
      if (response.status === 404) {
        setData(null);
      } else {
        throw new Error(`${response.status}`);
      }
    }
    const data = await response.json();
    setData(data);
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
              {data?.message ? "không tim thấy" : <TableNomData data={data} />}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TranslateNom;