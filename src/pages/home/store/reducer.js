import {fromJS} from 'immutable';
const defaultState = fromJS({
  articleList:[],
  articlePage: 1,
  showScroll: false,
  MouseIn: false
});

export default (state = defaultState,action) => {
  switch(action.type){
    case'change_home_data':
      return state.set('articleList',fromJS(action.articleList));
    case'add_home_data':
      return state.merge({
        'articleList':state.get('articleList').concat(fromJS(action.articleList)),
        'articlePage':action.nextPage
      })
    case'toggle_scroll_show':
      return state.set('showScroll',action.showScroll)
    case'change_mouse_in':
      return state.set('MouseIn',true)
    case'change_mouse_out':
      return state.set('MouseIn',false)
    default: return state;
  }
}




 