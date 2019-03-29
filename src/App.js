import React, {Component} from "react";
import {Provider as ReduxProvider} from "react-redux";
import {createStore} from "redux";

import Footer from "./components/footer";
import BodyArea from './components/bodyarea'

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
                    <BodyArea/>
                    <Footer/>
                </div>
            </ReduxProvider>
        );
    }
}
export default App;
