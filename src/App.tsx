import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Register from "./pages/register";
import Recover  from "./pages/recover";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover/>} />
      </Routes>
    </Router>
  );
};

export default App;
