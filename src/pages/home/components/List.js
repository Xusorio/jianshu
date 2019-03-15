import React,{Component} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
class List extends Component {
  render() {
    const {list,getMoreList,page} = this.props;
    return(
      <div>
          {list.map((item,index) => {
            return (
              <Link key={index} to={'/detail/'+ item.get('id')}>
                <ListItem>
                  <img src={item.get('imgUrl')}
                  className='pic' alt='none'/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                 </ListInfo>
                </ListItem>
              </Link>
              );
          })}
          <LoadMore onClick={()=>{getMoreList(page)}}>阅读更多</LoadMore>   
      </div>
      )
  }
}
const mapState = (state) => ({
  list:state.getIn(['home','articleList']),
  page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
   getMoreList(page){
    axios.get('api/homeList.json?page='+page).then((res)=>{
      const result = res.data.data;
      const action = {
        type: 'add_home_data',
        articleList: result.articleList,
        nextPage: page+1
      }
      dispatch(action);   
    })
   }
    
})

export default connect(mapState,mapDispatch)(List);