"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[9619],{876:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>d});var t=a(2784);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,d=c["".concat(l,".").concat(u)]||c[u]||g[u]||i;return a?t.createElement(d,o(o({ref:n},m),{},{components:a})):t.createElement(d,o({ref:n},m))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8548:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var t=a(7896),r=(a(2784),a(876));const i={sidebar_position:8},o="Programming Guidelines",p={unversionedId:"programming/language_basics/programming-style",id:"programming/language_basics/programming-style",title:"Programming Guidelines",description:"Adopting a consistent programming style and adhering to naming conventions are crucial for writing clean, readable, and maintainable code. Here are the best practices for programming style and naming conventions in OneVision Scripts.",source:"@site/docs/programming/2_language_basics/8-programming-style.md",sourceDirName:"programming/2_language_basics",slug:"/programming/language_basics/programming-style",permalink:"/onevision/docs/programming/language_basics/programming-style",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"programmingSidebar",previous:{title:"Exception handling",permalink:"/onevision/docs/programming/language_basics/exception-handling"},next:{title:"Libraries",permalink:"/onevision/docs/category/libraries"}},l={},s=[{value:"Programming Style",id:"programming-style",level:3},{value:"Naming Conventions",id:"naming-conventions",level:3}],m={toc:s},c="wrapper";function g(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"programming-guidelines"},"Programming Guidelines"),(0,r.kt)("p",null,"Adopting a consistent programming style and adhering to naming conventions are crucial for writing clean, readable, and maintainable code. Here are the best practices for programming style and naming conventions in OneVision Scripts."),(0,r.kt)("h3",{id:"programming-style"},"Programming Style"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Indentation"),": Use consistent indentation to improve code readability. Typically 4 spaces per indentation level. The indentation is usually added automatically by the intellisense of OneVision, however this should be ensured specially after copy and paste. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function example() {\n    if (condition) {\n        // Indented code\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Braces"),": Place opening braces ",(0,r.kt)("inlineCode",{parentName:"p"},"{")," on the same line as the statement and closing braces ",(0,r.kt)("inlineCode",{parentName:"p"},"}")," on a new line aligned with the start of the statement."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"if (condition) {\n    // Code block\n} else {\n    // Code block\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Spacing"),": Use spaces around operators and after commas to enhance readability."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"var sum = a + b;\nfunction example(param1: number, param2: number) {\n    // Code block\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Comments"),": Use comments to explain the purpose of code blocks, especially complex logic. Use single-line comments (",(0,r.kt)("inlineCode",{parentName:"p"},"//"),") for short explanations and multi-line comments (",(0,r.kt)("inlineCode",{parentName:"p"},"/** ... */"),") for detailed explanations. Make sure you add a simple explanation for all global variables, functions and function blocks using multi-line comments."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Single-line comment\nvar x = 10;  // Initialize x to 10\n\n/** Global variable with description*/\nglobal var y = 100; \n\n/**\n * Multi-line comment\n * This function calculates the sum of two numbers.\n */\nfunction add(a: number, b: number): number {\n    return a + b;\n}\n")))),(0,r.kt)("h3",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Variables and Functions"),": Use camelCase for variable and function names. Names should be descriptive and concise."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'var firstName = "John";\nfunction calculateSum(a: number, b: number): number {\n    return a + b;\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Constants"),": Use UPPER_CASE_WITH_UNDERSCORES for constant values. Add a description for each constant variable."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Maximum number of users */\nconst global var MAX_USERS = 100;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Function Blocks"),": Use PascalCase for function block names."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"block UserAccount {\n    in var var2;\n    in var var1;\n\n    out var result; \n\n    result = var1 + var2; \n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interfaces"),": Use PascalCase prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," for interfaces."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IUser {\n    name: string;\n    age: number;\n}\n")))))}g.isMDXComponent=!0}}]);