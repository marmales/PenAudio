import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import UploadFile from './components/uploadfile';
import Navigation from './components/navigation';
import CurrentFile from "./components/currentfile";
import Footer from "./components/footer";


import './App.css';
class App extends Component {
  render() {
    return (
        <div className="app-container">
            <div className="header">PenAudio - Project</div>
            <BrowserRouter>
                <div className="body-container">
                    <Navigation />
                    <Route exact path="/" component={UploadFile} />
                    <Route path="/file" component={CurrentFile} />
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
  }
}
export default App;
