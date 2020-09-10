import React from 'react'
import { Router, Switch } from 'react-router'
import AppRoute from './AppRoute'
import Home from '../LandingPage/Home'
import MainLayout from '../Layouts/MainLayout'
import Login from '../Login/Login'
import DashboardLayout from '../Layouts/DashboardLayout'
import LoginLayout from '../Layouts/LoginLayout'
import Dashboard from '../Dashboard/Dashboard'
import { createBrowserHistory } from "history";



const history = createBrowserHistory()

// this is the old routes 
//export default () => {
//     return (
//         <Router history={history}>
//             <Switch>
//                 <Route path="/" component={Home} />
//                 <Route path="/login" component={Login} />
//                 <Route path="/dashboard" component={Dashboard} />
//             </Switch>
//         </Router>
//     )
// }

// the new routes now 

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <AppRoute path="/"  exact component={Home} layout={MainLayout}/>
                <AppRoute path="/login"  exact component={Login} layout={LoginLayout}/>
                <AppRoute path="/dashboard"  exact component={Dashboard} layout={DashboardLayout} />
            </Switch>
        </Router>
    )
}