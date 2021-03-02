import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.state.messagePage.dialogsData}/>}/>
                    <Route path='/profile'
                           render={() => <Profile addPost={props.addPost}
                                                  addText={props.addText}
                                                  myPosts={props.state.profilePage}/>}/>
                    <Route path='/news'
                           render={() => <Profile addText ={props.addText}
                                                  addPost={props.addPost}
                                                  myPosts={props.state.profilePage}/>}/>
                    <Route path='/music' component={Profile}/>
                    <Route path='/settings' component={Profile}/>

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
