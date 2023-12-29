import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavTitle = styled(Link)`
    display: flex;
    align-items: center;
    color: var(--accent-100);
    text-decoration: none;
    font-size: 1.5rem;
    font-family: 'DotGothic16', sans-serif;
    letter-spacing: 4px;
    margin-right: 2rem;
    cursor: pointer;
`;

export default function NavBarTitle() {
    return (
        <NavTitle to="/">
            <h1>Ryan Shop</h1>
        </NavTitle>
    );
}
