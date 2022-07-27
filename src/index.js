import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteDiary from "./pages/WriteDiary";
import DiaryProvider from "./store/DiaryProvider";

let rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <DiaryProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/writediary" element={<WriteDiary />} />
      </Routes>
    </BrowserRouter>
  </DiaryProvider>
);
