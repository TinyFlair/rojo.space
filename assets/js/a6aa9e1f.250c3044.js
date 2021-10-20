"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[89],{46165:function(e,a,t){t.d(a,{Z:function(){return E}});var r=t(63366),n=t(67294),l=t(86010),i=t(65186),s=t(36742),m="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",g="sidebarItem_2UVv",d="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",p=t(24973);function v(e){var a=e.sidebar;return 0===a.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},a.title),n.createElement("ul",{className:c},a.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];var E=function(e){var a=e.sidebar,t=e.toc,s=e.children,m=(0,r.Z)(e,h),o=a&&a.items.length>0;return n.createElement(i.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:a})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),t&&n.createElement("div",{className:"col col--2"},t))))}},44428:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(67294),n=t(52263),l=t(46165),i=t(94884),s=t(36742),m=t(24973);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(s.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(99558);var g=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,n.Z)().siteConfig.title,g=a.blogDescription,d=a.blogTitle,u="/"===a.permalink?m:d;return r.createElement(l.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a}))}},94884:function(e,a,t){t.d(a,{Z:function(){return _}});var r=t(67294),n=t(86010),l=t(3905),i=t(24973),s=t(36742),m=t(44996),o=t(99558),c=t(96845),g=t(86146),d="blogPostTitle_GeHD",u="blogPostData_291c",p="blogPostDetailsFull_3kfx",v=t(19817),h="image_1yU8";var E=function(e){var a=e.author,t=a.name,n=a.title,l=a.url,i=a.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:h,src:i,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_1R69";function f(e){var a=e.authors,t=e.assets;return 0===a.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},a.map((function(e,a){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",b),key:a},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=t.authorsImageUrls[a])?l:e.imageURL})}))})))}var _=function(e){var a,t,h,E,b=(h=(0,o.c2)().selectMessage,function(e){var a=Math.ceil(e);return h(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),_=(0,m.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,M=void 0!==w&&w,L=P.date,U=P.formattedDate,y=P.permalink,I=P.tags,x=P.readingTime,C=P.title,R=P.editUrl,A=P.authors,B=null!=(a=k.image)?a:Z.image,D=!M&&T,F=I.length>0;return r.createElement("article",{className:M?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=M?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:d,itemProp:"headline"},M?C:r.createElement(s.Z,{itemProp:"url",to:y},C)),r.createElement("div",{className:(0,n.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},U),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",b(x))),r.createElement(f,{authors:A,assets:k}))),B&&r.createElement("meta",{itemProp:"image",content:_(B,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:c.Z},N)),(F||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[p]=M,t))},F&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":D})},r.createElement(v.Z,{tags:I})),M&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:R})),D&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":F})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86146:function(e,a,t){t.d(a,{Z:function(){return d}});var r=t(67294),n=t(24973),l=t(87462),i=t(63366),s=t(86010),m="iconEdit_2_ui",o=["className"],c=function(e){var a=e.className,t=(0,i.Z)(e,o);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},g=t(99558);function d(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:g.kM.common.editThisPage},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},19817:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(67294),n=t(86010),l=t(24973),i=t(36742),s="tag_1Okp",m="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){var a,t=e.permalink,l=e.name,c=e.count;return r.createElement(i.Z,{href:t,className:(0,n.Z)(s,(a={},a[m]=!c,a[o]=c,a))},l,c&&r.createElement("span",null,c))},g="tags_2ga9",d="tag_11ep";function u(e){var a=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(g,"padding--none","margin-left--sm")},a.map((function(e){var a=e.label,t=e.permalink;return r.createElement("li",{key:t,className:d},r.createElement(c,{name:a,permalink:t}))}))))}}}]);