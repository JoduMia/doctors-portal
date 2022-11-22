import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Main from "../layouts/Main";
import Appointment from "../pages/Appointment/Appointment";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/appointment' element={<Appointment />} />
        </Route>

        <Route path="/dashboard" element={ <PrivateRoute><DashboardLayout /></PrivateRoute>}>
            <Route index element={ <Dashboard />} />
        </Route>
    </Route>
))