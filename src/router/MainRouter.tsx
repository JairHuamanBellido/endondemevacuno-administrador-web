import { Routes, Route } from "react-router-dom";
import LoginPage from "../module/Login/Application/LoginPage";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
