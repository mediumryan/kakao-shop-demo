import { styled } from 'styled-components';
// recoil
import { useRecoilValue } from 'recoil';
import { allItem } from './../atom';
// components
import Card from '../components/Card/Card';

export const Container = styled.div`
    position: relative;
    margin-top: 5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: var(--accent-200);
    font-size: 1.75rem;
    font-family: 'DotGothic16', sans-serif;
    margin: 2.5rem 0 4rem 0;
    letter-spacing: 2px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        line-height: 1.5;
        margin-top: 5rem;
        text-align: center;
        font-size: 1.5rem;
        padding: 0 2.5rem;
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
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
