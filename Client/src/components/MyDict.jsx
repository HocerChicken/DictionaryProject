import React, { useState, useEffect } from 'react';
import { Context } from "../context/Context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TableData from "./TableData";


const MyDict = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  const { user } = useContext(Context);
  const [dataDict, setDataDict] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (dict) => {
    // event.preventDefault();
    const response = await fetch(`http://localhost:5000/api/words/${dict}`);
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

  useEffect(() => {
    console.log(user.username); // Kiểm tra giá trị của user.username
    fetch(`http://localhost:5000/api/dictionaries/${user.username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(">>>>>> Data:", data); // Kiểm tra dữ liệu trả về từ máy chủ
        setDataDict(data);

      })
      .catch((error) => console.error(error));
    // Kiểm tra giá trị của dataDict
  }, []);

  const handleDictClick = (dictId) => {
    navigate(`/single/${dictId}`);
  };
  console.log("kq:", Array.isArray(dataDict.title))
  return (
    <>
      <div className='myDict'>
        {Array.isArray(dataDict.title) &&
          dataDict.title.map((dict) => (
            // <div className="dictWord" key={dict._id} onClick={handleSubmit(dict)}>
            <div className="dictWord" key={dict._id} onClick={() => handleSubmit(dict)}>
              <span >
                {dict}
              </span>
            </div>
          ))}

        <div className="translation-result">
          <h3>Nghĩa của từ</h3>
          <p>
            {data?.message ? "không tim thấy từ" : <TableData data={data} />}
          </p>
        </div>
      </div>
    </>
  );
}

export default MyDict;