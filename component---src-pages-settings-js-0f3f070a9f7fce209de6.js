webpackJsonp([0x6c0e93f887fb],{586:function(e,l,t){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}l.__esModule=!0;var n=t(1),a=u(n),r=t(88),f=(u(r),t(99)),c=t(134),o=u(c),d=t(126),i=t(135),m=function(e){var l=e.blurValue,t=e.updateBlurValue;return a.default.createElement(f.Segment,{basic:!0,style:{flex:"1",flexDirection:"column",display:"flex"}},a.default.createElement(f.Segment,null,a.default.createElement(f.Header,null,"Settings"),a.default.createElement(f.Input,{type:"range",value:l,min:0,max:25,onChange:t}),"Blur level: ",l),a.default.createElement(f.Segment,{style:{flex:"1",margin:0}},a.default.createElement(o.default,null)))},s=function(e){var l=e.blurValue;return{blurValue:l}},p=function(e){return{updateBlurValue:function(l,t){var u=t.value;console.log(u),e({type:i.SET_BLUR_VALUE,payload:{blurValue:u}})}}};l.default=(0,d.connect)(s,p)(m),e.exports=l.default}});
//# sourceMappingURL=component---src-pages-settings-js-0f3f070a9f7fce209de6.js.map