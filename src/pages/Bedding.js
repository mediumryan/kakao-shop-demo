import { useEffect, useState } from 'react';
// 컴포넌트 불러오기
import ItemCards from './../components/ItemCards';

const Bedding = ({item}) => {

  const [beddingItems, setBeddingItems] = useState([]);
  
  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter(a => a.category === 'bedding');
    setBeddingItems(filtered);
  },[])
  
  return(
    <div className="containers">
      <h1 className='titles'>인형</h1>
      <div className='doll-cards-container cards-containers'>
        {
          beddingItems.map((beddingItem,beddingIndex) => {
            return(
              <ItemCards   
                item={beddingItem}
                key={beddingIndex}
                index={beddingIndex}
                />
            )
          })
        }
      </div>
    </div>
  )
}

export default Bedding;