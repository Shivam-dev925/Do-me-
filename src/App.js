import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalDataLayer } from "./Styles/Globalstyles";
import ProtectedComponents from "./PreotectedComponents";
import Signin from "./Components/Authontication/Signin";
import MainAppBody from "./Components/MainApp/MainAppBody";
import SignUP from "./Components/Authontication/SignUp";

function App() {
  return (
    <div className="App">
      <GlobalDataLayer />
      <Router basename="/">
        <Routes>
          <Route path="/" element={<ProtectedComponents />} />

          <Route path="/Sign-in" element={<Signin />} />
          <Route path="/Sign-in/Sign-Up" element={<SignUP />} />

          <Route path="/Do-me" element={<MainAppBody />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
