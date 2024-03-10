import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useState } from "react";
import TableData from "./TableData";

const Translate = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/api/words/${title}`);
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
    <>
      <div className="translate-container">
        <Breadcrumb className="mt-5">
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item active>Tra cứu</Breadcrumb.Item>
          <Breadcrumb.Item active>Hán - Việt</Breadcrumb.Item>
        </Breadcrumb>
        <main>
          <div className="translate-area">
            <form>
              <input placeholder="Nhập văn bản cần dịch"></input>
              <div>
                <button type="submit">Tra từ</button>
              </div>
            </form>
            <div className="translation-result">
              <p>
                {data?.message ? (
                  "không tim thấy từ"
                ) : (
                  <TableData data={data} />
                )}
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Translate;
