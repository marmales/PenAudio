import React from 'react';
import PropTypes from 'prop-types';

const  FileInfo = (props) => {
    return (
        <div><h1>{props.file.title}</h1></div>
    );
};

FileInfo.propTypes = {
    file: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
};
export default FileInfo;