import React, { useState, useEffect } from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TableVietData from "./TableVietData";
import TableCheckNomData from "./TableCheckNomData";
import TableNomData from "./TableNomData";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

const MyDict = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [translate, setTranslate] = useState("");
  const { user } = useContext(Context);
  const [dataDict, setDataDict] = useState([]);
  const [deleteData, setDeleteData] = useState("");
  const navigate = useNavigate();
  const [selectedDict, setSelectedDict] = useState("");
  const [selectedWord, setSelectedWord] = useState("");

  const handleSubmit = async (dict) => {
    setDeleteData(dict)
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
      const getResByTitle = async (title) => {
        const response = await fetch(
          `http://localhost:5000/api/wordnoms/${title}`
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
      const arrayOfTitle = dict.split(" ") || "";
      const arrayOfData = [];
      for (let title of arrayOfTitle) {
        const resData = await getResByTitle(title);
        if (resData) {
          arrayOfData.push(resData);
        }
      }
      setData(arrayOfData);
      setTranslate(2);
      setCount(1);
    }
    setSelectedWord(dict);
  };



  const handleClickDelete = async (deleteData, username) => {
    try {
      await axios.delete(`http://localhost:5000/api/dictionaries/${username}/${deleteData}`);
      // window.location.reload();
      const response = await fetch(`http://localhost:5000/api/dictionaries/${username}`);
      const data = await response.json();
      // Cập nhật mảng từ mới
      setDataDict(data);
      setData([])
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/dictionaries/${user.username}`)
      .then((response) => response.json())
      .then((data) => {
        setDataDict(data);
      })
      .catch((error) => console.error(error));

  }, []);

  return (
    <>
      <div className="myDict">
        <Alert key={'warning'} variant={'warning'}><svg style={{ width: "24px", height: "24px", stroke: "teal" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg> Vui lòng thêm từ vào từ điển của bạn nếu chưa có từ nào </Alert>
        <Alert key={'warning'} variant={'warning'}> Để xóa từ - hãy chọn từ và nhấn:
          <button
            onClick={() => handleClickDelete(deleteData, user.username)}
            className="button-delete"
            style={{ display: "inline" }}
          >Xóa từ</button>
        </Alert>



        {Array.isArray(dataDict?.title) &&
          dataDict?.title.map((dict) => (
            < div
              className={`dictWord ${selectedWord === dict ? "selected" : ""}`} // Thêm class "selected" khi từ được chọn
              key={dict?._id}
              onClick={() => handleSubmit(dict)}
            >
              <span>{dict}</span>
            </div>
          ))}

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
                <TableNomData data={data} translate={translate} />
              )}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyDict;
