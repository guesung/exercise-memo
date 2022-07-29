import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteDiary from "./pages/WriteDiary";
import DiaryProvider from "./store/DiaryProvider";
import ExerciseInformation from "./pages/ExerciseInformation";
import InformationProvider from "./store/InformationProvider";

let rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <InformationProvider>
    <DiaryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/writediary" element={<WriteDiary />} />
          <Route
            path="/exerciseinformation"
            element={<ExerciseInformation />}
          />
        </Routes>
      </BrowserRouter>
    </DiaryProvider>
  </InformationProvider>
);
