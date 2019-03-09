import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
      <div className="navigation">
          <Link to="/file">File</Link>
          <Link to="/frequency">Frequency</Link>
          <Link to="/transpose">Transpose</Link>
          <Link to="/speed">Speed</Link>
          <Link to="/volume">Volume</Link>
      </div>
    );
}
export default Navigation;