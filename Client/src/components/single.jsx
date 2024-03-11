import "../App.scss";
import SinglePost from "./singlePost";
import Sidebar from "./sidebar";

const Single = () => {
  return (
    <div className="single">
      <div
        className="main-home"
        style={{ backgroundColor: "#fff", marginTop: "64px" }}
      >
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
};
export default Single;
