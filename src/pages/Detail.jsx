import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
// recoil
import { useRecoilValue } from 'recoil';
import { allItem } from '../atom';
// components
import { Container, Title } from './Home';
import DetailImg from '../components/Detail/DetailImg';
import DetailDescription from '../components/Detail/DetailDescription';

const DetailContents = styled.div`
    display: flex;
    width: 80%;
    height: 65vh;
    padding: 0 0 5rem 0;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`;

export default function Detail() {
    // 선택된 아이템 정보 찾기
    const { id } = useParams();
    const all = useRecoilValue(allItem);
    const detailItem = all.find((a) => a.name === id);

    return (
        <Container>
            <Title>{detailItem.name}</Title>
            <DetailContents>
                <DetailImg item={detailItem} />
                <DetailDescription item={detailItem} />
            </DetailContents>
        </Container>
    );
}
