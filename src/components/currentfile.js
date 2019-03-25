import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CurrentFile extends Component {
    render() {
        return (
            <div>Uploaded file: {String(this.props.isLoading)}</div>
        );
    }
}
CurrentFile.propTypes = {
    isLoading: PropTypes.bool.isRequired
};
function mapStateToProps(state){
    return {
        isLoading: state.isLoading
    }
}
export default connect(mapStateToProps)(CurrentFile);