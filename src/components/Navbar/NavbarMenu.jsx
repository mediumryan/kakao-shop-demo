import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state
import { navMenuState } from '../../atom';

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    transition: 300ms all;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: ${(props) => (props.active ? 'flex' : 'none')};
        flex-direction: column;
        margin: 0;
        padding-bottom: var(--padding-large);
        width: 100%;
    }
`;

const NavMenuItems = styled.li`
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    cursor: pointer;
    a {
        text-decoration: none;
        color: var(--black-200);
        padding-bottom: 0.25rem;
        border-bottom: 2.5px solid transparent;
        transition: 300ms all;
        font-weight: 600;
        &:hover {
            color: var(--black-100);
            border-color: var(--black-100);
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        text-align: center;
        width: 25%;
        padding: 0;
        margin: 0 auto;
        padding-bottom: var(--padding-medium);
        margin-bottom: var(--margin-medium);
    }
`;

export default function NavbarMenu() {
    const navMenu = useRecoilValue(navMenuState);

    return (
        <NavMenu active={navMenu}>
            <NavMenuItems>
                <Link to="/">ホーム</Link>
            </NavMenuItems>
            <NavMenuItems>
                <Link to="/charm">チャーム</Link>
            </NavMenuItems>
            <NavMenuItems>
                <Link to="/umbrella">傘</Link>
            </NavMenuItems>
            <NavMenuItems>
                <Link to="/stationery">文具</Link>
            </NavMenuItems>
            <NavMenuItems>
                <Link to="/bedding">寝具</Link>
            </NavMenuItems>
        </NavMenu>
    );
}
