import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import { TopPage } from "./pages/TopPage";
import { IssuePage } from "./pages/IssuePage";
import { PullRequestPage } from "./pages/PullRequestPage";
import { Header } from "./components/organisms/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/issue" element={<IssuePage />} />
        <Route path="/pull-request" element={<PullRequestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
