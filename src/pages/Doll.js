import { useEffect, useState } from 'react';
// 컴포넌트 불러오기
import ItemCards from './../components/ItemCards';

const Doll = ({item}) => {

  const [dollItems, setDollItems] = useState([]);
  
  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter(a => a.category === 'doll');
    setDollItems(filtered);
  },[])
  
  return(
    <div className="containers">
      <h1 className='titles'>인형</h1>
      <div className='doll-cards-container cards-containers'>
        {
          dollItems.map((dollItem,dollIndex) => {
            return(
              <ItemCards
                item={dollItem}
                key={dollIndex} 
                index={dollIndex}
                />
            )
          })
        }
      </div>
    </div>
  )
}

export default Doll;