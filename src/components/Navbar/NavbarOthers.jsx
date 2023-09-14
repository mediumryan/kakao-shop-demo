import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// recoil
import { navMenuState } from '../../atom';
// icons
import { FaBell, FaRegUser, FaShoppingCart } from 'react-icons/fa';

const NavOthers = styled.ul`
    display: flex;
    margin-left: auto;
`;

const NavOthersItems = styled.li`
    color: var(--primary-100);
    padding: var(--padding-small) var(--padding-medium);
    font-weight: 700;
    margin-right: var(--margin-micro);
    border-bottom: 1px solid transparent;
    transition: 300ms all;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid var(--primary-100);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        display: ${(props) => (props.visible ? 'flex' : 'none')};
        margin: var(--margin-medium) auto;
    }
`;

export default function NavbarOthers() {
    const navigate = useNavigate();
    const navMenu = useRecoilValue(navMenuState);

    return (
        <NavOthers visible={navMenu}>
            <NavOthersItems>
                <FaBell />
            </NavOthersItems>
            <NavOthersItems
                onClick={() => {
                    navigate('/cart');
                }}
            >
                <FaShoppingCart />
            </NavOthersItems>
            <NavOthersItems
                onClick={() => {
                    navigate('/sign-in');
                }}
            >
                <FaRegUser />
            </NavOthersItems>
        </NavOthers>
    );
}
