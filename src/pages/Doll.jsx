// recoil
import { useRecoilValue } from 'recoil';
import { dollItem } from '../atom';
// components
import { CardsContainer, Container, Title } from './Home';
import Card from '../components/Card/Card';

const Doll = ({ pageTitle }) => {
    const doll = useRecoilValue(dollItem);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CardsContainer>
                {doll.map((item, index) => {
                    return <Card item={item} key={item.id} index={index} />;
                })}
            </CardsContainer>
        </Container>
    );
};

export default Doll;
