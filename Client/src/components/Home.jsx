import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headerIcon from "../assets/images/header-icon-bg.png";
import Posts from "./posts";
import Sidebar from "./sidebar";
import Footer from "./Footer";
import { useContext } from "react";
import { Context } from "../context/Context";

const Home = () => {
  const { user, dispatch } = useContext(Context);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
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
    </>
  );
};

export default Home;
