import { FaBell, FaRegUser, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavOthers = styled.ul`
    display: flex;
    margin-left: auto;
    li {
        padding: var(--padding-small) var(--padding-medium);
        cursor: pointer;
        font-weight: var(--font-weight-bold);
        margin-right: var(--margin-micro);
        border-bottom: 1px solid transparent;
        transition: var(--animation-duration) all;
        &:hover {
            border-bottom: 1px solid var(--color-1);
        }
    }
    @media screen and (max-width: 413px) {
        display: ${(props) => (props.visible ? 'none' : 'flex')};
        margin: var(--margin-medium) auto;
    }
`;

export default function NavbarOthers() {
    const navigate = useNavigate();

    return (
        <NavOthers>
            <li>
                <FaBell />
            </li>
            <li
                onClick={() => {
                    navigate('/cart');
                }}
            >
                <FaShoppingCart />
            </li>
            <li
                onClick={() => {
                    navigate('/sign-in');
                }}
            >
                <FaRegUser />
            </li>
        </NavOthers>
    );
}
