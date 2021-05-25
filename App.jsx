import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule/Schedule";
import Authors from "./components/pages/Authors";
import Workshops from "./components/pages/Workshops";
import Downloads from "./components/pages/Downloads";



function App(){
return(
    <div className='App'>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/schedule">
                    <Schedule/>
                </Route>
                <Route exact path="/keynotes">
                    <Home/>
                </Route>
                <Route exact path="/authors">
                    <Authors/>
                </Route>
                <Route exact path="/workshops">
                    <Workshops/>
                </Route>
                <Route exact path="/downloads">
                    <Downloads/>
                </Route>
                <Footer/>
            </Switch>
        </Router>


    </div>
)
}
export default App;