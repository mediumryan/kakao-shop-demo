import styled from 'styled-components';
import CardDescriptions from './CardDescriptions';
import CardImg from './CardImg';

const CardWrapper = styled.div`
    position: relative;
    margin: var(--margin-small);
    margin-bottom: var(--margin-medium-large);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const CardIndex = styled.span`
    position: absolute;
    top: 2%;
    left: 2%;
    color: var(--primary-200);
    cursor: default;
`;

export default function Card({ item, index }) {
    return (
        <CardWrapper>
            <CardImg item={item} />
            <CardDescriptions item={item} />
            <CardIndex>{index + 1}</CardIndex>
        </CardWrapper>
    );
}
