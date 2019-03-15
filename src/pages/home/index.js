import List from './components/List';
import Recommend from './components/Recommend';
import React,{Component,Fragment} from 'react';
import {
  HomeWrapper,HomeLeft,HomeRight,SpaceLine,BackTop
} from './style';
import axios from 'axios';
import {connect} from 'react-redux';
class Home extends Component {
  render() {
    return(
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img className='banner-img' alt='advertisement'
            src='https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
            <SpaceLine/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
          </HomeRight>
          { this.props.showScroll ? 
          <BackTop onClick={this.handleScrollTop}><i class="iconfont">&#xe65a;</i></BackTop> : null
          }
        </HomeWrapper>
      </Fragment>
      )
  }
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollShow)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollShow)
  }
}
const mapState = (state) => ({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeScrollShow(){
    if(document.documentElement.scrollTop > 200)
    {
      const action = {
        type:'toggle_scroll_show',
        showScroll:true
      };
      dispatch(action);
    }
    else 
    {
      const action = {
        type:'toggle_scroll_show',
        showScroll:false
      };
      dispatch(action);
    }    
  },
  changeHomeData(){
      axios.get('api/home.json').then((res)=>{
      const result = res.data.data;
      const action = {
        type: 'change_home_data',
        articleList: result.articleList
      }
      dispatch(action);    
    })   
  }
})
export default connect(mapState,mapDispatch)(Home);