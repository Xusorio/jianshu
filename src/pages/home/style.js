import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0px auto;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
`;
export const HomeRight = styled.div`
  float: right;
`;
export const SpaceLine = styled.div`
  width: 625px;
  height: 10px;
  border-bottom: 1px solid #dcdcdc;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`;
// List 部件
export const ListItem = styled.div`
overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  text-align:center;
`;
//Command部分
export const CommendWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  overflow: hidden;
  .command-pic{
    width: 280px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    cursor: pointer;
  }
  .ad-pic{
    width: 280px;
    height: 160px;
    margin-top: 30px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;
export const DownloadContent = styled.div`
  position: relative;
  margin-top: 10px;

  border: 1px solid rgb(240,240,240);
  .download-pic {
    margin: 20px;
    width: 60px;
    height: 60px;
    text-align: center;
  }
  div{
    margin: 30px 30px 10px 10px;
    float: right;
    display: block;
  }
  span{
    font-size: 12px;
    color: #777;
    display: block;
  }
`;
export const QRCodeWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 60px;
  .qrcode{
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    cursor: pointer;
    padding: 20px;
    background: #fff;
    border: 2px solid #777;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
  }
`;

//Writer部分
export const WriterWrapper = styled.div`
  margin-top: 10px auto;
  z-index: 1;
`;
export const Title = styled.div`
  height: 20px
  span{
    .left{
      float: left;
    }
    .right{
      float: right;
    }
  }
`;