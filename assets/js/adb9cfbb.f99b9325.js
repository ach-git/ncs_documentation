"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[27],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return s}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(t),s=a,d=f["".concat(u,".").concat(s)]||f[s]||m[s]||o;return t?n.createElement(d,c(c({ref:r},l),{},{components:t})):n.createElement(d,c({ref:r},l))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7532:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={},u="createCamera",p={unversionedId:"api/Camera/Client/createCamera",id:"api/Camera/Client/createCamera",title:"createCamera",description:"",source:"@site/framework/api/Camera/Client/createCamera.md",sourceDirName:"api/Camera/Client",slug:"/api/Camera/Client/createCamera",permalink:"/ncs_documentation/framework/api/Camera/Client/createCamera",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Imports Framework",permalink:"/ncs_documentation/framework/api/import"},next:{title:"destroyCamera",permalink:"/ncs_documentation/framework/api/Camera/Client/destroyCamera"}},l={},m=[],f={toc:m};function s(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"createcamera"},"createCamera"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"NCs.Camera.createCamera(cameraCoords, cameraHeading)\n")))}s.isMDXComponent=!0}}]);