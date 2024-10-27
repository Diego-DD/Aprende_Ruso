import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="h-full w-full bg-gradient-to-b from-white from-0% via-blue-100 via-50% to-rose-100 to-100% p-1 relative">
      <Sidebar />
      <Header />
      <App />
    </div>
  </React.StrictMode>
);
