import '../App.scss'
import SinglePost from './singlePost';
import Sidebar from './sidebar';

const Single = () => {
    return (
        <>
            <div className='single'>
                <SinglePost />
                <Sidebar />
            </div>
        </>
    )
}
export default Single;