import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.scss';
import { HeaderMain, HeaderMainInner, HeaderMainNav, HeaderMainNavListItem, HeaderMainNavList, HeaderMainNavListItemLink, LogoContainer, LogoContainerImage } from './HeaderStyle';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    register: 'Register',
    login: 'Login',
    logout: 'Logout'
}

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token') !== null){
            setIsAuth(true);
        }
        else {
            setIsAuth(false);
        }
    }, []);

    const handleLogout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('token');
        setIsAuth(false);
    }

    return (
        <HeaderMain>
            <HeaderMainInner>
                <LogoContainer href="/#">
                    <LogoContainerImage src={Logo} alt="Logo" />
                </LogoContainer>
                <HeaderMainNav>
                    <HeaderMainNavList>
                        <HeaderMainNavListItem>
                            <Link className="HeaderMain-NavListItemLink" to="/events">{links.events}</Link>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <Link className="HeaderMain-NavListItemLink" to="/speakers">{links.speakers}</Link>
                        </HeaderMainNavListItem>
                        {!isAuth ?
                            <>
                                <HeaderMainNavListItem>
                                    <Link className="HeaderMain-NavListItemLink" to="/register">{links.register}</Link>
                                </HeaderMainNavListItem>
                                <HeaderMainNavListItem>
                                    <Link className="HeaderMain-NavListItemLink" to="/login">{links.login}</Link>
                                </HeaderMainNavListItem>
                            </>
                            :
                            <>
                                <HeaderMainNavListItem>
                                    <Link className="HeaderMain-NavListItemLink" onClick={handleLogout} to="/logout">{links.logout}</Link>
                                </HeaderMainNavListItem>
                            </>
                        }
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;