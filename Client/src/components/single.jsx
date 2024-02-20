import '../App.scss'
import SinglePost from './singlePost';
import Sidebar from './sidebar';

const Single = () => {
    return (
        <>
            <div className='posts'>
                <SinglePost />
                <Sidebar />
            </div>

        </>
    )
}
export default Single;