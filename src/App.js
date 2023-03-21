import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
