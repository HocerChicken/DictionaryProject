import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError("Tên tài khoản hoặc mật khẩu không chính xác!");
      return;
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="login">
        <span className="loginTitle">Đăng nhập</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Tên tài khoản</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Nhập tên tài khoản..."
            ref={userRef}
          />
          <label>Mật khẩu</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Nhập mật khẩu..."
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Đăng nhập
          </button>
        </form>
        {error && <span className="errorMessage">{error}</span>}
        {/* <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Đăng ký
          </Link>
        </button> */}
      </div>
    </>
  );
};

export default Login;