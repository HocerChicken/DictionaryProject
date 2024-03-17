import React, { useState, useEffect } from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TableVietData from "./TableVietData";
import TableCheckNomData from "./TableCheckNomData";

const MyDict = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [translate, setTranslate] = useState("");
  const { user } = useContext(Context);
  const [dataDict, setDataDict] = useState([]);
  const navigate = useNavigate();
  const [selectedDict, setSelectedDict] = useState("");

  const handleSubmit = async (dict) => {
    console.log(">>>> count", count);

    if (count === 1) {
      const response = await fetch(
        `http://localhost:5000/api/wordviets/${dict}`
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
      setTranslate(1);
      setCount(2);
    }
    if (count === 2) {
      const response = await fetch(
        `http://localhost:5000/api/wordnoms/${dict}`
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
      setTranslate(2);
      setCount(1);
    }
  };

  const handleClick = async (value) => {
    setTranslate(value);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/dictionaries/${user.username}`)
      .then((response) => response.json())
      .then((data) => {
        setDataDict(data);
      })
      .catch((error) => console.error(error));
    // Kiểm tra giá trị của dataDict
  }, []);

  return (
    <>
      <div className="myDict">
        {Array.isArray(dataDict.title) &&
          dataDict.title.map((dict) => (
            // <div className="dictWord" key={dict._id} onClick={handleSubmit(dict)}>
            <div
              className="dictWord"
              key={dict._id}
              onClick={() => handleSubmit(dict)}
            >
              <span>{dict}</span>
            </div>
          ))}

        {/* <div className="translation-result">
          <h3>Nghĩa của từ</h3>
          <p>
            {data?.message ? "không tim thấy từ" : <TableData2 data={data} />}
          </p>
        </div> */}

        {/* <div className="options">
          <button onClick={() => handleClick(1)}>Việt - việt</button>
          <button onClick={() => handleClick(2)}> Việt - Nôm</button>
        </div> */}
        {translate == 1 && (
          <div className="translation-result">
            <h3>Nghĩa của từ</h3>
            <p>
              {data?.message ? (
                "không tim thấy từ"
              ) : (
                <TableVietData data={data} translate={translate} />
              )}
            </p>
          </div>
        )}
        {translate == 2 && (
          <div className="translation-result">
            <h3>Nghĩa của từ</h3>
            <p>
              {data?.message ? (
                "không tim thấy từ"
              ) : (
                <TableCheckNomData data={data} translate={translate} />
              )}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyDict;
