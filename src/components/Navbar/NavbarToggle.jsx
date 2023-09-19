import { styled } from 'styled-components';
// icons
import { FaSortDown } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { navMenuState } from '../../atom';

export const NavToggleBtn = styled(FaSortDown)`
    display: none;
    position: absolute;
    right: 24px;
    top: 24px;
    border: none;
    background: none;
    outline: none;
    font-size: 24px;
    transform: ${(props) =>
        props.active ? 'rotate(360deg)' : 'rotate(180deg)'};
    transition: 300ms all linear;
    @media screen and (max-width: 413px) {
        display: block;
    }
`;

export default function NavbarToggle() {
    const [toggle, setToggle] = useRecoilState(navMenuState);
    const toggleNavMenu = () => {
        setToggle((prev) => !prev);
    };

    return <NavToggleBtn onClick={toggleNavMenu} active={toggle} />;
}
