webpackJsonp([52357358931610],{697:function(e,t,n){var o,r=r||function(e){"use strict";if(!("undefined"==typeof e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},c="application/octet-stream",f=4e4,d=function(e){var t=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};setTimeout(t,f)},s=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){u(e)}}},p=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},m=function(t,u,f){f||(t=p(t));var m,v=this,w=t.type,g=w===c,y=function(){s(v,"writestart progress write writeend".split(" "))},S=function(){if((l||g&&i)&&e.FileReader){var o=new FileReader;return o.onloadend=function(){var t=l?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;"),n=e.open(t,"_blank");n||(e.location.href=t),t=void 0,v.readyState=v.DONE,y()},o.readAsDataURL(t),void(v.readyState=v.INIT)}if(m||(m=n().createObjectURL(t)),g)e.location.href=m;else{var r=e.open(m,"_blank");r||(e.location.href=m)}v.readyState=v.DONE,y(),d(m)};return v.readyState=v.INIT,r?(m=n().createObjectURL(t),void setTimeout(function(){o.href=m,o.download=u,a(o),y(),d(m),v.readyState=v.DONE})):void S()},v=m.prototype,w=function(e,t,n){return new m(e,t||e.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=p(e)),navigator.msSaveOrOpenBlob(e,t)}:(v.abort=function(){},v.readyState=v.INIT=0,v.WRITING=1,v.DONE=2,v.error=v.onwritestart=v.onprogress=v.onwrite=v.onabort=v.onerror=v.onwriteend=null,w)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof e&&e.exports?e.exports.saveAs=r:null!==n(1208)&&null!==n(1209)&&(o=function(){return r}.call(t,n,t,e),!(void 0!==o&&(e.exports=o)))},1208:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},1209:function(e,t){(function(t){e.exports=t}).call(t,{})},583:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=o(r),i=n(88),l=(o(i),n(99)),u=n(697),c=o(u),f=n(134),d=o(f),s=function(){var e=(new XMLSerializer).serializeToString(document.querySelector("#svg")),t=document.createElement("canvas"),n=t.getContext("2d"),o=self.URL||self.webkitURL||self,r=new Image,a=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),i=o.createObjectURL(a);r.onload=function(){n.drawImage(r,0,0),t.toBlob(function(e){c.default.saveAs(e,"download.png")})},r.src=i},p=function(){return a.default.createElement(l.Segment,{basic:!0,style:{flex:"1",flexDirection:"column",display:"flex"}},a.default.createElement(l.Segment,null,a.default.createElement("p",null,"Download"),a.default.createElement(l.Button,{onClick:s},"Save")),a.default.createElement(l.Segment,{style:{flex:"1",margin:0}},a.default.createElement(d.default,null)))};t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-download-js-1a535dca881b4a7b124f.js.map