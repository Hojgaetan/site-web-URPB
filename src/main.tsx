import { createRoot } from "react-dom/client";
import App from "./App";
import AdminLayout from "./components/admin/AdminLayout";
import "./index.css";

const path = window.location.pathname;

createRoot(document.getElementById("root")!).render(
  path === "/admin" ? <AdminLayout /> : <App />
);
