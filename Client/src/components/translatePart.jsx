import React, { useState } from "react";
import TableData from "./TableData";

const TranslatePart = () => {
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
      <div className="translate-part-container">
        <main>
          <div className="translate-part-area">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Nhập văn bản cần dịch..."
                onChange={(e) => setTitle(e.target.value)}
              />
              <div>
                <button type="submit">Tra từ</button>
              </div>
            </form>
            <div className="translation-result">
              <h3>Kết quả dịch</h3>
              <p>
                {data?.message ? (
                  "không tìm thấy từ"
                ) : (
                  <TableData data={data} />
                )}
              </p>
            </div>
          </div>
          <section className="services-section">
            <h2>Công cụ dịch</h2>
            <ul>
              <li>Dịch thuật Hán Việt</li>
              <li>Dịch thuật Hán Nôm</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};
export default TranslatePart;
