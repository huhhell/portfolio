import {useState} from "react";
import styled from "styled-components";
import menuImg from '../../img/nav/menu.svg';
import NavigationMobile from "./NavigationMobile.tsx";

export interface MenuItem {
    name: string,
    id: number
}

export default function Navigation() {
    const [activeBlockId, setActiveBlockId] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuList = [
        {name: 'Home', id: 0},
        {name: 'Skills', id: 1},
        {name: 'Portfolio', id: 2},
        {name: 'Contact', id: 3},
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
                <MenuItem onClick={() => handleMenuSelect(i.id)} key={i.id}>{i.name}</MenuItem> :
                <MenuItemSelected key={i.id}>{i.name}</MenuItemSelected>)}
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

    @media (max-width: 645px) {
        padding: 20px;
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

