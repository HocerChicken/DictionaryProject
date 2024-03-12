import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Đăng ký tài khoản</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Tên tài khoản</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Nhập tên tài khoản..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Nhập email của bạn..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mật khẩu</label>
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            className="registerInput"
            placeholder="Nhập mật khẩu..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>

        {/* <button className="registerButton" type="submit">
                    Đăng ký
                </button> */}
        <button
          className={
            username && email && password
              ? "registerButton active"
              : "registerButton"
          }
          disabled={username && email && password ? false : true}
          type="submit"
        >
          Đăng ký{" "}
        </button>
      </form>
      {/* <button className="registerLoginButton">
        <Link className="link" to="/login">
          Đăng nhập
        </Link>
      </button> */}
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};
export default Register;
