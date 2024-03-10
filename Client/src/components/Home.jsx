import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headerIcon from "../assets/images/header-icon-bg.png";
import Posts from "./posts";
import Sidebar from "./sidebar";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Bảy phương pháp giúp bạn tự học tiếng Anh hiệu quả",
      content:
        "Khi tự học tiếng Anh tại nhà, bạn cũng có thể học theo tốc độ của riêng bạn mà không cần phải tuân theo các bài học của giáo viên hướng dẫn hoặc thành tựu (mức tiến bộ) của các bạn cùng lớp. Dưới đây là những kinh nghiệm từ chuyên gia giúp bạn tự học tiếng Anh tại nhà hiệu quả hơn, mời bạn cùng tham khảo.",
      image:
        "https://benative.vn/uploads/tin-tuc/2018_09/tu-hoc-tieng-anh-tai-nha.jpg",
    },
    {
      id: 2,
      title: "Các mẹo luyện thi và các bài kiểm tra thực hành TOEIC",
      content:
        "Dưới đây là 11 bí quyết giúp bạn học tiếng Anh giao tiếp ngay tại nhà mà chuyên gia tiếng Anh hy vọng sẽ mang đến động lực học tập cho bạn cũng như giúp bạn nâng cao ngữ pháp, từ vựng và các kỹ năng tiếng Anh khác.",
      image:
        "https://luyenthitoeic.edu.vn/uploads/cac-meo-luyen-thi-nguon-sach-va-cac-bai-kiem-tra-thuc-hanh-toeic-2.jpg",
    },
    {
      id: 3,
      title: "5 website tự học tiếng Anh giao tiếp miễn phí",
      content:
        "Chỉ cần một chiếc máy tính có kết nối internet, truy cập vào các trang web học tiếng Anh trực tuyến mà không phải trả bất kỳ khoản phí nào là bạn đã có thể tự nâng cao trình độ tiếng Anh ngay tại nhà. Trên mạng có vô số trang web học tiếng Anh online nhưng 5 trang web sau đây rất hữu ích để bạn quan tâm và tham khảo.",
      image:
        "https://play-lh.googleusercontent.com/LOiZRCWwTINbA7Z8uhfBUcWoO6ZU_JegLAAh9bGZbfKjSBADhEATrtlUUPKl4mIi6Q",
    },
    {
      id: 4,
      title: "5 website tự học tiếng Anh giao tiếp miễn phí",
      content:
        "Chỉ cần một chiếc máy tính có kết nối internet, truy cập vào các trang web học tiếng Anh trực tuyến mà không phải trả bất kỳ khoản phí nào là bạn đã có thể tự nâng cao trình độ tiếng Anh ngay tại nhà. Trên mạng có vô số trang web học tiếng Anh online nhưng 5 trang web sau đây rất hữu ích để bạn quan tâm và tham khảo.",
      image:
        "https://play-lh.googleusercontent.com/LOiZRCWwTINbA7Z8uhfBUcWoO6ZU_JegLAAh9bGZbfKjSBADhEATrtlUUPKl4mIi6Q",
    },
    {
      id: 5,
      title: "5 website tự học tiếng Anh giao tiếp miễn phí",
      content:
        "Chỉ cần một chiếc máy tính có kết nối internet, truy cập vào các trang web học tiếng Anh trực tuyến mà không phải trả bất kỳ khoản phí nào là bạn đã có thể tự nâng cao trình độ tiếng Anh ngay tại nhà. Trên mạng có vô số trang web học tiếng Anh online nhưng 5 trang web sau đây rất hữu ích để bạn quan tâm và tham khảo.",
      image:
        "https://play-lh.googleusercontent.com/LOiZRCWwTINbA7Z8uhfBUcWoO6ZU_JegLAAh9bGZbfKjSBADhEATrtlUUPKl4mIi6Q",
    },
    {
      id: 6,
      title: "5 website tự học tiếng Anh giao tiếp miễn phí",
      content:
        "Chỉ cần một chiếc máy tính có kết nối internet, truy cập vào các trang web học tiếng Anh trực tuyến mà không phải trả bất kỳ khoản phí nào là bạn đã có thể tự nâng cao trình độ tiếng Anh ngay tại nhà. Trên mạng có vô số trang web học tiếng Anh online nhưng 5 trang web sau đây rất hữu ích để bạn quan tâm và tham khảo.",
      image:
        "https://play-lh.googleusercontent.com/LOiZRCWwTINbA7Z8uhfBUcWoO6ZU_JegLAAh9bGZbfKjSBADhEATrtlUUPKl4mIi6Q",
    },
  ];
  return (
    <div className="homepage-container col-lg-12 ">
      <div className="first-element row col-lg-12">
        <div className="header-bg1">
          <img src={headerIcon} style={{ height: 150, width: 200 }}></img>
        </div>
        <h1>
          <p>YooDict — </p>
          <strong>dịch nhanh, chính xác và an toàn</strong>
        </h1>
        <button>
          <a href="/translate">Dịch ngay</a>
        </button>
      </div>
      <div className="main-home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
