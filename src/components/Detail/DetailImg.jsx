import { styled } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DetailImgWrapper = styled(Carousel)`
    flex-basis: 50%;
    margin-right: 5rem;
    border: 2px solid var(--white-200);
    border-radius: 10px;
    padding: 2.5rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0;
        margin-bottom: 5rem;
    }
`;

const DetailSliderItem = styled.div`
    width: 100%;
    height: 100%;
    img {
        max-width: 66%;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            max-width: 95%;
        }
    }
`;

export default function DetailImg({ item }) {
    return (
        <DetailImgWrapper>
            {[0, 1, 2, 3].map((_, SliderIndex) => {
                return (
                    <DetailSliderItem key={SliderIndex}>
                        <img src={item.image_path} alt={item.name} />
                    </DetailSliderItem>
                );
            })}
        </DetailImgWrapper>
    );
}
