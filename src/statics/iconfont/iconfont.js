import {createGlobalStyle} from 'styled-components';
export const GlobalIconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1552649267544'); /* IE9 */
  src: url('./iconfont.eot?t=1552649267544#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1552649267544') format('woff'),
  url('./iconfont.ttf?t=1552649267544') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1552649267544#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;