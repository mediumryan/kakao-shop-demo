import { styled } from 'styled-components';

const DetailImgWrapper = styled.div`
    flex-basis: 50%;
    color: white;
    margin: var(--margin-medium);
    margin-right: calc(var(--margin-medium) / 2);
    border: 2px solid var(--bg-100);
    border-radius: 10px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
`;

export default function DetailImg({ item }) {
    return (
        <DetailImgWrapper>
            <img src={item.image_path} alt={item.name} />
            gu
        </DetailImgWrapper>
    );
}
