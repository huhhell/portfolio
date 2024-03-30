import styled from "styled-components";
import {MenuItem} from "./Navigation.tsx";
import closeImg from '../../img/nav/close.svg';

interface Props {
    activeBlockId: number,
    isMenuOpen: boolean,
    menuItems: MenuItem[],
    handleMenuSelect: (id: number) => void
    handleCloseMenu: () => void
}

export default function NavigationMobile({activeBlockId, isMenuOpen, menuItems, handleMenuSelect, handleCloseMenu}: Props) {

    return !isMenuOpen ? <NavCntClose></NavCntClose> :
        <NavCntOpen>
            <CloseImg src={closeImg} alt='close' onClick={handleCloseMenu}/>
            <List>
                {menuItems.map(i => i.id !== activeBlockId ?
                    <ListItem onClick={() => handleMenuSelect(i.id)} key={i.id}>{i.name}</ListItem> :
                    <ListItemSelected key={i.id}>{i.name}</ListItemSelected>)}
            </List>
        </NavCntOpen>
}

const NavCntOpen = styled.div `
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #222;
    
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
`

const ListItem = styled.li `
    padding: 10px;
    border-bottom: 1px solid #efeeee;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.50);
`

const ListItemSelected = styled.li `
    padding: 10px;
    border-bottom: 1px solid #efeeee;
    font-size: 18px;
    color: #fff;
`

const CloseImg = styled.img `
    width: 30px;
    height: 30px;
`