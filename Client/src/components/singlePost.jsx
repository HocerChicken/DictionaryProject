import "../App.scss";
import Post from "../components/single";
import Sidebar from "./sidebar";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="SinglePostWrapper">
        <h1 className="singlePostTitle">
          Chữ Nôm và cống hiến với văn học cổ Việt Nam
        </h1>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>

        <img
          src="https://chunom.net/uploads/han-thuyen-nom-van-te-ca-sau-2023-01-09.jpg"
          className="singlePostImg"
          alt="error"
        />

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Tác giả: <b>Nguyễn Tấn Lực</b>
          </span>
          <span className="singlePostAuthorDate">1 giờ trước</span>
        </div>
        <p className="singlePostDesc">
          Giả thiết trên chưa được các học giả khác thừa nhận. Nguyễn Văn Tố nêu
          giả thiết rằng chữ Nôm đã tồn tại từ cuối thế kỉ VIII khi danh hiệu Bố
          Cái đại vương 布 蓋 大 王 được hậu duệ và thần dân dùng để tôn xưng
          Phùng Hưng, người đã đánh bại chính quyền phương Bắc và nắm quyền cai
          quản An Nam Đô hộ phủ(8). Đó cũng là quan điểm của Dương Quảng Hàm
          trong cuốn Việt Nam văn học sử yếu(9). Giả thiết thứ ba được đề xuất
          năm 1932 bởi Sở Cuồng, một học giả Việt Nam khác, ông đã cố gắng chứng
          minh rằng chữ Nôm ra đời ngay từ thời Sĩ Nhiếp [hoặc Tiếp] 士 燮 (187
          - 226). Luận cứ của ông chủ yếu dựa trên lời của một nhà Nho Việt Nam
          dưới triều vua Tự Đức 嗣 德 tên là Nguyễn Văn San 阮 文 珊 cóhiệu là
          Văn Đa cư sĩ 文 多 居 士. Trong cuốn sách nhan đề Đại Nam quốc ngữ 大
          南 國 語 của mình, Nguyễn Văn San nói rằng Sĩ vương là người đầu tiên
          cố gắng phiên dịch kinh điển Trung Quốc ra tiếng Việt bằng cách sử
          dụng chữ Hán như là những phù hiệu chỉ âm đọc để ghi từ tiếng Việt bản
          địa. Trong số những khó khăn mà Sĩ vương gặp phải khi nỗ lực phiên
          dịch, Nguyễn Văn San trích xuất hai ví dụ: thư cưu 雎 鳩 (tên một loài
          chim) và dương đào 羊 桃 (quả khế), hai trường hợp mà Sĩ Nhiếp không
          biết là chim gì và quả gì là tương đương trong tiếng Việt. Sở Cuồng
          tán thành ý kiến của Văn Đa cư sĩ, cho dù ông lấy làm tiếc vì vị cư sĩ
          này không đưa ra nguồn dẫn cho ý kiến ấy. Để ủng hộ ý kiến này, Sở
          Cuồng đề xuất những luận cứ sau: 1) Vào thời Sĩ Nhiếp, khi người Việt
          lần đầu tiên học chữ Hán, họ có thể chỉ hiểu thông qua tiếng Việt, và
          thầy dạy chữ Hán phải sử dụng những chữ Hán có âm đọc giống với các từ
          trong tiếng Việt để dạy người Việt cách đọc một chữ Hán nào đó. Mặt
          khác, bởi các âm đọc và kí hiệu chữ Hán không thể ghi hết các từ tiếng
          Việt bản địa, những người Việt học chữ Hán khi ấy phải cố gắng lấp đầy
          khoảng trống đó bằng cách ghép nhiều bộ phận của các chữ Hán lại với
          nhau để tạo nên chữ mới trên cơ sở các nguyên tắc cấu tạo chữ Hán như
          hài thanh, giả tá và hội ý. Có thể chính là nhờ cách này mà chữ Nôm
          được sáng tạo ra.
        </p>
      </div>
    </div>
  );
};
export default SinglePost;
