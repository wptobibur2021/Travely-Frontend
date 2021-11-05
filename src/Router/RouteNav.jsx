import React from "react";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login"
import Registration from "../Pages/Registration/Registration";
import Tours from "../Pages/Tours/Tours";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/notFound/NotFound";
import Details from "../Pages/Tours/Details";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyTour from "../Pages/Tours/MyTour";
import Dashboard from "../Components/Dashboard/Dashboard";
import Add from "../Components/Dashboard/Tours/Add";
const RouteNav = () =>{
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/tours">
                        <Tours></Tours>
                    </Route>
                    <Route exact path='/login'>
                        <Login></Login>
                    </Route>
                    <Route exact path='/registration'>
                        <Registration></Registration>
                    </Route>
                    <Route exact path="/contact-us">
                        <Contact></Contact>
                    </Route>
                    // Private Route
                    <PrivateRoute exact path="/tours/details/:id">
                        <Details></Details>
                    </PrivateRoute>
                    <PrivateRoute exact path="/my-tours">
                        <MyTour></MyTour>
                    </PrivateRoute>
                    <PrivateRoute exact path="/dashboard">
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                    <PrivateRoute exact path="/dashboard/add-tour">
                        <Add></Add>
                    </PrivateRoute>
                    <Route exact path='*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        )
}
export default RouteNav;