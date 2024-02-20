import '../App.scss'
const Post = () => {
    const posts = [
        {
            id: 1,
            title: 'Chữ Nôm và cống hiến với văn học cổ Việt Nam',
            content: 'Chữ Nôm (chữ = văn tự; và Nôm < nam = phía nam trong tiếng Việt) là tên gọi được người Việt dùng để định danh một trong hai hệ thống văn tự của Việt Nam, được sáng tạo qua việc cải biến chữ Hán. Nó được định danh như thế để đối lập với chữ Hán(1) và chữ Nho (văn tự của các nhà Nho Việt Nam). Trong nội hàm thứ hai, nó có nghĩa là chữ viết thông tục hoặc chữ viết nôm na của nước Việt Nam xưa(2).',
            image: 'https://chunom.net/uploads/han-thuyen-nom-van-te-ca-sau-2023-01-09.jpg',
        },
        {
            id: 2,
            title: 'Quan Âm Thị Kính cách nghĩ của người Việt về phụ nữ Việt',
            content: 'Truyện Nôm Quan Âm Thị Kính (QÂTK) là tác phẩm đặc sắc trong nền văn học dân tộc. Từ lâu, QÂTK vốn rất phổ biến và quen thuộc với mọi người Việt Nam, bởi không chỉ tồn tại với tư cách là một tác phẩm văn học, mà QÂTK còn được chuyển tải thành tác phẩm của các loại hình sân khấu đại chúng khác như chèo, tuồng, cải lương, kịch v.v.',
            image: 'https://chunom.net/uploads/quan-am-thi-kinh-2023-01-09.jpg',

        },
        {
            id: 3,
            title: 'Giới thiệu bài văn chuông của Lê Quý Đôn ở chùa Phúc Khánh',
            content: 'Lê Quí Đôn (1726 - 1784) tự Doãn Hậu, hiệu Quế Đường còn có tên là Lê Danh Phương, người xã Diên Hà, phủ Tiên Hưng, trấn Sơn Nam Hạ (nay thuộc huyện Hưng Hà, tỉnh Thái Bình). Ông là người thông minh, học rộng, hiểu sâu; từ thi Hương, thi Hội, thi Đình đều đỗ đầu.Khoa thi năm Nhâm Thân, niên hiệu Cảnh Hưng thứ 13(1752) đời vua Lê Hiển Tông, Lê Quí Đôn thi đỗ Đệ nhất giáp Tiến sĩ cập đệ Đệ nhị danh, rồi được bổ làm',
            image: 'https://chunom.net/uploads/7686-l%C3%AA-qu%C3%BD-%C4%91%C3%B4n-1726-1784-2023-01-09.jpg',

        },
        {
            id: 4,
            title: 'Văn bia chợ Việt Nam - Giá trị tư liệu thời phong kiến            ',
            content: 'Văn bia chợ là loại văn khắc trên bia đá ghi chép việc mở chợ và những việc liên quan đến chợ ở nước ta thời xưa. Theo số liệu điều tra qua những công trình sưu khảo mới công bố gần đây, đời Lý và đời Trần có hơn 60 văn bia, nhưng chưa có văn bia chợ. Tình hình như thế cũng diễn ra đối với các văn bia thời Lê sơ. Chỉ bắt đầu từ nhà Mạc, mới tìm thấy 6 văn bia nói về việc mở chợ buôn bán ở nông thôn.',
            image: 'https://chunom.net/uploads/van%20bia%20que%20lam%20ngu%20che-2023-01-09.jpg',

        },

    ];
    return (
        <>
            {posts.map((aPost) => (
                <div className="main-post" key={aPost.id}>
                    <img className="postImg" src={aPost.image} />
                    <div className="postInfo">
                        <span className="postTitle">{aPost.title} </span>
                        <span className="postDate">1 hour ago</span>
                    </div>
                    <p className="postDesc">
                        {aPost.content}
                    </p>
                </div>
            ))}
        </>
    )
}
export default Post;