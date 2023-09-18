import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const DetailCompleteWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.75);
    color: var(--bg-300);
    font-size: var(--font-size-medium-large);
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 var(--padding-medium-large);
    p {
        font-size: var(--font-size-medium-large);
        margin-bottom: var(--margin-medium);
    }
`;

const GoToCart = styled.button`
    color: var(--primary-300);
    background-color: var(--primary-100);
    font-size: var(--font-size-medium);
    font-weight: 600;
    margin-top: var(--margin-medium-large);
    padding: var(--padding-double-medium);
    border-radius: 4px;
    transition: 150ms all;
    &:hover {
        transform: scale(1.05);
        opacity: 0.75;
    }
`;

const DetailClose = styled.button`
    position: absolute;
    top: 2%;
    right: 2%;
    font-size: var(--font-size-small);
    color: var(--bg-300);
`;

export default function DetailComplete({
    detailCompleteState,
    ToggleDetailComplete,
}) {
    const navigate = useNavigate();

    return (
        <DetailCompleteWrapper
            visible={detailCompleteState}
            onClick={ToggleDetailComplete}
        >
            <p>商品がカートに追加されました。</p>
            <GoToCart
                onClick={() => {
                    navigate('/cart');
                }}
            >
                My カート確認
            </GoToCart>
            <DetailClose onClick={ToggleDetailComplete}>X</DetailClose>
        </DetailCompleteWrapper>
    );
}
