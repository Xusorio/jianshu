import axios from 'axios';
import * as constants from './constants';
const changeLogin = () => ({
  type: constants.CHANGE_Login,
  value:true
})
export const login = (account,password) =>{
  return(dispatch) =>{
    axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
      const result = res.data.data;
      if(result){
        dispatch(changeLogin())
      }else{
        alert('error')
      }
    })

  }
}
export const logout = ()=> ({
  type: constants.LOGOUT,
  value: false
})