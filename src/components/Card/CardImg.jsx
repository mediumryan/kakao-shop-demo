import { styled } from 'styled-components';

const CardsImgContainer = styled.div`
    width: 240px;
    height: 240px;
    position: relative;
    margin: 0 auto;
    img {
        width: 100%;
        height: 100%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 160px;
        height: 220px;
    }
`;

export default function CardImg({ item }) {
    return (
        <CardsImgContainer>
            <img src={item.image_path} alt={item.name} />
        </CardsImgContainer>
    );
}
