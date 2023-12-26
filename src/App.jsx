import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./styles/GlobalStyle";
import { TopPage } from "./pages/Top";
import { IssuePage } from "./pages/Issue";
import { PullRequestPage } from "./pages/PullRequest";
import { ProfilePage } from "./pages/Profile";
import { Header } from "./components/organism/Header";
import styled from "styled-components";

const SContent = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const SModal = styled(Modal)`
  position: absolute;
  inset: 40px;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  margin: auto;
  width: 60%;
`;

function App() {
  const modal = useSelector((state) => state.modal);

  return (
    <BrowserRouter basename="/redux-github-viewer">
      <GlobalStyle />
      <Header />
      <SContent>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/issue" element={<IssuePage />} />
          <Route path="/pull-request" element={<PullRequestPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </SContent>
      <SModal isOpen={modal.show}>{modal.content}</SModal>
    </BrowserRouter>
  );
}

export default App;
