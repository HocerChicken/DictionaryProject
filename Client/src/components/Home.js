import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const posts = [
        {
            id: 1,
            title: 'Bảy phương pháp giúp bạn tự học tiếng Anh hiệu quả',
            content: 'Khi tự học tiếng Anh tại nhà, bạn cũng có thể học theo tốc độ của riêng bạn mà không cần phải tuân theo các bài học của giáo viên hướng dẫn hoặc thành tựu (mức tiến bộ) của các bạn cùng lớp. Dưới đây là những kinh nghiệm từ chuyên gia giúp bạn tự học tiếng Anh tại nhà hiệu quả hơn, mời bạn cùng tham khảo.',
            image: 'https://benative.vn/uploads/tin-tuc/2018_09/tu-hoc-tieng-anh-tai-nha.jpg',
        },
        {
            id: 2,
            title: 'Các mẹo luyện thi và các bài kiểm tra thực hành TOEIC',
            content: 'Dưới đây là 11 bí quyết giúp bạn học tiếng Anh giao tiếp ngay tại nhà mà chuyên gia tiếng Anh hy vọng sẽ mang đến động lực học tập cho bạn cũng như giúp bạn nâng cao ngữ pháp, từ vựng và các kỹ năng tiếng Anh khác.',
            image: 'https://luyenthitoeic.edu.vn/uploads/cac-meo-luyen-thi-nguon-sach-va-cac-bai-kiem-tra-thuc-hanh-toeic-2.jpg',

        },
        {
            id: 3,
            title: '5 website tự học tiếng Anh giao tiếp miễn phí',
            content: 'Chỉ cần một chiếc máy tính có kết nối internet, truy cập vào các trang web học tiếng Anh trực tuyến mà không phải trả bất kỳ khoản phí nào là bạn đã có thể tự nâng cao trình độ tiếng Anh ngay tại nhà. Trên mạng có vô số trang web học tiếng Anh online nhưng 5 trang web sau đây rất hữu ích để bạn quan tâm và tham khảo.',
            image: 'https://play-lh.googleusercontent.com/LOiZRCWwTINbA7Z8uhfBUcWoO6ZU_JegLAAh9bGZbfKjSBADhEATrtlUUPKl4mIi6Q',

        },
    ];
    return (
        <>
            <div className="homepage-container col-12 row">
                <div className="col-lg-12 col-md-8 col-xs-12 mt-5 ">

                    <div className="main-content ">
                        {posts.map((post) => (
                            <div className="post mt-4" key={post.id}>
                                <img src={post.image} alt={post.title} />
                                <div className="post-content">
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section col-lg-12 col-md-4 col-xs-6 list-unstyled mt-5 bb-5 ">
                    <div className="main-title-outer pull-left">
                        <div className="main-title1">Bài quan tâm</div>
                    </div>

                    <div className="mt-5 row">
                        <div className="col-lg-4 col-sm-5 col-md-4">
                            <img src="https://bizweb.dktcdn.net/thumb/grande/100/211/938/files/tieng-anh-di-du-hoc.jpg?v=1498813113533" />
                        </div>
                        <div className="col-lg-8 col-sm-11 col-md-12">
                            <h5>Cách học thuộc đoạn văn tiếng Anh nhanh nhất hiện nay</h5>
                            <div className="text-danger sub-info">
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 row">
                        <div className="col-lg-4 col-sm-5 col-md-4">
                            <img src="https://luyenthitoeic.edu.vn/uploads/cac-meo-luyen-thi-nguon-sach-va-cac-bai-kiem-tra-thuc-hanh-toeic-4.jpg" />
                        </div>
                        <div className="col-lg-8 col-sm-11 col-md-12">
                            <h5>Các mẹo luyện thi, nguồn sách và các bài kiểm tra thực hành TOEIC</h5>
                            <div className="text-danger sub-info">
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 row">
                        <div className="col-lg-4 col-sm-5 col-md-4">
                            <img src="https://giasutrithuc.net/wp-content/uploads/2020/01/de-hoc-tot-tieng-Anh-12-gia-su-tri-thuc-4.jpg" />
                        </div>
                        <div className="col-lg-8 col-sm-11 col-md-12">
                            <h5>Các mẹo luyện thi, nguồn sách và các bài kiểm tra thực hành TOEIC</h5>
                            <div className="text-danger sub-info">
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    );
};

export default Home;