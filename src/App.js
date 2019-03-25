import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";

import UploadFile from './components/uploadfile';
import Navigation from './components/navigation';
import CurrentFile from './components/currentfile';
import Footer from "./components/footer";

import  fileUploadStatus from './redux/reducers/fileuploadstatus';
import './App.css';
class App extends Component {
  render() {
      const initialState = {
          isLoading: false
      };
      const store = createStore(fileUploadStatus, initialState);
    return (
        <ReduxProvider store={store}>
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
        </ReduxProvider>
    );
  }
}
export default App;
