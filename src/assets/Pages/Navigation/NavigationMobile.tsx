import styled from "styled-components";
import {MenuItemInterface} from "./Navigation.tsx";
import closeImg from '../../img/nav/close.svg';
import {Link} from "react-router-dom";

// import {useEffect, useState} from "react";

interface Props {
    activePageId: number,
    isMenuOpen: boolean,
    menuItems: MenuItemInterface[],
    handleMenuSelect: (id: number) => void
    handleCloseMenu: () => void
}


// todo mb add here some socials
// todo add routing
export default function NavigationMobile({activePageId, isMenuOpen, menuItems, handleMenuSelect, handleCloseMenu}: Props) {

    return !isMenuOpen ? <NavCntClose></NavCntClose> :
        <NavCntOpen>
            <CloseImg src={closeImg} alt='close' onClick={handleCloseMenu}/>
            <List>
                {menuItems.map(i => i.id !== activePageId ?
                    <ListItem onClick={() => handleMenuSelect(i.id)} key={i.id}>
                        <LinkItem to={i.path}>
                            {i.name}
                        </LinkItem>
                    </ListItem> :
                    <ListItemSelected key={i.id}><LinkItem to={i.path}>{i.name}</LinkItem></ListItemSelected>)}
            </List>
        </NavCntOpen>
}

const NavCntOpen = styled.div `
    display: block;
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #222;
    padding: 30px;
    
    @media (max-width: 645px) {
        display: block;
    } 
`

const NavCntClose = styled.div `
    display: none;
`

const List = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ListItem = styled.li `
    padding: 10px 0;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
`

const ListItemSelected = styled.li `
    padding: 10px 0;
    font-size: 24px;
    color: #fff;
    text-align: center;
`

const CloseImg = styled.img `
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
`

const LinkItem = styled(Link)`
    color: inherit;
    font-size: inherit;
`