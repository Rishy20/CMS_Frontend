import React, {useState} from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule/Schedule";
import Authors from "./components/pages/Authors";
import Workshops from "./components/pages/Workshops";
import Downloads from "./components/pages/Downloads";
import ResearcherRegister from "./components/pages/ResearcherRegister";
import AttendeeRegister from "./components/pages/AttendeeRegister";
import CallForPapers from "./components/pages/CallForPapers";
import WorkshopRegister from "./components/pages/WorkshopRegister";
import CallForProposals from "./components/pages/CallForProposals";
import Login from "./components/pages/Login";
import checkLogin from "./components/CheckLogin";
import Header from "./components/Header";
import Cookies from "js-cookie";


function App(){
    //State to maintain login status
    const [loginStatus,setLoginStatus] = useState(checkLogin());

    //Method to Logout
    function logout() {
        Cookies.remove("token");
        setLoginStatus(false)
    }
return(
    <div className='App'>
        <Router>
            <Header loginStatus={loginStatus} logout={logout}/>
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
                <Route exact path="/login">
                    {!loginStatus?<Login setLogin={(data)=>{setLoginStatus(data)}}/>:<Redirect to={"/"}/>}
                </Route>
                <Route exact path="/register">
                    <AttendeeRegister/>
                </Route>
                <Route exact path="/authors/callforpaper">
                    <CallForPapers />
                </Route>
                <Route exact path="/authors/register">
                    <ResearcherRegister />
                </Route>
                <Route exact path="/workshops/register">
                    <WorkshopRegister />
                </Route>
                <Route exact path="/workshops/callforproposal">
                    <CallForProposals />
                </Route>
            </Switch>
            <Footer/>
        </Router>


    </div>
)
}
export default App;