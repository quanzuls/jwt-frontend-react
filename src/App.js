import './App.scss';
import Nav from './components/Navigation/Nav';
import NotFound404 from './components/404NotFound/NotFound404';
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './components/Register/Register';
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/news">
            news
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="*">
            <NotFound404 />
          </Route>
        </Switch>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

      </Router >
    </div>

  );
}

export default App;
