import { useEffect, useState } from "react";
// 컴포넌트 불러오기
import ItemCards from "./../components/ItemCards";
// styled-components 불러오기
import {
  SectionContainer,
  SectionTitle,
} from "../styled/common-section-style/SectionContainer";
import { SectionCardsContainer } from "../styled/common-section-style/SectionCards";

const Bedding = ({ item }) => {
  const [beddingItems, setBeddingItems] = useState([]);

  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter((a) => a.category === "bedding");
    setBeddingItems(filtered);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>인형</SectionTitle>
      <SectionCardsContainer>
        {beddingItems.map((beddingItem, beddingIndex) => {
          return (
            <ItemCards
              item={beddingItem}
              key={beddingIndex}
              index={beddingIndex}
            />
          );
        })}
      </SectionCardsContainer>
    </SectionContainer>
  );
};

export default Bedding;
