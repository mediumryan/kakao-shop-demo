import { useState, useEffect } from 'react';
// 컴포넌트 불러오기
import AddToModal from './AddToModal';
import DetailAddToModal from './DetailAddToModal';

const DetailModal = ({ item, detailModal, setDetailModal}) => {

  const [detailImgArr] = useState(['1','2','3','4']);

  const [detailAddTo,setDetailAddTo] = useState(false);

  function handleAddToBtn() {
    setDetailAddTo(!detailAddTo);
    // 로컬 저장소 값 가져오기
    const localCart = localStorage.getItem('cart');
    const parsedCart = JSON.parse(localCart);
    // 로컬스토리지에 상품 정보가 없다면 item 추가 후 저장
    if(!localCart) {
      localStorage.setItem('cart', JSON.stringify([item]));
    } else {
    // 로컬스토리지에 상품 정보가 있다면 중복 확인
      const found = parsedCart.findIndex(a => a.id == item.id);
      // 중복값이 없다면 item 추가 후 저장
      if(found == -1){
        parsedCart.push(item);
        localStorage.setItem('cart', JSON.stringify(parsedCart));
      // 중복값이 있다면 findIndex에서 구한 값으로 해당 요소의 개수만 증가
      } else {
        parsedCart[found].quantity ++;
        localStorage.setItem('cart', JSON.stringify(parsedCart));
      }
    }
  }
  
  return(
    <div id='detail-modal' className={detailModal == true ? 'visible' : 'invisible'}>
      <div className='detail-top'>
        <div className='detail-image-container'>
          <img 
            className='img detail-image' 
            src={item.image_path}
            alt='상품 상세 이미지입니다.'
            />
        </div>
        <div className='detail-description'>
          <p className='detail-name'>{item.name}</p>
          <p className='detail-price'>{item.price}원</p>
          <button 
            className='detail-add-btn'
            onClick={handleAddToBtn}
            >장바구니에 담기</button>
        </div>
      </div>
      <h3 className='detail-preview-title'>상품 프리뷰</h3>
      <div className='detail-bottom'>
        {
          detailImgArr.map((imgItem, imgIndex) => {
            return(
              <div 
                className='detail-preview' 
                key={imgIndex}><img 
                                 src={item.image_path} 
                                 alt='상품 상세화면 미리보기 이미지 입니다.'
                                 className='img'/>
              </div>
           ) 
          })
        }
      </div>
      <button 
        className='detail-close-btn'
        onClick={()=>{
          setDetailModal(!detailModal);
        }}
        >X</button>
      {
        detailAddTo === true && <DetailAddToModal 
                           detailAddTo={detailAddTo}
                           setDetailAddTo={setDetailAddTo}
                           />
      }
    </div>
  )
}

export default DetailModal;