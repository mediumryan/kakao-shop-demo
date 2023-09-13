import { styled } from 'styled-components';
import NavBarTitle from './NavBarTitle';
import NavbarMenu from './NavbarMenu';
import NavbarOthers from './NavbarOthers';
import NavbarToggle from './NavbarToggle';

const MainNavContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 var(--padding-medium-large) 0 var(--padding-large);
    border-bottom: 2px solid var(--bg-100);
    background-color: var(--bg-200);
    position: fixed;
    width: 100%;
    top: 0;
    margin-bottom: var(--margin-large);
    z-index: 5;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        border-bottom: none;
        flex-direction: column;
        padding: 0;
    }
`;

const MainNav = () => {
    return (
        <MainNavContainer>
            <NavBarTitle />
            <NavbarMenu />
            <NavbarOthers />
            <NavbarToggle />
        </MainNavContainer>
    );
};

export default MainNav;
