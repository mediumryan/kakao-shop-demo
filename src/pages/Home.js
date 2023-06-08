// 컴포넌트 불러오기
import ItemCards from './../components/ItemCards';

const Home = ({item}) => {
  
  return(
    <div className="containers">
      <h1 className='titles'>모든상품</h1>
      <div className='home-cards-container cards-containers'>
        {
          item.map((HomeItem,homeIndex) => {
            return(
              <ItemCards
                item={HomeItem} 
                key={homeIndex} 
                index={homeIndex}
                />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home;