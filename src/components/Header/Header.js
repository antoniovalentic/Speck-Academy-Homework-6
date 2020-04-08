import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.css';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    clock: 'Clock'
}

const Header = () => {
    return (
        <header className="HeaderMain">
            <div className="HeaderMain-Inner">
                <Link to="/" className="logo-container">
                    <Logo />
                </Link>
                <nav className="HeaderMain__nav">
                    <ul className="HeaderMain__nav-list">
                        <li className="HeaderMain__nav-list-item">
                            <Link className="HeaderMain__nav-list-item-link" to="/events">{links.events}</Link>
                        </li>
                        <li className="HeaderMain__nav-list-item">
                            <Link className="HeaderMain__nav-list-item-link" to="/speakers">{links.speakers}</Link>
                        </li>
                        <li className="HeaderMain__nav-list-item">
                            <Link className="HeaderMain__nav-list-item-link" to="/clock">{links.clock}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;