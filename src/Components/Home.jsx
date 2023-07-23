import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h3>HALO..</h3>
      <h2>Welcome to my Site</h2>
      <button onClick={() => navigate("/login")} className="start">
        Get Started
      </button>
    </div>
  );
}
