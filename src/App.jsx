import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import FormLogin from "./Components/FormLogin";
import FormRegister from "./Components/FormRegister";
import Help from "./Components/Help";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/form-loginv2/" element={<Home />} />
          <Route path="/form-loginv2/login" element={<FormLogin />} />
          <Route path="/form-loginv2/register" element={<FormRegister />} />
          <Route path="/form-loginv2/help" element={<Help />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
