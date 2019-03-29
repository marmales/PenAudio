import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import {createStore} from "redux";
import cookie from 'react-cookie';

import UploadFile from './components/uploadfile';
import Navigation from './components/navigation';
import CurrentFile from './components/currentfile';
import Header from './components/header';
import Footer from "./components/footer";

import fileUploadStatus from './redux/reducers/fileuploadstatus';
import './App.css';

class App extends Component {
    render() {
        const initialState = {
            isLoading: false,
            file: {}
        };
        const store = createStore(
            fileUploadStatus,
            initialState,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        return (
            <ReduxProvider store={store}>
                    <div className="app-container">
                        <BrowserRouter>
                            <div className="body-container">
                                <Header />
                                <Navigation/>
                                <Route exact path="/" component={UploadFile}/>
                                <Route path="/file" component={CurrentFile}/>
                            </div>
                        </BrowserRouter>
                        <Footer/>
                    </div>
            </ReduxProvider>
        );
    }
}

export default App;
