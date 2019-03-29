import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Link to="/"><div className="header">PenAudio - Project</div></Link>
    );
};
export default Header;