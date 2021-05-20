import React from 'react';
import './App.css'

import Home from "./components/pages/Home";
import UserLogin from "./components/pages/UserLogin";
import FileUpload from "./components/FileUpload";

function App(){
return(
    <div className='App'>
            <Home/>
            {/*<UserLogin/>*/}
            {/*<FileUpload accept="application/pdf" multiple/>*/}
    </div>
)
}
export default App;