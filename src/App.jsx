import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import { TopPage } from "./pages/TopPage";
import { IssuePage } from "./pages/IssuePage";
import { PullRequestPage } from "./pages/PullRequestPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Header } from "./components/organism/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/issue" element={<IssuePage />} />
        <Route path="/pull-request" element={<PullRequestPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
