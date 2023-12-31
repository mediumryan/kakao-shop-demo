import { styled } from 'styled-components';

const DetailImgWrapper = styled.div`
    flex-basis: 50%;
    margin-right: 5rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    img {
        width: 100%;
        height: 100%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0;
        margin-bottom: 5rem;
    }
`;

export default function DetailImg({ item }) {
    return (
        <DetailImgWrapper>
            <img src={item.image_path} alt={item.name} />
        </DetailImgWrapper>
    );
}
