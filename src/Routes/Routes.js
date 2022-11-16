import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main";
import Appointment from "../pages/Appointment/Appointment";
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
            <Route path='/appointment' element={<PrivateRoute><Appointment /></PrivateRoute>} />
        </Route>
        <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute>}>

        </Route>
    </Route>
))