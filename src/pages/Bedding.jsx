// recoil
import { useRecoilValue } from 'recoil';
import { beddingItem } from '../atom';
// components
import { CardsContainer, Container, Title } from './Home';
import Card from '../components/Card/Card';

const Bedding = ({ pageTitle }) => {
    const bedding = useRecoilValue(beddingItem);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CardsContainer>
                {bedding.map((item, index) => {
                    return <Card item={item} key={item.id} index={index} />;
                })}
            </CardsContainer>
        </Container>
    );
};

export default Bedding;
