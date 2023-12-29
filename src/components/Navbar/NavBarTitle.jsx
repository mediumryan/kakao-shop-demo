import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const NavTitle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
        color: var(--primary-100);
        font-size: var(--font-size-medium);
        font-weight: 800;
        font-family: 'DotGothic16', sans-serif;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            display: none;
        }
    }
    img {
        height: 120px;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            height: 80px;
        }
    }
`;

export default function NavBarTitle() {
    const navigate = useNavigate();

    return (
        <NavTitle
            onClick={() => {
                navigate('/');
            }}
        >
            <h1>Ryan Shop</h1>
        </NavTitle>
    );
}
