import { Routes, Route } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
    </Routes>
);

export default AppRoutes;