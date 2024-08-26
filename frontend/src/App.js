import './App.css';
import {Route, Routes} from "react-router-dom";
import BoardList from "./routes/BoardList";
import BoardDetail from "./routes/BoardDetail";
import BoardWrite from "./routes/BoardWrite";
import BoardUpdate from "./routes/BoardUpdate";
import Home from "./routes/Home";
import React from "react";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/board" element={<BoardList/>} />
        <Route path="/board/:idx" element={<BoardDetail/>} />
        <Route path="/write" element={<BoardWrite/>} />
        <Route path="/update/:idx" element={<BoardUpdate/>} />
    </Routes>
  );
};

export default App;
