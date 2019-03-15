import styled from 'styled-components';

export const LoginWrapper = styled.div`
  background: #eee;
  min-height: 900px;
  padding-top: 140px;
`;
export const LoginBox = styled.div`
  width: 300px;
  height: 350px;
  margin: 60px auto 0 auto;
  padding: 50px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  h4{
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
  }
  
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  border-bottom: none;
  font-size: 16px;
  color: #666;
  
`;
export const Button = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px; 
  font-size: 18px;
  background: #3194d0;
  border-radius: 15px;
  margin: 30px auto; 
  text-align: center;
  color: #fff;
`;