import React, {Component} from 'react';
class UploadFile extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <input type="file"/>
            </div>
        );
    }
}
export default UploadFile;