import { styled } from 'styled-components';
// components
import NavBarTitle from './NavBarTitle';
import NavbarMenu from './NavbarMenu';
import NavbarOthers from './NavbarOthers';
import NavbarToggle from './NavbarToggle';

const MainNavContainer = styled.nav`
    display: flex;
    align-items: center;
    border-bottom: 2px solid var(--white-200);
    background-color: var(--white-100);
    position: fixed;
    width: 100%;
    top: 0;
    padding: 1.5rem 2rem;
    z-index: 2;
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
