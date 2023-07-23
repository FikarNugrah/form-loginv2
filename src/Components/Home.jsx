import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h3>HALLO..</h3>
      <h2>Welcome to my Site</h2>
      <button onClick={() => navigate("/form-loginv2/login")} className="start">
        Get Started
      </button>
    </div>
  );
}
