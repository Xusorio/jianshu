import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
  z-index: 1;
  position: fixed;
  height: 55px;
  width: 100%;
  border-bottom: 1px solid rgb(240,240,240);
  margin-bottom: 30px;
  background: #fff;
`;

export const Logo = styled.div`
  float: left;
  margin: 0 auto 0 40px;
  height: 56px;
  width: 100px;
  background: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;  
`;

export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input`
  width: 240px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &.slide-enter{
    transition: all .3s ease-out;
  }
  &.slide-enter-active{
    width: 320px;  
  }
  &.slide-exit{
    transition: all .3s ease-out;
  }
  &.slide-exit-active{
    width: 240px;
  }
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;

  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 45px;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 36px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 16px;
  &.reg {
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #eee;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoHYH = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;
export const SearchInfoList = styled.span`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 12px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
`;




