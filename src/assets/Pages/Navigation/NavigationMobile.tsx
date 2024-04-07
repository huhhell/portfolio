import styled from "styled-components";
import {MenuItemInterface} from "./Navigation.tsx";
import closeImg from '../../img/nav/close.svg';
import {Link} from "react-router-dom";
import gitHubImg from '../../img/nav/github.svg'
import mailImg from '../../img/nav/mail.svg'
import tgImg from '../../img/nav/tg.svg'
import resumeImg from '../../img/nav/notion.svg'

interface Props {
    activePageId: number,
    isMenuOpen: boolean,
    menuItems: MenuItemInterface[],
    handleMenuSelect: (id: number) => void
    handleCloseMenu: () => void,
}


export default function NavigationMobile({activePageId, isMenuOpen, menuItems, handleMenuSelect, handleCloseMenu}: Props) {
    function selectPage(id: number) {
        handleMenuSelect(id);
        handleCloseMenu();
    }

    return !isMenuOpen ? <NavCntClose></NavCntClose> :
        <NavCntOpen>
            <CloseImg src={closeImg} alt='close' onClick={handleCloseMenu}/>
            <List>
                {menuItems.map(i => i.id !== activePageId ?
                    <ListItem onClick={() => selectPage(i.id)} key={i.id}>
                        <LinkItem to={i.path}>
                            {i.name}
                        </LinkItem>
                    </ListItem> :
                    <ListItemSelected onClick={() => selectPage(i.id)} key={i.id}><LinkItem
                        to={i.path}>{i.name}</LinkItem></ListItemSelected>)}
            </List>
            <SocialsCnt>
                <SocialsItem href='https://github.com/huhhell' target='_blank'>
                    <SocialsImg src={gitHubImg} alt='github'/>
                </SocialsItem>
                <SocialsItem href='mailto:huhhell@mail.ru' target='_blank'>
                    <SocialsImg src={mailImg} alt='email'/>
                </SocialsItem>
                <SocialsItem href='https://t.me/huhhell' target='_blank'>
                    <SocialsImg src={tgImg} alt='telegram'/>
                </SocialsItem>
                <SocialsItem href='' target='_blank'>
                    <SocialsImg src={resumeImg} alt='CV'/>
                </SocialsItem>
            </SocialsCnt>
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
    font-size: 30px;
    color: rgba(255, 255, 255, 0.50);
    text-align: center;
`

const ListItemSelected = styled.li `
    padding: 10px 0;
    font-size: 30px;
    color: #fff;
    text-align: center;
`

const CloseImg = styled.img `
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
`

const LinkItem = styled(Link)`
    color: inherit;
    font-size: inherit;
`

const SocialsCnt = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #444;
`

const SocialsItem = styled.a`
    
`

const SocialsImg = styled.img`
`