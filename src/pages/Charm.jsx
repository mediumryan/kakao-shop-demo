// recoil
import { useRecoilValue } from 'recoil';
import { charmItem } from '../atom';
// components
import { CardsContainer, Container, Title } from './Home';
import Card from '../components/Card/Card';

const Charm = ({ pageTitle }) => {
    const charm = useRecoilValue(charmItem);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CardsContainer>
                {charm.map((item, index) => {
                    return <Card item={item} key={item.id} index={index} />;
                })}
            </CardsContainer>
        </Container>
    );
};

export default Charm;
