import { Link } from "react-router-dom";

export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("name", event.target.name.value);
    localStorage.setItem("password", event.target.password.value);
  };

  return (
    <div className="form">
      <Link className="back-tohome" to="/">
        Back
      </Link>
      <div className="head">
        <h1>Login</h1>
        <p>Welcome, Please Enter Your Detail !</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="enter-login">
          <label htmlFor="name">
            <div className="icon-input" htmlFor="name">
              <i className="fa-solid fa-user"></i>
            </div>
            <input type="text" id="name" placeholder="Name" />
          </label>
          <label htmlFor="password">
            <div className="icon-input">
              <i className="fa-solid fa-lock"></i>
            </div>
            <input type="password" placeholder="Password" id="password" />
          </label>
          <div className="help">
            <label htmlFor="remember" className="remember">
              <input type="checkbox" id="remember" />
              <p>Remember Me</p>
            </label>
            <a href="#">Forgot Password ?</a>
          </div>
        </div>
        <button className="btn" type="submit">
          Login
        </button>
        <h6>
          Don't have an account ? <Link to="/register">Register</Link>
        </h6>
      </form>
    </div>
  );
}
