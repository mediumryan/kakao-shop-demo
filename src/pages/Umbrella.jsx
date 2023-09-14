// recoil
import { useRecoilValue } from 'recoil';
import { umbrellaItem } from '../atom';
// components
import { CardsContainer, Container, Title } from './Home';
import Card from '../components/Card/Card';

const Umbrella = ({ pageTitle }) => {
    const umbrella = useRecoilValue(umbrellaItem);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CardsContainer>
                {umbrella.map((item, index) => {
                    return <Card item={item} key={item.id} index={index} />;
                })}
            </CardsContainer>
        </Container>
    );
};

export default Umbrella;
