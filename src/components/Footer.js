import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: none;
    position: absolute;
    bottom: 0;
    line-height: 1.5;
    padding: var(--padding-medium) calc(var(--padding-large) * 3);
    background-color: var(--color-5);
    opacity: 0.25;
    cursor: default;
    transition: var(--animation-duration) opacity;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 413px) {
        max-height: 40px;
        overflow: scroll;
        padding: var(--padding-medium) calc(var(--padding-large));
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            This application has no commercial use, and was created for the
            creator's own educational purposes. <br />
            In addition, it is stated that the Kakao Commerce Intellectual
            Property Rights Protection Center owns all trademark rights, design
            rights, and copyrights of product images.
        </FooterContainer>
    );
}
