"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[8877],{876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,g=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7896),a=(t(2784),t(876));const i={sidebar_position:5},o="Functions",l={unversionedId:"programming/language_basics/functions",id:"programming/language_basics/functions",title:"Functions",description:"In OneVision Scripts, functions allow you to encapsulate a set of instructions into a reusable block of code. Functions are essential for organizing code and reusing logic. They help in breaking down complex operations into smaller, manageable tasks.",source:"@site/docs/programming/2_language_basics/5-functions.md",sourceDirName:"programming/2_language_basics",slug:"/programming/language_basics/functions",permalink:"/onevision/docs/programming/language_basics/functions",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"programmingSidebar",previous:{title:"Flow control",permalink:"/onevision/docs/programming/language_basics/flow-control"},next:{title:"Function blocks",permalink:"/onevision/docs/programming/language_basics/function-blocks"}},s={},c=[{value:"Defining a Function",id:"defining-a-function",level:3},{value:"Calling a Function",id:"calling-a-function",level:3},{value:"Function Parameters and Return Types",id:"function-parameters-and-return-types",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions"},"Functions"),(0,a.kt)("p",null,"In OneVision Scripts, functions allow you to encapsulate a set of instructions into a reusable block of code. Functions are essential for organizing code and reusing logic. They help in breaking down complex operations into smaller, manageable tasks.\nFunctions in OneVision Scripts are similar to those in TypeScript, making it easy to define, call, and manage functions."),(0,a.kt)("h3",{id:"defining-a-function"},"Defining a Function"),(0,a.kt)("p",null,"A function in OneVision Scripts is defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," keyword followed by the function name and a pair of parentheses ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," containing any parameters. The function body is enclosed within curly braces ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function functionName(parameter1: type, parameter2: type): returnType {\n    // Function body\n}\n")),(0,a.kt)("p",null,"For example: "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function add(a: number, b: number): number {\n    return a + b;\n}\n")),(0,a.kt)("h3",{id:"calling-a-function"},"Calling a Function"),(0,a.kt)("p",null,"To call a function, use the function name followed by parentheses ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," containing any arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"functionName(argument1, argument2);\n")),(0,a.kt)("p",null,"For example, using the definition above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let sum = add(5, 3);  // sum will be 8\nconsole.log(sum);\n")),(0,a.kt)("h3",{id:"function-parameters-and-return-types"},"Function Parameters and Return Types"),(0,a.kt)("p",null,"Functions can take parameters and return a value. You can specify the type of each parameter and the return type of the function. If a return type is specified, OneVision will force you to return the type for any end of the function."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example with Parameters and Return Type:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function multiply(x: number, y: number): number {\n    return x * y;\n}\n\nlet result = multiply(4, 5);  // result will be 20\nconsole.log(result);\n")))}m.isMDXComponent=!0}}]);