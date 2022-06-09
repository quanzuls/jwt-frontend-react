import {
    Switch,
    Route,
} from "react-router-dom";
import Register from '../components/Register/Register';
import Users from '../components/manageUsers/Users';
import Login from "../components/Login/Login";
import NotFound404 from "../components/404NotFound/NotFound404";

const AppRoutes = (props) => {
    return (
        <>
            <Switch>
                <Route path="/project">
                    project
                </Route>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route exact path="/">
                    Home
                </Route>
                <Route exact path="*">
                    <NotFound404 />
                </Route>
            </Switch>
        </>
    )
}
export default AppRoutes;