import { Link } from "react-router-dom";

export default function FormRegister() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("name", event.target.name.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
  };

  return (
    <div className="form">
      <Link className="back-tohome" to="/form-loginv2/">
        Back
      </Link>
      <div className="head">
        <h1>Register</h1>
        <p>Welcome, Please Enter Your Detail !</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="enter-register">
          <label htmlFor="name">
            <div className="icon-input" htmlFor="name">
              <i className="fa-solid fa-user"></i>
            </div>
            <input type="text" id="name" placeholder="Create Name" />
          </label>
          <label htmlFor="email">
            <div className="icon-input">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <input type="email" placeholder="email" id="email" />
          </label>
          <label htmlFor="password">
            <div className="icon-input">
              <i className="fa-solid fa-lock"></i>
            </div>
            <input type="password" placeholder="Password" id="password" />
          </label>
          <div className="help">
            <a href="#">Forgot Password ?</a>
          </div>
        </div>
        <button className="btn" type="submit">
          Register
        </button>
        <h6>
          Have an account ? <Link to="/login">Login</Link>
        </h6>
      </form>
    </div>
  );
}
