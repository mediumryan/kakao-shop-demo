// 컴포넌트 불러오기
import ItemCards from "./../components/ItemCards";
// styled-components 불러오기
import {
  SectionContainer,
  SectionTitle,
} from "../styled/common-section-style/SectionContainer";
import { SectionCardsContainer } from "../styled/common-section-style/SectionCards";

const Home = ({ item, show }) => {
  return (
    <SectionContainer>
      <SectionTitle>모든상품</SectionTitle>
      <SectionCardsContainer>
        {item.map((HomeItem, homeIndex) => {
          return (
            <ItemCards
              item={HomeItem}
              key={HomeItem.id}
              index={homeIndex}
              cardShow={show}
            />
          );
        })}
      </SectionCardsContainer>
    </SectionContainer>
  );
};

export default Home;
