import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      id="general"
      className="bg-gradient-to-b from-white from-0% via-blue-100 via-50% to-rose-100 to-100% w-full h-full flex flex-row p-1 gap-2"
    >
      <Sidebar />
      <div id="sidebar_spacer" className="w-20"></div>
      <div id="header&app" className="w-full h-full flex flex-col gap-1">
        <Header />
        <App />
      </div>
    </div>
  </React.StrictMode>
);
