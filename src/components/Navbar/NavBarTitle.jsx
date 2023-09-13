import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import mainLogo from './../../images/main-logo.png';

const NavTitle = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
        color: #645cbb;
        font-size: var(--font-size-medium);
        @media screen and (max-width: 413px) {
            display: none;
        }
    }
    img {
        height: 120px;
        @media screen and (max-width: 413px) {
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
            <img src={mainLogo} alt="カカオのロゴイメージです。" />
        </NavTitle>
    );
}
