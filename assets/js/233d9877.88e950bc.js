"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[9066],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(876));const i={sidebar_position:8},o="TCP",l={unversionedId:"programming/libraries/tcp",id:"programming/libraries/tcp",title:"TCP",description:"This module provides a TCP client implementation for establishing connections and exchanging data with TCP network services.",source:"@site/docs/programming/3_libraries/8-tcp.md",sourceDirName:"programming/3_libraries",slug:"/programming/libraries/tcp",permalink:"/onevision/docs/programming/libraries/tcp",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"programmingSidebar",previous:{title:"FTP",permalink:"/onevision/docs/programming/libraries/ftp"},next:{title:"Math",permalink:"/onevision/docs/programming/libraries/math"}},s={},c=[{value:"TCPClient",id:"tcpclient",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"connect()",id:"connect",level:3},{value:"disconnect()",id:"disconnect",level:3},{value:"waitData()",id:"waitdata",level:3},{value:"waitNewData()",id:"waitnewdata",level:3},{value:"getData()",id:"getdata",level:3},{value:"clearData()",id:"cleardata",level:3},{value:"sendData()",id:"senddata",level:3},{value:"isConnected()",id:"isconnected",level:3},{value:"Properties",id:"properties",level:2},{value:"host",id:"host",level:3},{value:"port",id:"port",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tcp"},"TCP"),(0,a.kt)("p",null,"This module provides a TCP client implementation for establishing connections and exchanging data with TCP network services."),(0,a.kt)("h2",{id:"tcpclient"},"TCPClient"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"TCPClient")," class represents a TCP client that enables communication with TCP network services. It allows you to connect to a server specified by a host address and port number."),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"Creates a new TCP Client instance with a specified host and port."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new TCPClient(host: string, port: number);\n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"connect"},"connect()"),(0,a.kt)("p",null,"Initiates a connection with the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"connect(): Promise<void>;\n")),(0,a.kt)("h3",{id:"disconnect"},"disconnect()"),(0,a.kt)("p",null,"Terminates the connection with the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"disconnect(): Promise<void>;\n")),(0,a.kt)("h3",{id:"waitdata"},"waitData()"),(0,a.kt)("p",null,"Waits until the client has data available. Returns true if data is received within the optional timeout period; otherwise, returns false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"waitData(timeout?: number): Promise<boolean>;\n")),(0,a.kt)("h3",{id:"waitnewdata"},"waitNewData()"),(0,a.kt)("p",null,"Waits until the client receives new data. Returns true if new data is received within the optional timeout period; otherwise, returns false. This method waits for new data only; if data was already available before calling, it will wait for new data to arrive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"waitNewData(timeout?: number): Promise<boolean>;\n")),(0,a.kt)("h3",{id:"getdata"},"getData()"),(0,a.kt)("p",null,"Returns the data received from the server. Throws an error if the input buffer is empty."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"getData(): string;\n")),(0,a.kt)("h3",{id:"cleardata"},"clearData()"),(0,a.kt)("p",null,"Clears the data buffer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"clearData(): void;\n")),(0,a.kt)("h3",{id:"senddata"},"sendData()"),(0,a.kt)("p",null,"Sends a stream of data to the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sendData(data: string): Promise<void>;\n")),(0,a.kt)("h3",{id:"isconnected"},"isConnected()"),(0,a.kt)("p",null,"Checks if the client is currently connected to the server. Returns true if connected; otherwise, returns false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"isConnected(): boolean;\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"host"},"host"),(0,a.kt)("p",null,"Host address of the TCP server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"string host;\n")),(0,a.kt)("h3",{id:"port"},"port"),(0,a.kt)("p",null,"Port number of the TCP server. Default is 22."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"number port;\n")))}u.isMDXComponent=!0}}]);