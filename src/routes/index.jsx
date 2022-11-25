import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, LoginView, SingUpView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/singup" element={<SingUpView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
