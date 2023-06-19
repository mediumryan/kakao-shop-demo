import { useEffect, useState } from "react";
// 컴포넌트 불러오기
import ItemCards from "./../components/ItemCards";
// styled-components 불러오기
import {
  SectionContainer,
  SectionTitle,
} from "../styled/common-section-style/SectionContainer";
import { SectionCardsContainer } from "../styled/common-section-style/SectionCards";

const Umbrella = ({ item }) => {
  const [umbrellaItems, setUmbrellaItems] = useState([]);

  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter((a) => a.category === "umbrella");
    setUmbrellaItems(filtered);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>우산</SectionTitle>
      <SectionCardsContainer>
        {umbrellaItems.map((umbrellaItem, umbrellaIndex) => {
          return (
            <ItemCards
              item={umbrellaItem}
              key={umbrellaIndex}
              index={umbrellaIndex}
            />
          );
        })}
      </SectionCardsContainer>
    </SectionContainer>
  );
};

export default Umbrella;
