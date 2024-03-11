import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useState } from "react";
import TableData from "./TableData";

const Translate2 = (props) => {
  return (
    <div className="translate-container">
      <Breadcrumb className="mt-5">
        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item active>Tra cứu</Breadcrumb.Item>
        <Breadcrumb.Item active>Việt - Nôm</Breadcrumb.Item>
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
            <h3>Kết quả dịch</h3>
            <p>Đoạn văn dịch thuật</p>
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
  );
};

export default Translate2;
