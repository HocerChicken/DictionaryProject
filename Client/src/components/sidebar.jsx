import '../App.scss'

const Sidebar = () => {
    const posts = [
        {
            id: 1,
            title: 'Vài nét về chữ Nôm, nguồn gốc và sự phát triển',
            image: 'https://chunom.net/uploads/2015-12-16chu-nom.jpg',
        },
        {
            id: 2,
            title: 'Truyện Kiều: Ngẫm hay muôn sự tại Trời, Trời kia đã bắt làm người có thân',
            image: 'https://chunom.net/uploads/truyen-kieu-2018-11-15.jpg',

        },
        {
            id: 3,
            title: 'Sấm Trạng Trình ký bản chữ Nôm',
            image: 'https://chunom.net/uploads/sam-trang-trinh-ban-chu-nom-2018-05-31.jpg',

        },
    ];
    return (
        <>

            <div className='sidebar'>
                <span className="sidebarSection">Bài quan tâm</span>
                {posts.map((post) => (
                    <div className="section-post">
                        <img src={post.image}></img>
                        <p className="section-title">{post.title}</p>
                    </div>
                ))}


            </div>

        </>
    )
}
export default Sidebar;