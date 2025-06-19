import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import EmailConfirmation from "../pages/EmailConfirmation";
import RegistrationComplete from "../pages/RegistrationComplete";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/otp" element={<EmailConfirmation />} />
        <Route path="/registration-completed" element={<RegistrationComplete/>} />
    </Routes>
);

export default AppRoutes;