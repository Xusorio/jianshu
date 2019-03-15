import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import  * as actionCreators from './store/actionCreators';
import {Link} from 'react-router-dom';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,Nav,NavItem,NavSearch,
  Addition,Button,
  SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoHYH,SearchInfoItem,SearchInfoList
} from './style';
class Header extends Component{
  render(){
    return(
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'><i class="iconfont">&#xe695;</i>首页</NavItem>
          <NavItem className='left'><i class="iconfont">&#xe622;</i>下载App</NavItem>
          {
            this.props.login ? <NavItem onClick={this.props.logout} className='right'>退出</NavItem> : 
            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>
            <i class="iconfont">&#xe6b1;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
            timeout={300}
            in={this.props.focused}
            classNames="slide"
            >
              <NavSearch 
                placeholder='搜索'
                className={this.props.focused ? 'focused':''}
                onFocus={()=>this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i 
            className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}
            ></i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>  
        <Addition>
          <Link to='/write'>
          <Button className='writting'>
            <i className="iconfont">&#xe616;</i>写文章
          </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition> 
      </HeaderWrapper>
      )
  }
  getListArea()
  {
    const pageList = [];
    const newList = this.props.list.toJS();
    if(newList.length){
      for(let i =(this.props.page-1)*10;i<this.props.page*10;i++){
        pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
     }
    }
    if(this.props.focused || this.props.mouseIn) {
      return(
        <SearchInfo 
        onMouseEnter={this.props.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoHYH 
            onClick={()=>{this.props.handleChangePage(this.props.page,this.props.totalPage)}}>
            <i className="iconfont spin">&#xe851;</i>换一批</SearchInfoHYH>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
        )
    }else{
      return null;
    }
  }


}

const mapStateToProps = (state) => {
  return{
    focused: state.get('header').get('focused'),
    list: state.getIn(['header','list']),
    totalPage: state.getIn(['header','totalPage']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login','login'])
  }
}
const mapDispatchToprops = (dispatch) => {
  return{  
    handleInputFocus(list){
      if(list.size === 0 ){
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage){
      if (page<totalPage) {
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
    },
    logout(){
        dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(Header);