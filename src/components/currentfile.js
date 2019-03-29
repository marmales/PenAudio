import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FileInfo from "./shared/fileinfo";

class CurrentFile extends Component {
    render() {
        return (
            <div>
                <FileInfo file={this.props.file}/>
                <p>{this.props.file.isUploaded ? "Is uploaded" : "Not uploaded"}</p>
            </div>
        );
    }
}
CurrentFile.propTypes = {
    file: PropTypes.object.isRequired
};
const fileUploaded = file => {
    return file.title !== undefined && file.title !== '';
};
const buildFileInfo = file => {
    return {
        ...file,
        isUploaded: fileUploaded(file),
        title: fileUploaded(file) ? file.title : 'Not uploaded file'
    }
};
function mapStateToProps(state){
    return {
        file: buildFileInfo(state.file)
    }
}
export default connect(mapStateToProps)(CurrentFile);