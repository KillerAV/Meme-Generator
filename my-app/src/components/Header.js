import React from 'react'
import trollFace from './images/troll_face.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={trollFace} alt="Troll Face" />
                <p display="inline"> MEME GENERATOR </p>
            </div>
        );
    }
}

export default Header;