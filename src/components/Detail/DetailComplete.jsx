import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const DetailCompleteWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: -50%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    color: var(--white-100);
    font-size: 1.5rem;
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        left: 0;
    }
`;

const DetailCompleteInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    p {
        position: absolute;
        top: 5rem;
        width: 100%;
        text-align: center;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 1px;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 2rem;
        p {
            width: 75%;
        }
    }
`;

const GoToCart = styled.button`
    position: absolute;
    width: 50%;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--white-200);
    background-color: var(--black-200);
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem 0;
    border-radius: 10px;
    transition: 150ms all;
    &:hover {
        color: var(--white-100);
        background-color: var(--black-100);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 1rem;
        width: 75%;
    }
`;

const DetailClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25rem;
    color: var(--white-200);
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
            <DetailCompleteInner>
                <p>商品がカートに追加されました。</p>
                <GoToCart
                    onClick={() => {
                        navigate('/cart');
                    }}
                >
                    My カート確認
                </GoToCart>
                <DetailClose onClick={ToggleDetailComplete}>X</DetailClose>
            </DetailCompleteInner>
        </DetailCompleteWrapper>
    );
}
