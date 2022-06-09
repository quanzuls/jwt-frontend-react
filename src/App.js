import './App.scss';
import Nav from './components/Navigation/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import AppRoutes from './routers/AppRoutes';

function App() {

  const [account, setAccount] = useState({});
  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, [])
  return (
    <>
      <Router>
        <div className='app-header'>

          <Nav />
        </div>

        <div className='app-container'>
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div >
      </Router >

    </>
  );
}

export default App;
