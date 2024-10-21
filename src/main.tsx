import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="h-full w-full bg-white p-1">
      <Header />
      <div className="flex">
        <Sidebar />
        <App />
      </div>
    </div>
  </React.StrictMode>
);
