import './App.css';
import Mailroom from './views/Mailroom/Mailroom';
import Register from './views/Register/Register';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './views/Login/Login';
import FlashMessage from './components/FlashMessage/FlashMessage';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

function App() {
  // Check for auth in database
  const isAuth = localStorage.getItem('isAuthenticated');

  return (
    <div className='App'>
      <FlashMessage/>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path='/mailroom'>
          {/* <ProtectedRoute exact path="/" component={Mailroom} redirectLink="/"/> */}

            {/* <Mailroom/> */}
            {isAuth ? <Mailroom/> : <Redirect to="/"/>}
          </Route>
          <Route path='/'>
            {/* <ProtectedRoute exact path="/" component={Login} redirectLink="/mailroom"/> */}
            {/* <Login/> */}
            {!isAuth ? <Login/> : <Redirect to="/mailroom"/> }
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;