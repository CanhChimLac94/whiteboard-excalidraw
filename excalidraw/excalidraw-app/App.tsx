import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import ExcalidrawApp from "./ExcalidrawApp";
import Caleandar from "./Caleandar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExcalidrawApp />} />
        <Route path="/caleandar" element={<Caleandar />} />
      </Routes>
    </Router>
  );
}
