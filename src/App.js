import React from 'react';
import "./components/FontAwesomeIcons"
import './App.css';
import NavBar from './components/NavBar';
import Tournaments from './Tournamnets/Tournaments';
import { BrowserRouter as Router, Route , Switch, NavLink, Link, withRouter} from 'react-router-dom'
import HowItWorks from './components/HowItWorks';
import Lobby from './components/Lobby';
import FreeFire from './components/FreeFire';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import TournamnetDetail from './Tournamnets/TournamnetDetail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Reset from './components/Reset';

function App() {
  AOS.init({
    duration : 2000
  })
  return (
    
    <Router>
      <div className="app">
      
        <ScrollToTop/>
        <Switch>
            <Route exact path="/Login" component={Login}>
                <NavBar/>
                <Login />
            </Route>
            <Route exact path="/FreeFire" component={FreeFire}>
                <NavBar/>
                <FreeFire />
            </Route>
            <Route exact path="/signUp" component={SignUp}>
                <NavBar/>
                <SignUp />
            </Route>
            <Route exact path="/reset" component={Reset}>
                <NavBar/>
                <Reset />
            </Route>
            <Route exact path="/tournaments/:tournamentId" component={TournamnetDetail}>
                <NavBar/>
                <TournamnetDetail />
            </Route>
            <Route exact path="/tournaments" component={Tournaments}>
                <NavBar/>
                <Tournaments />
            </Route>
            <Route exact path="/">
                <NavBar/>
                <Lobby/>
            </Route>
        </Switch>
      </div>
    </Router>

    
    
  );
}

export default App;
