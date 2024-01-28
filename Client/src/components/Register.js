import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isShowRePassword, setIsShowRePassword] = useState("false");
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (<>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <div className="login-container col-12 col-lg-6 col-sm-4 ">
            <div className="tittle">Đăng ký tài khoản của bạn</div>
            <div className="text">Email </div>
            <input
                type="text"
                // placeholder="Nhập email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <div className="text">Mật khẩu</div>
            <div className="input-2">
                <input
                    type={isShowPassword === true ? "text" : "password"}
                    // placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                    onClick={() => setIsShowPassword(!isShowPassword)}
                ></i>
            </div>

            <div className="text">Nhập lại mật khẩu</div>
            <div className="input-2">
                <input
                    type={isShowRePassword === true ? "text" : "password"}
                    // placeholder="Nhập lại mật khẩu"
                    value={rePassword}
                    onChange={(event) => setRePassword(event.target.value)}
                />
                <i className={isShowRePassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                    onClick={() => setIsShowRePassword(!isShowRePassword)}
                ></i>
            </div>

            <button
                className={email && password && rePassword ? "active" : ""}
                disabled={email && password && rePassword ? false : true}
            >Đăng nhập </button>
            <div className="back">
                <i class="fa-solid fa-angle-left"></i> Go back
            </div>

        </div>
    </>)

}

export default Register;