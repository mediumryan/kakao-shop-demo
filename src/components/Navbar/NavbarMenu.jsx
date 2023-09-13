import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const NavMenu = styled.ul`
    display: flex;
    margin: 0 var(--margin-medium);
    transition: 500ms all;
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
        @media screen and (max-width: 413px) {
            margin: 0;
            width: 100%;
            padding: 0;
            padding-bottom: var(--padding-micro);
            margin-bottom: var(--margin-medium);
            text-align: center;
        }
    }
    @media screen and (max-width: 413px) {
        display: ${(props) => (props.visible ? 'none' : 'flex')};
        flex-direction: column;
        margin: 0;
        width: 100%;
    }
`;

export default function NavbarMenu() {
    const navigate = useNavigate();

    return (
        <NavMenu>
            <li
                onClick={() => {
                    navigate('/');
                }}
            >
                ホーム
            </li>
            <li
                onClick={() => {
                    navigate('/doll');
                }}
            >
                ぬいぐるみ
            </li>
            <li
                onClick={() => {
                    navigate('/umbrella');
                }}
            >
                傘
            </li>
            <li
                onClick={() => {
                    navigate('/stationery');
                }}
            >
                文具
            </li>
            <li
                onClick={() => {
                    navigate('/bedding');
                }}
            >
                寝具
            </li>
        </NavMenu>
    );
}
