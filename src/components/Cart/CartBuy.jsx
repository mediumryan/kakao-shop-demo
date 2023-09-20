import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { checked, checkedPrice, checkedQuantity } from '../../atom';
import { motion } from 'framer-motion';

const CartBuyWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--margin-medium-large);
    span {
        color: var(--primary-100);
        margin: 0 var(--margin-small);
    }
`;

export const CartQuantityPrice = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-200);
    color: var(--text-200);
    border-radius: 10px;
    padding: var(--padding-double-medium);
    font-size: var(--font-size-medium);
    transform-origin: center left;
    * {
        margin: var(--margin-medium) 0;
    }
`;

export const CartBuyBtn = styled(motion.button)`
    color: var(--bg-200);
    background-color: var(--primary-100);
    font-size: var(--font-size-medium);
    padding: var(--padding-double-medium);
    border-radius: 10px;
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
                <>
                    <CartQuantityPrice
                        variants={buy_variants}
                        initial="initial"
                        animate="animate"
                    >
                        <p>
                            全て : <span>{quantity}</span>コ
                        </p>
                        <p>
                            価格 : <span>{price.toLocaleString()}</span>円
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
                </>
            )}
        </CartBuyWrapper>
    );
}