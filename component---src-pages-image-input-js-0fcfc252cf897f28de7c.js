webpackJsonp([0x5b6cd5961894],{584:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),u=l(a),r=n(88),i=(l(r),n(126)),c=n(99),f=n(134),d=l(f),o=n(135),s=function(e){var t=e.selectFile;return u.default.createElement(c.Segment,{basic:!0,style:{flex:"1",flexDirection:"column",display:"flex"}},u.default.createElement(c.Segment,null,u.default.createElement(c.Header,null,"Image Input"),u.default.createElement("input",{type:"file",accept:"image/*",onChange:t})),u.default.createElement(c.Segment,{style:{flex:"1",margin:0}},u.default.createElement(d.default,null)))},m=function(e){return{}},g=function(e,t){return{selectFile:function(t){var n=t.target;if(n.files&&n.files[0]){var l=new FileReader;l.onload=function(t){var n=t.target.result,l=new Image;l.src=n,l.onload=function(){var t=l.width,a=l.height;e({type:o.SET_SOURCE,payload:{data:n,width:t,height:a}})}},l.readAsDataURL(n.files[0])}}}};t.default=(0,i.connect)(m,g)(s),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-image-input-js-0fcfc252cf897f28de7c.js.map