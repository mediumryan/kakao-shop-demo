import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import states
import { navMenuState } from '../../atom';
// import icons
import { FaRegUser, FaShoppingCart } from 'react-icons/fa';

const NavOthers = styled.ul`
    display: flex;
    margin-left: auto;
`;

const NavOthersItems = styled.li`
    padding: 0.25rem 1rem;
    margin-right: 0.25rem;
    transition: 300ms all;
    cursor: pointer;
    a {
        color: var(--black-200);
        font-size: 1.25rem;
    }
    &:hover {
        transform: scale(1.15);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: ${(props) => (props.visible ? 'flex' : 'none')};
        margin: var(--margin-medium) auto;
    }
`;

export default function NavbarOthers() {
    const navMenu = useRecoilValue(navMenuState);

    return (
        <NavOthers visible={navMenu}>
            <NavOthersItems>
                <Link to="/cart">
                    <FaShoppingCart />
                </Link>
            </NavOthersItems>
            <NavOthersItems>
                <Link to="sign-in">
                    <FaRegUser />
                </Link>
            </NavOthersItems>
        </NavOthers>
    );
}
