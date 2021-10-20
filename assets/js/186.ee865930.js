/*! For license information please see 186.ee865930.js.LICENSE.txt */
(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[186],{36742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(63366),a=n(67294),o=n(73727),l=n(52263),i=n(13919),c=n(10412),s=(0,a.createContext)({collectLink:function(){}}),u=n(44996),m=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,g=e.activeClassName,b=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,_=(0,r.Z)(e,d),Z=(0,l.Z)().siteConfig,w=Z.trailingSlash,y=Z.baseUrl,N=(0,u.C)().withBaseUrl,C=(0,a.useContext)(s),S=v||h,T=(0,i.Z)(S),I=null==S?void 0:S.replace("pathname://",""),L=void 0!==I?(n=I,k&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0;L&&T&&(L=(0,m.applyTrailingSlash)(L,{trailingSlash:w,baseUrl:y}));var B,D=(0,a.useRef)(!1),x=f?o.OL:o.rU,U=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!U&&T&&null!=L&&window.docusaurus.prefetch(L),function(){U&&B&&B.disconnect()}}),[L,U,T]);var A=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,M=!L||!T||A;return L&&T&&!A&&!p&&C.collectLink(L),M?a.createElement("a",Object.assign({href:L},S&&!T&&{target:"_blank",rel:"noopener noreferrer"},_)):a.createElement(x,Object.assign({},_,{onMouseEnter:function(){D.current||null==L||(window.docusaurus.preload(L),D.current=!0)},innerRef:function(e){var t,n;U&&e&&T&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:L||""},f&&{isActive:b,activeClassName:g}))}},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return l}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,l=o.forcePrependBaseUrl,i=void 0!==l&&l,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},18617:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},65186:function(e,t,n){"use strict";n.d(t,{Z:function(){return ke}});var r=n(67294),a=n(86010),o=n(5977),l=n(24973),i=n(99558),c="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,i.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(87462),d=n(63366),f=["width","height","color","strokeWidth","className"];function v(e){var t=e.width,n=void 0===t?21:t,a=e.height,o=void 0===a?21:a,l=e.color,i=void 0===l?"currentColor":l,c=e.strokeWidth,s=void 0===c?1.2:c,u=(e.className,(0,d.Z)(e,f));return r.createElement("svg",(0,m.Z)({viewBox:"0 0 15 15",width:n,height:o},u),r.createElement("g",{stroke:i,strokeWidth:s},r.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}var h="announcementBar_3WsW",g="announcementBarPlaceholder_2m9F",b="announcementBarClose_38nx",p="announcementBarContent_3EUC";var E=function(){var e=(0,i.nT)(),t=e.isActive,n=e.close,o=(0,i.LU)().announcementBar;if(!t)return null;var c=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return r.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&r.createElement("div",{className:g}),r.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:c}}),m?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",b),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(v,{width:14,height:14,strokeWidth:3.1})):null)},k=n(54755),_=n(72389),Z={toggle:"toggle_71bT",toggleScreenReader:"toggleScreenReader_28Tw",toggleDisabled:"toggleDisabled_3cF-",toggleTrack:"toggleTrack_32Fl",toggleTrackCheck:"toggleTrackCheck_3lV7",toggleChecked:"toggleChecked_2FvV",toggleTrackX:"toggleTrackX_S2yS",toggleTrackThumb:"toggleTrackThumb_xI_Z",toggleFocused:"toggleFocused_my6j",toggleIcon:"toggleIcon_O4iE"},w=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(Z.toggleIcon,Z.dark),style:n},t)},y=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(Z.toggleIcon,Z.light),style:n},t)},N=(0,r.memo)((function(e){var t,n=e.className,o=e.icons,l=e.checked,i=e.disabled,c=e.onChange,s=(0,r.useState)(l),u=s[0],m=s[1],d=(0,r.useState)(!1),f=d[0],v=d[1],h=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)(Z.toggle,n,(t={},t[Z.toggleChecked]=u,t[Z.toggleFocused]=f,t[Z.toggleDisabled]=i,t))},r.createElement("div",{className:Z.toggleTrack,role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=h.current)?void 0:e.click()}},r.createElement("div",{className:Z.toggleTrackCheck},o.checked),r.createElement("div",{className:Z.toggleTrackX},o.unchecked),r.createElement("div",{className:Z.toggleTrackThumb})),r.createElement("input",{ref:h,checked:u,type:"checkbox",className:Z.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return m(!u)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=h.current)||t.click())}}))}));function C(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,c=(0,_.Z)();return r.createElement(N,(0,m.Z)({disabled:!c,icons:{checked:r.createElement(w,{icon:n,style:a}),unchecked:r.createElement(y,{icon:o,style:l})}},e))}var S=n(85350),T=function(e){var t=(0,r.useState)(e),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=(0,r.useRef)(0),c=(0,r.useCallback)((function(e){null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,i.RF)((function(t,n){if(e)if(o.current)o.current=!1;else{var r=t.scrollY,i=null==n?void 0:n.scrollY,c=document.documentElement.scrollHeight-l.current,s=window.innerHeight;i&&r>=i?a(!1):r+s<c&&a(!0)}})),(0,i.SL)((function(t){if(e)return t.location.hash?(o.current=!0,void a(!1)):void a(!0)})),{navbarRef:c,isNavbarVisible:n}};var I=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},L=n(93783),B=n(80907),D=n(77819),x=n(55537),U=["width","height","className"],A=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,l=e.className,i=(0,d.Z)(e,U);return r.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},i),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},M={toggle:"toggle_3Zt9",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey",navbarSidebarToggle:"navbarSidebarToggle_wkoY"},P="right";function R(){return(0,i.LU)().navbar.items}function W(){var e=(0,i.LU)().colorMode.disableSwitch,t=(0,S.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function O(e){var t=e.sidebarShown,n=e.toggleSidebar;I(t);var o=R(),c=W(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,i.g8)())?void 0:t({toggleSidebar:a}),l=(0,i.D9)(o),c=(0,r.useState)((function(){return!1})),s=c[0],u=c[1];(0,r.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(C,{className:M.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(v,{color:"var(--ifm-color-emphasis-600)",className:M.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(D.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var j=function(){var e,t=(0,i.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,L.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,i.Rb)((function(){if(a)return o(!1),!1}));var l=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),c=W(),s=(0,B.gA)(),u=T(n),d=u.navbarRef,f=u.isNavbarVisible,v=R(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:P)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:P)}))}}(v),b=g.leftItems,p=g.rightItems;return r.createElement("nav",{ref:d,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[M.navbarHideable]=n,e[M.navbarHidden]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},r.createElement(A,null)),r.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return r.createElement(D.Z,(0,m.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},p.map((function(e,t){return r.createElement(D.Z,(0,m.Z)({},e,{key:t}))})),!c.disabled&&r.createElement(C,{className:M.toggle,checked:c.isDarkTheme,onChange:c.toggle}),!h&&r.createElement(k.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&r.createElement(O,{sidebarShown:l.shown,toggleSidebar:l.toggle}))},H=n(36742),V=n(44996),F=n(13919),z="footerLogoLink_MyFc",q=n(98465),G=n(18617),K=["to","href","label","prependBaseUrlToHref"];function J(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,d.Z)(e,K),i=(0,V.Z)(t),c=(0,V.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(H.Z,(0,m.Z)({className:"footer__link-item"},n?{href:o?c:n}:{to:i},l),n&&!(0,F.Z)(n)?r.createElement("span",null,a,r.createElement(G.Z,null)):a)}var Q=function(e){var t=e.sources,n=e.alt;return r.createElement(q.Z,{className:"footer__logo",alt:n,sources:t})};var X=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,o=t.links,l=void 0===o?[]:o,c=t.logo,s=void 0===c?{}:c,u={light:(0,V.Z)(s.src),dark:(0,V.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},l&&l.length>0&&r.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(J,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(H.Z,{href:s.href,className:z},r.createElement(Q,{alt:s.alt,sources:u})):r.createElement(Q,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},Y=n(10412),$=(0,i.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},re=function(e){(0,i.WA)("theme").set(ne(e))},ae=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return Y.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),l=o[0],c=o[1],s=(0,r.useCallback)((function(){c(ee),re(ee)}),[]),u=(0,r.useCallback)((function(){c(te),re(te)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(l))}),[l]),(0,r.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&c(ne(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?te:ee)}))}),[]),{isDarkTheme:l===te,setLightTheme:s,setDarkTheme:u}},oe=n(82924);var le=function(e){var t=ae(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(oe.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},ie="docusaurus.tab.",ce=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,i.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,i._f)().forEach((function(t){if(t.startsWith(ie)){var n=t.substring(ie.length);e[n]=(0,i.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},se=n(79443);var ue=function(e){var t=ce(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(se.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function me(e){var t=e.children;return r.createElement(le,null,r.createElement(i.pl,null,r.createElement(ue,null,r.createElement(i.OC,null,r.createElement(i.L5,null,r.createElement(i.Cn,null,t))))))}var de=n(99105),fe=n(52263);function ve(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(de.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var he=n(41217);function ge(){var e=(0,fe.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,i.l5)();return r.createElement(de.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){var t=e.permalink,n=(0,fe.Z)().siteConfig.url,a=function(){var e=(0,fe.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,V.Z)(t)}(),l=t?""+n+t:a;return r.createElement(de.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function pe(e){var t=(0,fe.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,l=a.localeConfigs,c=(0,i.LU)(),s=c.metadatas,u=c.image,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,V.Z)(n),p=(0,i.pe)(d),E=o,k=l[o].direction;return r.createElement(r.Fragment,null,r.createElement(de.Z,null,r.createElement("html",{lang:E,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:b}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&r.createElement(he.Z,{image:u}),v&&r.createElement(he.Z,{image:v}),r.createElement(he.Z,{description:f,keywords:h}),r.createElement(be,null),r.createElement(ge,null),r.createElement(ve,(0,m.Z)({tag:i.HX,locale:o},g)),r.createElement(de.Z,null,s.map((function(e,t){return r.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var Ee=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var ke=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return Ee(),r.createElement(me,null,r.createElement(pe,e),r.createElement(u,null),r.createElement(E,null),r.createElement(j,null),r.createElement("div",{className:(0,a.Z)(i.kM.wrapper.main,o,l)},t),!n&&r.createElement(X,null))}},55537:function(e,t,n){"use strict";var r=n(87462),a=n(63366),o=n(67294),l=n(36742),i=n(98465),c=n(44996),s=n(52263),u=n(99558),m=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,a.Z)(e,m),p=(0,c.Z)(v.href||"/"),E={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)},k=o.createElement(i.Z,{sources:E,alt:v.alt||d||t});return o.createElement(l.Z,(0,r.Z)({to:p},b,v.target&&{target:v.target}),v.src&&(h?o.createElement("div",{className:h},k):o.createElement(o.Fragment,null,k)),null!=d&&o.createElement("b",{className:g},d))}},5525:function(e,t,n){"use strict";n.d(t,{O:function(){return g}});var r=n(87462),a=n(63366),o=n(67294),l=n(86010),i=n(36742),c=n(44996),s=n(18617),u=n(13919),m=n(77819),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function g(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,g=void 0===h?"":h,b=e.prependBaseUrlToHref,p=(0,a.Z)(e,d),E=(0,c.Z)(m),k=(0,c.Z)(n),_=(0,c.Z)(f,{forcePrependBaseUrl:!0}),Z=v&&f&&!(0,u.Z)(f),w="dropdown__link--active"===g;return o.createElement(i.Z,(0,r.Z)({},f?{href:b?_:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(g)?"":g,to:E},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(k)}}:null),p),Z?o.createElement("span",null,v,o.createElement(s.Z,w&&{width:12,height:12})):v)}function b(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,a.Z)(e,f),s=o.createElement(g,(0,r.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?o.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(g,(0,r.Z)({className:(0,l.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,l=void 0!==n&&n,i=(e.position,(0,a.Z)(e,h)),c=l?p:b;return o.createElement(c,(0,r.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,m.E)(l)}))}},76400:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),o=n(67294),l=n(5525),i=n(80907),c=n(86010),s=n(77819),u=n(99558),m=n(18780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,d),g=(0,i.Iw)(v),b=g.activeVersion,p=g.activeDoc,E=(0,u.J)(v).preferredVersion,k=(0,i.yW)(v),_=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,m.uniq)([b,E,k].filter(Boolean)),n),Z=(0,s.E)(h.mobile);return o.createElement(l.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[Z]=(null==p?void 0:p.sidebar)&&p.sidebar===_.sidebar,t)),activeClassName:Z,label:null!=f?f:_.id,to:_.path}))}},59308:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(87462),a=n(63366),o=n(67294),l=n(5525),i=n(23154),c=n(80907),s=n(99558),u=n(24973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,p=(0,a.Z)(e,m),E=(0,c.Iw)(v),k=(0,c.gB)(v),_=(0,c.yW)(v),Z=(0,s.J)(v),w=Z.preferredVersion,y=Z.savePreferredVersionName;var N,C=(N=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(g,N,b)),S=null!=(t=null!=(n=E.activeVersion)?n:w)?t:_,T=f&&C?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,I=f&&C?void 0:d(S).path;return C.length<=1?o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:T,to:I,isActive:h?function(){return!1}:void 0})):o.createElement(i.Z,(0,r.Z)({},p,{mobile:f,label:T,to:I,items:C,isActive:h?function(){return!1}:void 0}))}},47250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(87462),a=n(63366),o=n(67294),l=n(5525),i=n(80907),c=n(99558),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,h=(0,i.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:b,to:p}))}},23154:function(e,t,n){"use strict";var r=n(87462),a=n(63366),o=n(67294),l=n(86010),i=n(99558),c=n(5525),s=n(77819),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),g=h[0],b=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":g})},o.createElement(c.O,(0,r.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,i.be)(),h=f(n,v),g=(0,i.uR)({initialState:function(){return!h}}),b=g.collapsed,p=g.toggleCollapsed,E=g.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(c.O,(0,r.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),l=n?h:v;return o.createElement(l,r)}},77819:function(e,t,n){"use strict";n.d(t,{Z:function(){return k},E:function(){return E}});var r=n(63366),a=n(67294),o=n(5525),l=n(23154),i=n(87462),c=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,r.Z)(e,c);return a.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(52263),m=n(99558),d="iconLanguage_3vod",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,r.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,g=v.locales,b=v.localeConfigs,p=(0,m.l5)();function E(e){return b[e].label}var k=g.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),_=[].concat(n,k,o),Z=t?"Languages":E(h);return a.createElement(l.Z,(0,i.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{className:d}),a.createElement("span",null,Z)),items:_}))}var h=n(54755);function g(e){return e.mobile?null:a.createElement(h.Z,null)}var b=["type"],p={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return g},dropdown:function(){return l.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(76400).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,r.Z)(e,b),o=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(o);return a.createElement(l,n)}},41217:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294),a=n(99105),o=n(99558),l=n(44996);function i(e){var t=e.title,n=e.description,i=e.keywords,c=e.image,s=e.children,u=(0,o.pe)(t),m=(0,l.C)().withBaseUrl,d=c?m(c,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),i&&r.createElement("meta",{name:"keywords",content:Array.isArray(i)?i.join(","):i}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},82924:function(e,t,n){"use strict";var r=n(67294).createContext(void 0);t.Z=r},98465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(87462),a=n(63366),o=n(67294),l=n(86010),i=n(72389),c=n(85350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,i.Z)(),n=(0,c.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},85350:function(e,t,n){"use strict";var r=n(67294),a=n(82924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},93783:function(e,t,n){"use strict";var r=n(67294),a=n(10412),o="desktop",l="mobile",i="ssr";function c(){return a.Z.canUseDOM?window.innerWidth>996?o:l:i}t.Z=function(){var e=(0,r.useState)((function(){return c()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],l="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,l)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},54755:function(e,t,n){"use strict";var r=n(67294),a=n(94184),o=n.n(a),l=n(5977),i=n(52263),c=n(28084);t.Z=function(e){var t=(0,r.useRef)(!1),a=(0,r.useRef)(null),s=(0,l.k6)(),u=(0,i.Z)().siteConfig,m=(void 0===u?{}:u).baseUrl,d=(0,c.usePluginData)("docusaurus-lunr-search"),f=function(){t.current||(Promise.all([fetch(""+m+d.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+m+d.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(566),n.e(684)]).then(n.bind(n,50787)),Promise.all([n.e(532),n.e(572)]).then(n.bind(n,32572))]).then((function(e){var t=e[0],n=e[1],r=e[2].default;0!==t.length&&function(e,t,n){new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,n){var r=m+n.url;document.createElement("a").href=r,s.push(r)}})}(t,n,r)})),t.current=!0)},v=(0,r.useCallback)((function(t){a.current.contains(t.target)||a.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:v,onBlur:v,ref:a}))}},94184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);