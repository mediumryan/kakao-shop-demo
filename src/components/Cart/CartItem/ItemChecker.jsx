import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
// import state data
import { cartState } from '../../../atom';
// import components
import { CartItemContents } from './CartItem';

const Checker = styled.input`
    width: 25px;
    height: 25px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;

export default function ItemChecker({ item, itemIndex }) {
    const [cart, setCart] = useRecoilState(cartState);

    // checkbox
    const toggleChecked = () => {
        const newCart = [...cart];
        newCart[itemIndex] = {
            ...newCart[itemIndex],
            checked: !newCart[itemIndex].checked,
        };
        setCart(newCart);
    };

    return (
        <CartItemContents style={{ flexBasis: '10%' }}>
            <Checker
                type="checkbox"
                checked={item.checked}
                onChange={toggleChecked}
            />
        </CartItemContents>
    );
}
