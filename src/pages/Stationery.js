import { useEffect, useState } from 'react';
// 컴포넌트 불러오기
import ItemCards from './../components/ItemCards';

const Stationery = ({item}) => {

  const [stationeryItems, setStationeryItems] = useState([]);
  
  useEffect(() => {
    let copy = [...item];
    const filtered = copy.filter(a => a.category === 'stationery');
    setStationeryItems(filtered);
  },[])
  
  return(
    <div className="containers">
      <h1 className='titles'>문구류</h1>
      <div className='stationery-cards-container cards-containers'>
        {
          stationeryItems.map((stationeryItem,stationeryIndex) => {
            return(
              <ItemCards 
                item={stationeryItem} 
                key={stationeryIndex} 
                index={stationeryIndex}
                />
            )
          })
        }
      </div>
    </div>
  )
}

export default Stationery;  