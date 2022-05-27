"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[592],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,v=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(v,o(o({ref:t},m),{},{components:n})):r.createElement(v,o({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7684:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),i=n(6010),o=n(8425),l=n(8596),c=n(5281),s=n(9960),m=n(4996),u=n(5999);function d(e){return a.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function v(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(s.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function p(e){var t=e.children,n=e.active,o=e.index,l=e.addMicrodata;return a.createElement("li",(0,r.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(o+1)}))}function h(){var e=(0,m.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(s.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},a.createElement(d,{className:b.breadcrumbHomeIcon})))}function f(){var e=(0,o.s1)(),t=(0,l.Ns)();return e?a.createElement("nav",{className:(0,i.Z)(c.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(h,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(p,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(v,{href:t.href,isLast:r},t.label))})))):null}},4966:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(7294),i=n(5999),o=n(6010),l=n(9960);function c(e){var t=e.permalink,n=e.title,r=e.subLabel,i=e.isNext;return a.createElement(l.Z,{className:(0,o.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(c,(0,r.Z)({},t,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(c,(0,r.Z)({},n,{subLabel:a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(6010),i=n(5999),o=n(4477),l=n(5281);function c(e){var t=e.className,n=(0,o.E)();return n.badge?r.createElement("span",{className:(0,a.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},r.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),a=n(6010),i=n(2263),o=n(9960),l=n(5999),c=n(143),s=n(373),m=n(5281),u=n(4477);var d={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return r.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:r.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=d[e.versionMetadata.banner];return r.createElement(t,e)}function v(e){var t=e.versionLabel,n=e.to,a=e.onClick;return r.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:r.createElement("b",null,r.createElement(o.Z,{to:n,onClick:a},r.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,n=e.className,o=e.versionMetadata,l=(0,i.Z)().siteConfig.title,u=(0,c.gA)({failfast:!0}).pluginId,d=(0,s.J)(u).savePreferredVersionName,p=(0,c.Jo)(u),h=p.latestDocSuggestion,f=p.latestVersionSuggestion,g=null!=h?h:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return r.createElement("div",{className:(0,a.Z)(n,m.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(b,{siteTitle:l,versionMetadata:o})),r.createElement("div",{className:"margin-top--md"},r.createElement(v,{versionLabel:f.label,to:g.path,onClick:function(){return d(f.name)}})))}function h(e){var t=e.className,n=(0,u.E)();return n.banner?r.createElement(p,{className:t,versionMetadata:n}):null}},2503:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),i=n(7294),o=n(6010),l=n(5999),c=n(6668),s="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5",u=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,a.Z)(e,u),b=(0,c.L)().navbar.hideOnScroll;return"h1"!==t&&n?i.createElement(t,(0,r.Z)({},d,{className:(0,o.Z)("anchor",b?m:s),id:n}),d.children,i.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,r.Z)({},d,{id:void 0}))}},4972:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(7294),a=n(5999),i=n(1944),o=n(5257);function l(){return r.createElement(r.Fragment,null,r.createElement(i.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(o.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);