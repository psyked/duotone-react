webpackJsonp([0x6c0e93f887fb],{586:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=l(1),n=a(u),r=l(88),f=(a(r),l(99)),c=l(134),d=a(c),o=l(126),p=l(135),i=function(e){var t=e.blurValue,l=e.updateBlurValue,a=e.textOverlay,u=e.updateTextValue;return n.default.createElement(f.Segment,{basic:!0,style:{flex:"1",flexDirection:"column",display:"flex"}},n.default.createElement(f.Segment,null,n.default.createElement(f.Header,null,"Settings"),n.default.createElement(f.Input,{type:"range",value:t,min:0,max:25,onChange:l}),"Blur level: ",t,n.default.createElement(f.Input,{type:"text",value:a,onChange:u})),n.default.createElement(f.Segment,{style:{flex:"1",margin:0}},n.default.createElement(d.default,null)))},m=function(e){var t=e.blurValue,l=e.textOverlay;return{blurValue:t,textOverlay:l}},v=function(e){return{updateBlurValue:function(t,l){var a=l.value;e({type:p.SET_BLUR_VALUE,payload:{blurValue:a}})},updateTextValue:function(t,l){var a=l.value;e({type:p.SET_TEXT_VALUE,payload:{textOverlay:a}})}}};t.default=(0,o.connect)(m,v)(i),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-settings-js-8ac80e5a038dd6a184d8.js.map