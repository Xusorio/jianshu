import React,{Component} from 'react';
import {CommendWrapper,DownloadContent,QRCodeWrapper} from '../style';
import {connect} from 'react-redux';
class Recommand extends Component {
  render() {
    return(
      <CommendWrapper>
        <img className='command-pic' alt='none' src='https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'/>
        <img className='command-pic' alt='none' src='https://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png'/>
        <img className='command-pic' alt='none' src='https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'/>
        <img className='command-pic' alt='none' src='https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'/>
        <img className='command-pic' alt='none' src='https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'/>
        <img className='command-pic' alt='none' src='https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'/>
        <DownloadContent
        onMouseEnter={this.props.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}>
          
          <img className='download-pic' alt='none' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
          <div>下载简书手机App ><br/><span>随时随地发现和创作内容</span></div>
          {this.getQRcode()}
        </DownloadContent>
        <div><img className='ad-pic' alt='none' src='https://oimageb1.ydstatic.com/image?id=5270088568641242702&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60'/></div>
      </CommendWrapper>
      )
  }
  getQRcode(){
    if(this.props.MouseIn){
      return(
        <QRCodeWrapper>
          <img class="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode"/>
        </QRCodeWrapper>
        )
    }
  }
}


const mapState = (state) => {
  return{
    MouseIn:state.getIn(['home','MouseIn'])
  }
}

const mapDispatch = (dispatch) => {
  return{
    handleMouseEnter(){
      const action = {
        type:'change_mouse_in'
      };
      dispatch(action);
    },
    handleMouseLeave(){
      const action = {
        type:'change_mouse_out'
      };
      dispatch(action);

    }   
  }
}


export default connect(mapState,mapDispatch)(Recommand);