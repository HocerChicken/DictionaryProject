import "../App.scss";
import SinglePost from "./singlePost";
import Sidebar from "./sidebar";
import { useEffect } from "react";

const Single = () => {
  useEffect(() => window.scrollTo(0, 0), []);
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
