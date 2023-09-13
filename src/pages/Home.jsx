import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
// components
import ItemCards from '../components/ItemCards';
// styled-components
import { SectionCardsContainer } from '../styled/common-section-style/SectionCards';
// recoil
import { allItem } from './../atom';

export const SectionContainer = styled.div`
    position: relative;
    padding: calc(var(--padding-large) * 2);
    padding-top: var(--padding-medium-large);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SectionTitle = styled.h1`
    font-size: var(--font-size-medium-large);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--margin-medium-large);
    letter-spacing: 4px;
    font-style: italic;
    @media screen and (max-width: 413px) {
        margin-top: calc(var(--margin-large) * 2);
    }
`;

const Home = () => {
    const all = useRecoilValue(allItem);

    return (
        <SectionContainer>
            <SectionTitle>page title</SectionTitle>
            <SectionCardsContainer>
                {all.map((HomeItem, homeIndex) => {
                    return (
                        <ItemCards
                            item={HomeItem}
                            key={HomeItem.id}
                            index={homeIndex}
                        />
                    );
                })}
            </SectionCardsContainer>
        </SectionContainer>
    );
};

export default Home;
