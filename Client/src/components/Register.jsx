import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const minCharacter = 6;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra nhập đủ ký tự hay không
    console.log(minCharacter, username)
    if (username.length < minCharacter) {
      setErrorMessage("Vui lòng nhập tên tài khoản từ 6 kí tự trở lên!");
      return;
    }
    if (email.length < minCharacter) {
      setErrorMessage("Vui lòng nhập email từ 6 kí tự trở lên!");
      return;
    }
    if (password.length < minCharacter) {
      setErrorMessage("Vui lòng nhập tên tài khoản từ 6 kí tự trở lên!");
      return;
    }

    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      const passwordRegex = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!passwordRegex.test(password)) {
        setErrorMessage("Mật khẩu không đúng yêu cầu. Vui lòng kiểm tra lại thông tin đăng ký.");
        setPassword("");
        return;
      }
      else {
        setErrorMessage("Tài khoản đã được đăng ký");
        setError(true);

      }
    }
  };
  useEffect(() => {
    let timeout;

    if (errorMessage) {
      timeout = setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [errorMessage]);

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
          type="email"
          className="registerInput"
          placeholder="Nhập email của bạn..."
          onChange={(e) => setEmail(e.target.value)}
          required
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

      {errorMessage && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
export default Register;
