// import logo from './logo.svg';
import './App.css';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Teambugs from './Pages/Teambugs';
import Raisebugs from './Pages/Raisebugs';
import Profile from './Pages/Profile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Changepass from './Pages/Changepass';
function App() {

  const style = {
    textAilgn: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: '30px',
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/teambugs" component={Teambugs} />
          <Route exact path="/raisebugs" component={Raisebugs} />
          <Route exact path="/changepass" component={Changepass} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <div style={style}>
          <h3>Copyrights © TechGeeks 2022</h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
