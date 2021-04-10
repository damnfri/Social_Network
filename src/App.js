import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/news'
                       render={() => <Profile/>}/>
                <Route path='/music' component={Profile}/>
                <Route path='/settings' component={Profile}/>

            </div>
        </div>

    );
}
export default App;
