import { useEffect, useState } from 'react';
// 컴포넌트 불러오기
import ItemCards from './../components/ItemCards';

const Umbrella = ({item}) => {

  const [umbrellaItems, setUmbrellaItems] = useState([]);
  
  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter(a => a.category === 'umbrella');
    setUmbrellaItems(filtered);
  },[])
  
  return(
    <div className="containers">
      <h1 className='titles'>우산</h1>
      <div className='umbrella-cards-container cards-containers'>
        {
          umbrellaItems.map((umbrellaItem,umbrellaIndex) => {
            return(
              <ItemCards 
                item={umbrellaItem} 
                key={umbrellaIndex} 
                index={umbrellaIndex}
                />
            )
          })
        }
      </div>
    </div>
  )
}

export default Umbrella;