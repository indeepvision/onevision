"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[4798],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),p=o,h=c["".concat(s,".").concat(p)]||c[p]||d[p]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7896),o=(n(2784),n(876));const i={sidebar_position:14},a="Histogram",l={unversionedId:"programming/vision_elements/elements/histogram",id:"programming/vision_elements/elements/histogram",title:"Histogram",description:"The Histogram class contains the complete data of an histogram. It is derived from the VisionElement base class.",source:"@site/docs/programming/4_vision_elements/2_elements/14-histogram.md",sourceDirName:"programming/4_vision_elements/2_elements",slug:"/programming/vision_elements/elements/histogram",permalink:"/onevision/docs/programming/vision_elements/elements/histogram",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"programmingSidebar",previous:{title:"Ellipse2d",permalink:"/onevision/docs/programming/vision_elements/elements/ellipse2d"},next:{title:"Image",permalink:"/onevision/docs/programming/vision_elements/elements/image"}},s={},m=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>start()</code>",id:"start",level:3},{value:"<code>end()</code>",id:"end",level:3},{value:"<code>binWidth()</code>",id:"binwidth",level:3},{value:"<code>numBins()</code>",id:"numbins",level:3},{value:"<code>getCounts()</code>",id:"getcounts",level:3},{value:"<code>getCount()</code>",id:"getcount",level:3},{value:"<code>isValid()</code>",id:"isvalid",level:3},{value:"Props",id:"props",level:2},{value:"<code>color</code>",id:"color",level:3},{value:"<code>filled</code>",id:"filled",level:3}],u={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"histogram"},"Histogram"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Histogram")," class contains the complete data of an histogram. It is derived from the ",(0,o.kt)("a",{parentName:"p",href:"./vision-element"},"VisionElement")," base class."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("p",null,"Empty constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"new Histogram(): Histogram;\n")),(0,o.kt)("p",null,"Constructor with the initial values of the histogram. Each element of the array is a bin that contains the counts, or frequency of the value of the bin.\nThe start value will be 0, the end value is the length of the array minus 1, and the bin width is 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"new Histogram(values: number[]): Histogram;\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"start"},(0,o.kt)("inlineCode",{parentName:"h3"},"start()")),(0,o.kt)("p",null,"Returns the value of the first bin of the histogram."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"start(): number;\n")),(0,o.kt)("h3",{id:"end"},(0,o.kt)("inlineCode",{parentName:"h3"},"end()")),(0,o.kt)("p",null,"Returns the value of the last bin of the histogram."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"end(): number;\n")),(0,o.kt)("h3",{id:"binwidth"},(0,o.kt)("inlineCode",{parentName:"h3"},"binWidth()")),(0,o.kt)("p",null,"Returns the width of each bin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"binWidth(): number;\n")),(0,o.kt)("h3",{id:"numbins"},(0,o.kt)("inlineCode",{parentName:"h3"},"numBins()")),(0,o.kt)("p",null,"Returns the number of bins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"numBins(): number;\n")),(0,o.kt)("h3",{id:"getcounts"},(0,o.kt)("inlineCode",{parentName:"h3"},"getCounts()")),(0,o.kt)("p",null,"Returns the list of histogram counts for all bins. The counts are the frequency of the value of the bin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"getCounts(): number[];\n")),(0,o.kt)("h3",{id:"getcount"},(0,o.kt)("inlineCode",{parentName:"h3"},"getCount()")),(0,o.kt)("p",null,"Returns the histogram count at the given bin index."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"getCount(index: number): number;\n")),(0,o.kt)("h3",{id:"isvalid"},(0,o.kt)("inlineCode",{parentName:"h3"},"isValid()")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the histogram values are valid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"isValid(): boolean;\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"color"},(0,o.kt)("inlineCode",{parentName:"h3"},"color")),(0,o.kt)("p",null,"The color of the line and filling of the histogram in hexadecimal format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"color: string;\n")),(0,o.kt)("h3",{id:"filled"},(0,o.kt)("inlineCode",{parentName:"h3"},"filled")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the histogram will be filled with the color."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-onevision"},"filled: boolean;\n")))}d.isMDXComponent=!0}}]);