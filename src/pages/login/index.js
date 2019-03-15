
import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent {
  render() {
    if(!this.props.loginStatus){
      return(
        <LoginWrapper>
          <LoginBox>
            <h4>登录&emsp;&emsp;·&emsp;&emsp;注册</h4>
            <Input placeholder="手机号或邮箱" ref={(input)=>{this.account=input}}/>
            <Input placeholder="密码" type="password" ref={(input)=>{this.password=input}}/>
            <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to='/'/>
    }
  }

}
const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
})
const mapDispatch = (dispatch) => ({
  login(accountElm,passwordElm){
    dispatch(actionCreators.login((accountElm.value,passwordElm.value)));
  }
})
export default connect(mapState,mapDispatch)(Login);