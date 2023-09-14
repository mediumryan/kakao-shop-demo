// recoil
import { useRecoilValue } from 'recoil';
import { stationeryItem } from '../atom';
// components
import { CardsContainer, Container, Title } from './Home';
import Card from '../components/Card/Card';

const Stationery = ({ pageTitle }) => {
    const stationery = useRecoilValue(stationeryItem);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CardsContainer>
                {stationery.map((item, index) => {
                    return <Card item={item} key={item.id} index={index} />;
                })}
            </CardsContainer>
        </Container>
    );
};

export default Stationery;
