import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import {updateLoadingStatus, updateCurrentFile} from "../redux/actions/fileActions";
import CurrentFile from "./shared/fileinfo";

class UploadFile extends Component {
    shouldComponentUpdate(nextProps, nestState) {
        return this.props.file.title !== nextProps.file.title
    }
    handleSubmit = event => {
        this.props.updateLoadingStatus(true);
        const form = new FormData(event.target);
        axios({
            method: 'post',
            url: 'http://localhost:5000/audio/upload',
            data: form,
            withCredentials: true
        })
            .then(response => {
                this.props.updateLoadingStatus(false);
                this.props.updateCurrentFile({
                    title: response.data.title
                });
            });
        event.preventDefault();
    };

    render() {
        const title = this.props.file.title;
        const isUploaded = title !== undefined && title !== '';
        return (
            <div>
                { isUploaded ? <div><CurrentFile file={this.props.file}/></div> : null}
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="Audio" id="Audio"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
UploadFile.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    file: PropTypes.object.isRequired
};
const mapStateToProps = state => {
    return ({
        isLoading: state.isLoading,
        file: state.file
    });
};
const mapDispatchToProps = {
    updateLoadingStatus,
    updateCurrentFile
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);