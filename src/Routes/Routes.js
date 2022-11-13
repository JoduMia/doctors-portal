import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layouts/Main";
import Appointment from "../pages/Appointment/Appointment";
import Home from "../pages/Home";
import Login from "../pages/Login";


export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Main /> }>
        <Route index element={ <Home /> } />
        <Route path='/' element={ <Login /> } />
        <Route path='/appointment' element={ <Appointment /> } />
    </Route>
))