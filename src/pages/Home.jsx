import { styled } from 'styled-components';
// recoil
import { useRecoilValue } from 'recoil';
import { allItem } from './../atom';
// components
import Card from '../components/Card/Card';

export const Container = styled.div`
    position: relative;
    padding: calc(var(--padding-large) * 2);
    margin-top: calc(var(--margin-very-large) * 2);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-top: calc(var(--margin-very-large) * 3);
    }
`;

export const Title = styled.h1`
    color: var(--accent-200);
    font-size: var(--font-size-medium-large);
    font-weight: 800;
    margin-bottom: var(--margin-medium-large);
    letter-spacing: 4px;
    font-style: italic;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-top: calc(var(--margin-large) * 2);
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: var(--margin-medium-large);
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Home = ({ pageTitle }) => {
    const all = useRecoilValue(allItem);

    return (
        <Container>
            <Title>{pageTitle}</Title>
            <CardsContainer>
                {all.map((item, index) => {
                    return <Card item={item} key={item.id} index={index} />;
                })}
            </CardsContainer>
        </Container>
    );
};

export default Home;
