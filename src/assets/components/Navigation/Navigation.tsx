import {useState} from "react";
import styled from "styled-components";
import menuImg from '../../img/nav/menu.svg';
import NavigationMobile from "./NavigationMobile.tsx";
import {Link} from "react-router-dom";

export interface MenuItem {
    name: string,
    path: string,
    id: number
}

export default function Navigation() {
    const [activeBlockId, setActiveBlockId] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuList = [
        {name: 'Home', path: 'home', id: 0},
        {name: 'Skills', path: 'skills', id: 1},
        {name: 'Portfolio', path: '', id: 2},
        {name: 'Contact', path: '', id: 3},
    ]

    // todo rename this
    function handleMenuSelect (id: number) {
        setActiveBlockId(id)
    }

    function handleToggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return <Nav>
        <Logo>Виктория</Logo>
        <MenuCnt>
            {menuList.map(i => i.id !== activeBlockId ?
                <MenuItem onClick={() => handleMenuSelect(i.id)} key={i.id}>
                    <LinkItem to={i.path}>{i.name}</LinkItem>
                </MenuItem> :
                <MenuItemSelected key={i.id}>
                    <LinkItem to={i.path}>{i.name}</LinkItem>
                </MenuItemSelected>)}
        </MenuCnt>
        <MenuIcon src={menuImg} alt='open menu' onClick={handleToggleMenu} />
        <NavigationMobile
            activeBlockId={activeBlockId}
            isMenuOpen={isMenuOpen}
            menuItems={menuList}
            handleMenuSelect={handleMenuSelect}
            handleCloseMenu={handleToggleMenu} />
    </Nav>
}

const Nav = styled.nav`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    height: 15vh;
    background: #222;

    @media (max-width: 645px) {
        padding: 20px;
        height: 10vh;
    }
`

const Logo = styled.h3`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;

    @media (max-width: 645px) {
        font-size: 22px;
    }
`

const MenuCnt = styled.ul`
    flex: 0 0 40%;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    
    @media (max-width: 645px) {
        display: none;
    }
`

const MenuItemSelected = styled.li`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
`

const MenuItem = styled.li`
    font-size: 18px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.50);
    cursor: pointer;
`

const MenuIcon = styled.img`
    display: none;
    width: 30px;
    height: 30px;
    
    @media (max-width: 645px) {
        display: block;
    }
`

const LinkItem = styled(Link)`
    color: inherit;
    font-size: inherit;
`

