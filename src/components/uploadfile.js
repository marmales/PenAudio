import React, {Component} from 'react';
class UploadFile extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <form action="https://localhost:5001/audio/upload" method="post" enctype="multipart/form-data">
                    <input type="file" name="Audio" id="Audio" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
export default UploadFile;