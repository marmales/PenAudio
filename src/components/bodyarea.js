import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import axios from "axios/index";
import {connect} from 'react-redux';

import Header from './header';
import Navigation from './navigation';
import UploadFile from "./uploadfile";
import CurrentFile from "./currentfile";

import {updateCurrentFile} from './../redux/actions/fileActions';

class BodyArea extends Component {
    componentDidMount() {
        axios.get('http://localhost:5000/audio/get',
            {withCredentials: true})
            .then(response => {
                console.log(response.data);
                this.props.updateCurrentFile(response.data);
            });
    }
    render() {
        return (
            <BrowserRouter>
                <div className="body-container">
                    <Header/>
                    <Navigation/>
                    <Route exact path="/" component={UploadFile}/>
                    <Route path="/file" component={CurrentFile}/>
                </div>
            </BrowserRouter>
        );
    }
}
const mapDispatchToProps = {
    updateCurrentFile
};
export default connect(null, mapDispatchToProps)(BodyArea);