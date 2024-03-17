import Breadcrumb from "react-bootstrap/Breadcrumb";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import TableCheckNomData from "./TableCheckNomData";
import TableCheckNomData2 from "./TableCheckNomData2";
import TableCheckNomData3 from "./TableCheckNomData3";
import RadioButtonGroups from "./toggleRadioButton";
import TableNomData from "./TableNomData";

const TranslateCheckNom = (props) => {
  useEffect(() => window.scrollTo(50, 50), []);
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const [childData, setChildData] = useState("1");
  const { user } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (childData === "1") {
      try {
        const arrayOfTitle = title.split(" ") || "";
        const arrayOfData = [];
        for (let title of arrayOfTitle) {
          const resData = await getResByTitle(title);
          if (resData) {
            arrayOfData.push(resData);
          }
        }
        setData(arrayOfData);
      } catch (error) {
        console.log("Error fetching: " + error);
      }
    } else if (childData === "2") {
      try {
        const response = await fetch(
          `http://localhost:5000/api/wordchecknoms/nom/${title.toLocaleLowerCase()}`
        );
        if (!response.ok) {
          if (response.status === 404) {
            setData(null);
          } else {
            throw new Error(`${response.status}`);
          }
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("Error Fetching: " + error);
      }
    } else {
      try {
        const response = await fetch(
          `http://localhost:5000/api/wordchecknoms/maunicode/${title}`,
          { "content-Type": "application/json" }
        );
        if (!response.ok) {
          if (response.status === 404) {
            setData(null);
          } else {
            throw new Error(`${response.status}`);
          }
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error fetching: " + error);
      }
    }
  };

  const getResByTitle = async (title) => {
    const response = await fetch(
      `http://localhost:5000/api/wordchecknoms/${title}`
    );
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

  const handleChildData = (data) => {
    setChildData(data);
    setData([]);
  };

  return (
    <div className="translate-container">
      <Breadcrumb className="mt-5">
        <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item active>Tra cứu</Breadcrumb.Item>
        <Breadcrumb.Item active>Hán - Nôm</Breadcrumb.Item>
      </Breadcrumb>
      <main>
        <div className="translate-area">
          <RadioButtonGroups onChildData={handleChildData}></RadioButtonGroups>
          <form>
            <input
              className="translate-input"
              placeholder="Nhập văn bản cần dịch"
              onChange={(e) => setTitle(e.target.value)}
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
                "không tìm thấy, vui lòng nhập từ và tra"
              ) : childData === "1" ? (
                <TableCheckNomData data={data} />
              ) : childData === "2" ? (
                <TableCheckNomData2 data={data} />
              ) : childData === "3" ? (
                <TableCheckNomData3 data={data} />
              ) : null}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TranslateCheckNom;
