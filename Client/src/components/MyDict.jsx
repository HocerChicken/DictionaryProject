import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyDict = () => {
  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const userId = getUserId(); // Hàm này để lấy userId của người dùng, có thể bạn đã lưu ở một nơi nào đó trong ứng dụng của bạn
        const response = await axios.get(`/mydict/${userId}`);
        const titles = response.data.dictionary.map(item => item.title);
        setDictionary(titles);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ điển cá nhân:', error);
      }
    };

    fetchDictionary();
  }, []);

  // Hàm này sử dụng để lấy userId từ cookies
  const getUserId = () => {
    // Đây chỉ là một ví dụ đơn giản, bạn có thể triển khai hàm này phù hợp với cách bạn lưu trữ cookies
    const cookies = document.cookie.split(';');
    const userIdCookie = cookies.find(cookie => cookie.trim().startsWith('userId='));
    if (userIdCookie) {
      return userIdCookie.split('=')[1];
    }
    return null; // Trả về null nếu không tìm thấy userId trong cookies
  };

  return (
    <div>
      <h1>Quản lý từ của tôi</h1>
      <div className="dictionary-container">
        {dictionary.map((title, index) => (
          <div className="dictionary-item" key={index}>
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDict;
