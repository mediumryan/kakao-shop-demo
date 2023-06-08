import { Link } from 'react-router-dom';

const AddToModal = ({show,setShow}) => {

  function closeAddTo() {
      setShow(!show);
  }
  
  return(
    <div 
      id='add-to-modal'
      onClick={closeAddTo}
      >
      <div>
        <p>상품이 장바구니에 추가되었습니다!</p>
        <p>이 화면은 2초 후 자동으로 사라집니다.</p>
      </div>
      <Link 
        to='./../cart'
        style={{textDecoration : 'none', color : '#760505'}}>장바구니 확인하러 가기 ⯇</Link>
    </div>
  )
}

export default AddToModal;