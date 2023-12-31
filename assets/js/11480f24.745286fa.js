"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[4185],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7896),r=(n(2784),n(876));const i={sidebar_position:7},o="Mes",l={unversionedId:"guide/mes",id:"version-10.x/guide/mes",title:"Mes",description:"The Mes section name comes from Manufacturing Execution System, because this is where you can query the internal production database.",source:"@site/versioned_docs/version-10.x/guide/mes.md",sourceDirName:"guide",slug:"/guide/mes",permalink:"/onevision/docs/10.x/guide/mes",draft:!1,tags:[],version:"10.x",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guideSidebar",previous:{title:"Home",permalink:"/onevision/docs/10.x/guide/home"},next:{title:"Project",permalink:"/onevision/docs/10.x/category/project"}},s={},u=[{value:"Update",id:"update",level:3},{value:"Auto-update",id:"auto-update",level:3},{value:"Configure or disable Mes",id:"configure-or-disable-mes",level:2},{value:"Automatic data removal",id:"automatic-data-removal",level:2},{value:"Current size",id:"current-size",level:3},{value:"Data visualization",id:"data-visualization",level:2},{value:"Filter the units",id:"filter-the-units",level:3},{value:"Show/hide columns",id:"showhide-columns",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mes"},"Mes"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Mes")," section name comes from ",(0,r.kt)("strong",{parentName:"p"},"Manufacturing Execution System"),", because this is where you can query the internal production database."),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("h3",{id:"auto-update"},"Auto-update"),(0,r.kt)("h2",{id:"configure-or-disable-mes"},"Configure or disable Mes"),(0,r.kt)("p",null,"There are 4 basic configuration options for the Mes service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Max. time range (days)"),(0,r.kt)("li",{parentName:"ul"},"Max. data size (Mb)"),(0,r.kt)("li",{parentName:"ul"},"Max number of units"),(0,r.kt)("li",{parentName:"ul"},"Enable/disable Mes")),(0,r.kt)("p",null,"To configure or disable the Mes, go to the ","![Settings]","....."),(0,r.kt)("h2",{id:"automatic-data-removal"},"Automatic data removal"),(0,r.kt)("p",null,"The Mes service keeps track of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total units stored in the database"),(0,r.kt)("li",{parentName:"ul"},"Total size of the stored data"),(0,r.kt)("li",{parentName:"ul"},"Creation date of each unit")),(0,r.kt)("p",null,"It automatically cleans the database of old data when the configured limits are reached."),(0,r.kt)("h3",{id:"current-size"},"Current size"),(0,r.kt)("p",null,"The database size can be checked in the status bottom bar..........."),(0,r.kt)("h2",{id:"data-visualization"},"Data visualization"),(0,r.kt)("h3",{id:"filter-the-units"},"Filter the units"),(0,r.kt)("p",null,"The list of units can be filtered by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unit serial"),(0,r.kt)("li",{parentName:"ul"},"Model"),(0,r.kt)("li",{parentName:"ul"},"Project that was in use when the unit was created"),(0,r.kt)("li",{parentName:"ul"},"Creation date"),(0,r.kt)("li",{parentName:"ul"},"Results")),(0,r.kt)("h3",{id:"showhide-columns"},"Show/hide columns"))}p.isMDXComponent=!0}}]);