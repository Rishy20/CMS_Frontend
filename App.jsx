import React, {useEffect, useState} from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Schedule from "./components/pages/Schedule";
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
import ResearchPaperPresentation from "./components/pages/ResearchPaperPresentation";
import UserProfile from "./components/pages/UserProfile";
import {useFetch} from "./components/useFetch";
import Payment from "./components/pages/Payment";
import Keynotes from "./components/pages/Keynotes";
import Contact from "./components/pages/Contact";



function App(){

    //State to maintain login status
    const [loginStatus,setLoginStatus] = useState(checkLogin());

    //Method to Logout
    function logout() {
        Cookies.remove("token");
        setLoginStatus(false)
    }
    let baseUrl = "https://api.icaf.site/api/v1/";

    // User account data states
    const [user, setUser] = useState({
        _id:"",
        role: "",
        fname: " ",
        lname: " ",
        email: "",
        contact: "",
        avatar: ""
    });

    // User data related app-wide UI states
    const [avatarSrc, setAvatarSrc] = useState("");
    const [avatarTxt, setAvatarTxt] = useState(" ");


        const role = loginStatus.userType;
        baseUrl = `https://api.icaf.site/api/v1/${role}s/`

        // Fetch and set user data using the set API URL
        useEffect(() => {
            fetch(baseUrl + loginStatus.id)
                .then(res=>res.json())
                .then(data=>{
                    setUser({role, ...data});

                    // Set user avatar src and fallback text
                    setAvatarSrc(data.avatar && `${baseUrl}image/${data.avatar}`);
                    setAvatarTxt(`${data.fname}${data.lname}`);
                })
                .catch(err=>console.log(err));
        }, []);


    //Get the fetched Data
    const  {loading,data} = useFetch("https://api.icaf.site/api/v1/info");

    return(
    <div className='App'>
        <Router>

            <Header loginStatus={loginStatus} logout={logout} userId={loginStatus.id}/>
            <Switch>
                <Route exact path="/">
                    <Home info={data}/>
                </Route>
                <Route exact path="/schedule">
                    <Schedule info={data}/>
                </Route>
                <Route exact path="/keynotes">
                    <Keynotes/>
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
                <Route exact path="/authors/presentations">
                    <ResearchPaperPresentation />
                </Route>
                <Route exact path="/workshops/register">
                    <WorkshopRegister />
                </Route>
                <Route exact path="/workshops/callforproposal">
                    <CallForProposals />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>

                <Route exact path="/author/payment">
                    <Payment total={data.length>0 && data[0].paperSubmissionAmount} user={user} setUser={setUser}/>
                </Route>

                <Route exact path="/profile">
                    {loginStatus ?
                    <div className="profile-body">
                        <UserProfile
                            baseUrl={baseUrl}
                            isUser={true}
                            id = {loginStatus.id}
                            role = {loginStatus.userType}
                            user={user}
                            avatarSrc={avatarSrc}
                            avatarTxt={avatarTxt}
                        />
                    </div>
                        :
                        <Redirect to={"/"}/>
                    }
                </Route>
            </Switch>
            <Footer/>
        </Router>
    </div>
)
}
export default App;