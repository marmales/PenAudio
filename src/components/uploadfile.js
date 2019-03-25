import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';

import {startLoading} from "../redux/actions/fileActions";

class UploadFile extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("submitted");
        const loading = this.props.isLoading;
        console.log(loading);
        this.props.startLoading();
        //axios send post call
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="Audio" id="Audio" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return ({
        isLoading: state.isLoading
    });
};
const mapDispatchToProps = {
    startLoading
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);