import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.scss';
import { HeaderMain, HeaderMainInner, HeaderMainNav, HeaderMainNavListItem, HeaderMainNavList, HeaderMainNavListItemLink, LogoContainer, LogoContainerImage } from './HeaderStyle';

const links = {
    speakers: 'Speakers',
    events: 'Events'
}

const Header = () => {
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
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;