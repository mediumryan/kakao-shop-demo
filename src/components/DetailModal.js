// 컴포넌트 불러오기
// styled-components 불러오기
import {
    DetailModalContainer,
    DetailOverview,
    DetailPreview,
    DetailImgContainer,
    DetailDescription,
    DetailCloseButton,
} from '../styled/styled-detail/StyledDetailContainer';

const DetailModal = () => {
    return (
        <DetailModalContainer>
            <DetailOverview>
                <DetailImgContainer>
                    <img
                        className="img detail-image"
                        alt="商品のイメージです。."
                    />
                </DetailImgContainer>
                <DetailDescription>
                    <p>0</p>
                    <p className="detail-price">0원</p>
                    <button className="detail-add-btn">カートに追加する</button>
                </DetailDescription>
            </DetailOverview>
            <h3>商品プレビュー</h3>
            <DetailPreview>0</DetailPreview>
            <DetailCloseButton>X</DetailCloseButton>
        </DetailModalContainer>
    );
};

export default DetailModal;
