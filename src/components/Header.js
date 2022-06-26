import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function Header() {
    const [showheader, setshowheader] = useState(false)
    const path = window.location.pathname
    return (
        <div className='header'>

            {showheader ?
                (<RiCloseFill
                    onClick={() => { setshowheader(!showheader) }}
                    className="menu-icon position-fixed top-0 end-0" />
                ) : (
                    <RiMenu3Fill
                        className="menu-icon position-fixed top-0 end-0" onClick={() => { setshowheader(!showheader) }} />
                )}


            <ul className={`${showheader ? 'show-header' : 'hide-header'} n-box1`}>
                <li className={`${path == '/' && 'active'}`}><Link to='/'>Home</Link></li>
                <li className={`${path == '/Projects' && 'active'}`}><Link to='/Projects'>Projects</Link></li>
                <li className={`${path == '/Courses' && 'active'}`}><Link to='/Courser'>Courses</Link></li>
                <li className={`${path == '/Contacts' && 'active'}`}><Link to='/Contacts'>Contacts</Link></li>
            </ul>
        </div>
    );
}

export default Header;