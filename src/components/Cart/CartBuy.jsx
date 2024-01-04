import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
// import state data
import { checked, checkedPrice, checkedQuantity } from '../../atom';

const CartBuyWrapper = styled(motion.div)`
    position: fixed;
    bottom: 5%;
    right: 2%;
    width: 480px;
    height: 120px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 95%;
        top: 15%;
    }
`;

const CartBuyInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    border-radius: 20px;
    border: 3px solid var(--accent-200);
    background-color: var(--white-100);
    z-index: 999;
`;

export const CartQuantityPrice = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    font-size: 1.25rem;
    transform-origin: center left;
    & > p {
        margin: 0.5rem 0;
        span {
            font-weight: 700;
        }
    }
`;

export const CartBuyBtn = styled(motion.button)`
    color: var(--accent-400);
    background-color: var(--accent-100);
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transform-origin: center left;
`;

// buy_variants
const buy_variants = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    hover: {
        opacity: 0.75,
        transition: {
            duration: 0.3,
        },
    },
};

export default function CartBuy() {
    const checkedCart = useRecoilValue(checked);
    const quantity = useRecoilValue(checkedQuantity);
    const price = useRecoilValue(checkedPrice);

    return (
        <CartBuyWrapper>
            {checkedCart.length > 0 && (
                <CartBuyInner>
                    <CartQuantityPrice
                        variants={buy_variants}
                        initial="initial"
                        animate="animate"
                    >
                        <p>
                            数量 : <span>{quantity}</span>
                        </p>
                        <p>
                            小計 : <span>{price.toLocaleString()}</span>円
                        </p>
                    </CartQuantityPrice>
                    <CartBuyBtn
                        variants={buy_variants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    >
                        購入する
                    </CartBuyBtn>
                </CartBuyInner>
            )}
        </CartBuyWrapper>
    );
}
