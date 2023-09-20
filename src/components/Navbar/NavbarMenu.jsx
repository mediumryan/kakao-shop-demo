import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// recoil
import { navMenuState } from '../../atom';

const NavMenu = styled.ul`
    display: flex;
    margin: 0 var(--margin-medium);
    transform-origin: center top;
    transition: 300ms all;
    color: var(--primary-100);
    z-index: 2;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: ${(props) => (props.active ? 'flex' : 'none')};
        flex-direction: column;
        margin: 0;
        padding-bottom: var(--padding-large);
        width: 100%;
    }
`;

const NavMenuItems = styled.li`
    padding: var(--padding-small) var(--padding-medium);
    font-weight: 800;
    margin-right: var(--margin-micro);
    border-bottom: 1px solid transparent;
    transition: 300ms all;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid var(--primary-100);
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
    const navigate = useNavigate();
    const navMenu = useRecoilValue(navMenuState);

    return (
        <NavMenu active={navMenu}>
            <NavMenuItems
                onClick={() => {
                    navigate('/');
                }}
            >
                ホーム
            </NavMenuItems>
            <NavMenuItems
                onClick={() => {
                    navigate('/charm');
                }}
            >
                チャーム
            </NavMenuItems>
            <NavMenuItems
                onClick={() => {
                    navigate('/umbrella');
                }}
            >
                傘
            </NavMenuItems>
            <NavMenuItems
                onClick={() => {
                    navigate('/stationery');
                }}
            >
                文具
            </NavMenuItems>
            <NavMenuItems
                onClick={() => {
                    navigate('/bedding');
                }}
            >
                寝具
            </NavMenuItems>
        </NavMenu>
    );
}
