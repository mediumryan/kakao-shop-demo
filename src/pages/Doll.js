import { useEffect, useState } from "react";
// 컴포넌트 불러오기
import ItemCards from "./../components/ItemCards";
// styled-components 불러오기
import {
  SectionContainer,
  SectionTitle,
} from "../styled/common-section-style/SectionContainer";
import { SectionCardsContainer } from "../styled/common-section-style/SectionCards";

const Doll = ({ item }) => {
  const [dollItems, setDollItems] = useState([]);

  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter((a) => a.category === "doll");
    setDollItems(filtered);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>인형</SectionTitle>
      <SectionCardsContainer>
        {dollItems.map((dollItem, dollIndex) => {
          return (
            <ItemCards item={dollItem} key={dollIndex} index={dollIndex} />
          );
        })}
      </SectionCardsContainer>
    </SectionContainer>
  );
};

export default Doll;
