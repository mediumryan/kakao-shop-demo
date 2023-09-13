// 컴포넌트 불러오기
// styled-components 불러오기
import {
    SectionCards,
    CardsImgContainer,
    CardsDescription,
    CardIndex,
} from '../styled/common-section-style/SectionCards';

const ItemCards = () => {
    return (
        <SectionCards>
            <CardsImgContainer>
                <img className="img" alt="상품 이미지 입니다." />
            </CardsImgContainer>
            <CardsDescription>
                <span className="cards-name">0</span>
                <span>0円</span>
                <span className="cards-cart">カートに追加する。</span>
            </CardsDescription>
            <CardIndex>0</CardIndex>
        </SectionCards>
    );
};

export default ItemCards;
