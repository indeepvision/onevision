"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[9111],{876:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>b});var t=r(2784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,b=p["".concat(u,".").concat(d)]||p[d]||c[d]||l;return r?t.createElement(b,i(i({ref:n},m),{},{components:r})):t.createElement(b,i({ref:n},m))}));function b(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9611:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(7896),a=(r(2784),r(876));const l={sidebar_position:9},i="Math",o={unversionedId:"programming/libraries/math",id:"programming/libraries/math",title:"Math",description:"Through the Math module features such as rounding, calculating power and trigonometric functions can be accessed. This synchronous methods for mathematical operations are designed to be efficient for real-time calculations.",source:"@site/docs/programming/3_libraries/9-math.md",sourceDirName:"programming/3_libraries",slug:"/programming/libraries/math",permalink:"/onevision/docs/programming/libraries/math",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"programmingSidebar",previous:{title:"TCP",permalink:"/onevision/docs/programming/libraries/tcp"},next:{title:"Time",permalink:"/onevision/docs/programming/libraries/time"}},u={},s=[{value:"round()",id:"round",level:3},{value:"ceil()",id:"ceil",level:3},{value:"floor()",id:"floor",level:3},{value:"max()",id:"max",level:3},{value:"min()",id:"min",level:3},{value:"pow()",id:"pow",level:3},{value:"sqrt()",id:"sqrt",level:3},{value:"abs()",id:"abs",level:3},{value:"sin()",id:"sin",level:3},{value:"cos()",id:"cos",level:3},{value:"tan()",id:"tan",level:3},{value:"mean()",id:"mean",level:3},{value:"median()",id:"median",level:3},{value:"randint()",id:"randint",level:3},{value:"random()",id:"random",level:3}],m={toc:s},p="wrapper";function c(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math"},"Math"),(0,a.kt)("p",null,"Through the ",(0,a.kt)("strong",{parentName:"p"},"Math")," module features such as rounding, calculating power and trigonometric functions can be accessed. This synchronous methods for mathematical operations are designed to be efficient for real-time calculations. "),(0,a.kt)("h3",{id:"round"},"round()"),(0,a.kt)("p",null,"Rounds a number to the specified number of digits to keep."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"round(originalNumber: number, keepDigits: number): number;\n")),(0,a.kt)("h3",{id:"ceil"},"ceil()"),(0,a.kt)("p",null,"Rounds a number up to the specified number of digits to keep."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ceil(originalNumber: number, keepDigits: number): number;\n")),(0,a.kt)("h3",{id:"floor"},"floor()"),(0,a.kt)("p",null,"Rounds a number down to the specified number of digits to keep."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"floor(originalNumber: number, keepDigits: number): number;\n")),(0,a.kt)("h3",{id:"max"},"max()"),(0,a.kt)("p",null,"Gets the maximum value between two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"max(value1: number, value2: number): number;\n")),(0,a.kt)("h3",{id:"min"},"min()"),(0,a.kt)("p",null,"Gets the minimum value between two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"min(value1: number, value2: number): number;\n")),(0,a.kt)("h3",{id:"pow"},"pow()"),(0,a.kt)("p",null,"Returns the value of a base expression taken to a specified power."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"pow(base: number, exponent: number): number;\n")),(0,a.kt)("h3",{id:"sqrt"},"sqrt()"),(0,a.kt)("p",null,"Returns the square root of a number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sqrt(value: number): number;\n")),(0,a.kt)("h3",{id:"abs"},"abs()"),(0,a.kt)("p",null,"Returns the absolute value of a number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"abs(value: number): number;\n")),(0,a.kt)("h3",{id:"sin"},"sin()"),(0,a.kt)("p",null,"Returns the sine of the given angle (in degrees)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sin(value: number): number;\n")),(0,a.kt)("h3",{id:"cos"},"cos()"),(0,a.kt)("p",null,"Returns the cosine of the given angle (in degrees)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"cos(value: number): number;\n")),(0,a.kt)("h3",{id:"tan"},"tan()"),(0,a.kt)("p",null,"Returns the tangent of the given angle (in degrees)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"tan(value: number): number;\n")),(0,a.kt)("h3",{id:"mean"},"mean()"),(0,a.kt)("p",null,"Computes the mean value of a list of numeric values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mean(data: number[]): number;\n")),(0,a.kt)("h3",{id:"median"},"median()"),(0,a.kt)("p",null,"Computes the median value of a list of numeric values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"median(data: number[]): number;\n")),(0,a.kt)("h3",{id:"randint"},"randint()"),(0,a.kt)("p",null,"Returns a random integer between the specified min and max values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"randint(min: number, max: number): number;\n")),(0,a.kt)("h3",{id:"random"},"random()"),(0,a.kt)("p",null,"Returns a random float between 0 and 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"random(): number;\n")))}c.isMDXComponent=!0}}]);