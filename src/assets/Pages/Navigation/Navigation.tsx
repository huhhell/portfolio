import styled from "styled-components";
import menuImg from '../../img/nav/menu.svg';
import NavigationMobile from "./NavigationMobile.tsx";
import {Link} from "react-router-dom";
import {useState} from "react";

export interface MenuItemInterface {
    name: string,
    path: string,
    id: number,
}

interface Props {
    isMenuOpen: boolean,
    toggleMenu: () => void
}

export default function Navigation({isMenuOpen, toggleMenu}: Props) {

    const [activePageId, setActivePageId] = useState(() => {
        const savedActivePageId = localStorage.getItem('activePageId');
        return savedActivePageId !== null ? parseInt(savedActivePageId) : 0;
    });

    function changeActivePage(id: number) {
        setActivePageId(id)
        localStorage.setItem('activePageId', id.toString());
    }

    const pagesList: MenuItemInterface[] = [
        {name: 'Home', path: '', id: 0},
        {name: 'Skills', path: 'skills', id: 1},
        {name: 'Portfolio', path: 'portfolio', id: 2},
        {name: 'Contact', path: 'contact', id: 3},
    ]


    // todo rename this
    function handleMenuSelect (id: number) {
        changeActivePage(id)
    }



    return <Nav>
        <Logo>Виктория</Logo>
        <MenuCnt>
            {pagesList.map(i => i.id !== activePageId ?
                <MenuItem onClick={() => handleMenuSelect(i.id)} key={i.id}>
                    <LinkItem to={i.path}>{i.name}</LinkItem>
                </MenuItem> :
                <MenuItemSelected key={i.id}>
                    <LinkItem to={i.path}>{i.name}</LinkItem>
                </MenuItemSelected>)}
        </MenuCnt>
        <MenuIcon src={menuImg} alt='open menu' onClick={toggleMenu} />
        <NavigationMobile
            activePageId={activePageId}
            isMenuOpen={isMenuOpen}
            menuItems={pagesList}
            handleMenuSelect={handleMenuSelect}
            handleCloseMenu={toggleMenu}
        />
    </Nav>
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    background: #222;
    border-bottom: 3px solid #444;

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

