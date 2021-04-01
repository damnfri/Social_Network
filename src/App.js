import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";


const App = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <Dialogs dispatch={props.dispatch}
                                              dialogsData={props.state.messagePage}/>}/>
                <Route path='/profile'
                       render={() => <Profile dispatch={props.dispatch}
                                              myPosts={props.state.profilePage}/>}/>
                <Route path='/news'
                       render={() => <Profile/>}/>
                <Route path='/music' component={Profile}/>
                <Route path='/settings' component={Profile}/>

            </div>
        </div>

    );
}
export default App;
