import { useEffect, useState } from "react";
// 컴포넌트 불러오기
import ItemCards from "./../components/ItemCards";
// styled-components 불러오기
import {
  SectionContainer,
  SectionTitle,
} from "../styled/common-section-style/SectionContainer";
import { SectionCardsContainer } from "../styled/common-section-style/SectionCards";

const Stationery = ({ item }) => {
  const [stationeryItems, setStationeryItems] = useState([]);

  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter((a) => a.category === "stationery");
    setStationeryItems(filtered);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>문구류</SectionTitle>
      <SectionCardsContainer>
        {stationeryItems.map((stationeryItem, stationeryIndex) => {
          return (
            <ItemCards
              item={stationeryItem}
              key={stationeryIndex}
              index={stationeryIndex}
            />
          );
        })}
      </SectionCardsContainer>
    </SectionContainer>
  );
};

export default Stationery;
