import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { TopPage } from "./pages/TopPage";
import { IssuePage } from "./pages/IssuePage";
import { PullRequestPage } from "./pages/PullRequestPage";
import { Header } from "./components/organisms/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ProfilePage } from "./pages/ProfilePage";

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
