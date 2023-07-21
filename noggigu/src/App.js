import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";

import MyPage from "./pages/myPage";
import WritePage from "./pages/findEquip/write";
import FindPage from "./pages/findEquip/find";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Styled />
        <Routes>
          <Route path="/" element={<WritePage />} />
          <Route path="/find" element={<FindPage />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
