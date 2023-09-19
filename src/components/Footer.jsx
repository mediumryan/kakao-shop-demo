import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: block;
    position: fixed;
    bottom: 0;
    line-height: 1.5;
    padding: var(--padding-double-large);
    background-color: var(--bg-200);
    opacity: 0.05;
    cursor: default;
    transition: 300ms all;
    &:hover {
        opacity: 1;
        z-index: 2;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        max-height: 80px;
        overflow-y: scroll;
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
