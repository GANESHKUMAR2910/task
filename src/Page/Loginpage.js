import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  var emailvalidation = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  var passwordvalidation =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.[@$!%#?&])*[A-Za-z\d@$!%*#?&]{8,}$/;
  var numbervalidation = /^[6-9]\d{9}$/;
  var inputemail = "";
  var inputpassword = "";
  const History = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem("isLogin"));
    if (localStorage.getItem("isLogin") === "true") {
      // console.log(localStorage.getItem("isLoggin"));
      History("/product");
    }
  }, []);

  const onInputemail = (e) => {
    inputemail = e.target.value;
  };

  const onInputpassword = (e) => {
    inputpassword = e.target.value;
  };
  const onSubmit = () => {
    if (inputemail === "" && inputpassword === "") {
      alert("fill the input field");
    } else if (
      emailvalidation.test(inputemail) === false &&
      numbervalidation.test(inputemail) === false
    ) {
      alert("Enter the valid email id or number");
    } else if (passwordvalidation.test(inputpassword) === false) {
      alert("enter the valid password");
    } else {
      alert("sign in sucessfully");
      localStorage.setItem("isLogin", true);
      History("/Product");
    }
  };

  return (
    <div className="container">
      <div className="Box">
        <h1 className="Title">Sign in</h1>
        <input
          className="input"
          onChange={onInputemail}
          placeholder="Email or phone number"
        ></input>
        <input
          className="input"
          onChange={onInputpassword}
          placeholder="password"
        ></input>
        <button className="button" onClick={onSubmit}>
          sign in
        </button>
        <div className="remember">
          <p className="Small">Remember me</p>
          <p className="Small2">Need help?</p>
        </div>
        <div className="New">
          <p className="New">New to Netflix?</p>
          <p className="Signup1">Sign up now</p>
        </div>
        <div className="page">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
