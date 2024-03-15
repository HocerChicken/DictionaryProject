import "../../App.scss";
import UserPost from "./userPost";
import Sidebar from "../sidebar";
import { useEffect } from "react";

const UserPosts = () => {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <div className="single">
            <div
                className="main-home"
                style={{ backgroundColor: "#fff", marginTop: "64px" }}
            >
                <UserPost />
                <Sidebar />
            </div>
        </div>
    );
};
export default UserPosts;
