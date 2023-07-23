import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import FormLogin from "./Components/FormLogin";
import FormRegister from "./Components/FormRegister";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<FormLogin />} />
          <Route path="/" element={<FormRegister />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
