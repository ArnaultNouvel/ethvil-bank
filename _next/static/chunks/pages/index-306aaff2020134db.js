(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(57)}])},57:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Je}});var r=n(5893),i=n(9008),a=n(5553),o=function(e){try{var t=(0,a.dF)(e);return t?Number(t).toFixed(6):t}catch(n){}},s=n(7044),u=n(6010),c=n(7294);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){var n=void 0===t?4:t;return"".concat(e.substring(0,n+2),"\u2026").concat(e.substring(e.length-n))}var f={1:"",3:"ropsten.",4:"rinkeby.",5:"goerli.",42:"kovan.",69:"kovan-optimistic."};function p(e,t){switch(e){case"Account":var n=l(t,2),r=n[0],i=n[1];return"https://".concat(f[r],"etherscan.io/address/").concat(i);case"Transaction":var a=l(t,2),o=a[0],s=a[1];return"https://".concat(f[o],"etherscan.io/tx/").concat(s)}}var h=function(e){var t=e.address,n=e.color,i=e.type,a=e.className,o=e.children,l=(0,s.Ge)("INFURA").chainId,f=(0,c.useMemo)((function(){return p(i,[l,t])}),[t,l,i]),h=(0,c.useMemo)((function(){return(0,u.Z)(function(e){return"green"===(void 0===e?"white":e)?"underline text-green-500 hover:text-green-400":"underline text-gray-200 hover:text-gray-100"}(n),a)}),[a,n]),v=(0,c.useMemo)((function(){return null!==o&&void 0!==o?o:d(t)}),[t,o]);return l?(0,r.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:h,children:v}):null},v=n(1521),m=n(5666),y=n.n(m),b=n(3288),x=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"}],"name":"InsufficientBid","type":"error"},{"inputs":[],"name":"NothingToWithdraw","type":"error"},{"inputs":[{"internalType":"uint256","name":"endsAt","type":"uint256"}],"name":"ToEarlyToEnd","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bid","type":"uint256"},{"indexed":false,"internalType":"address","name":"director","type":"address"}],"name":"Bid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"director","type":"address"}],"name":"GameEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bid","type":"uint256"},{"indexed":false,"internalType":"address","name":"director","type":"address"}],"name":"GameStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"director","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"directorRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"end","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endsAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBidIncreasePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStartBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerRewardPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"running","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_directorRewardPercent","type":"uint256"}],"name":"setDirectorRewardPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"setDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minBidIncreasePercent","type":"uint256"}],"name":"setMinBidIncreasePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ownerRewardPercent","type":"uint256"}],"name":"setOwnerRewardPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),w=n(6076);function g(e){return function(e,t,n){var r=(0,s.Ge)(n),i=r.library,a=r.account,o=r.chainId;return(0,c.useMemo)((function(){if(!e||!t||!i||!o)return null;try{return new w.CH(e,t,a?i.getSigner(a):i)}catch(n){return console.error("Failed To Get Contract",n),null}}),[e,t,i,o,a])}("0xA169867963e66823625f8D2bb7E3680aB6941C3A",x,e)}function j(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){j(a,r,i,o,s,"next",e)}function s(e){j(a,r,i,o,s,"throw",e)}o(void 0)}))}}function O(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}var k=function(e){var t,n=g(e),r=(0,s.Ge)(e),i=r.chainId,a=r.account,o=(0,b.ZP)("Status".concat(i).concat(a),(t=y().mark((function e(){var t,r,i,a,o,s;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.time("useEvilBankStatus"),e.next=3,Promise.all([n.gameId(),n.director(),n.currentBid(),n.endsAt(),n.running(),n.minBid()]);case 3:var u;return u=e.sent,t=u[0],r=u[1],i=u[2],a=u[3],o=u[4],s=u[5],console.timeEnd("useEvilBankStatus"),e.abrupt("return",{gameId:t,director:r,currentBid:i,endsAt:a,running:o,minBid:s});case 6:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(e){O(a,r,i,o,s,"next",e)}function s(e){O(a,r,i,o,s,"throw",e)}o(void 0)}))})),u=o.data,l=o.error,d=o.mutate;return(0,c.useEffect)((function(){var e=n.filters.Bid(),t=n.filters.GameStart(),r=function(){return d()};return n.on(e,r),n.on(t,r),function(){n.off(e,r),n.off(t,r)}}),[n,d]),{loading:!u&&!l,error:l,status:u,mutate:d}};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E,S,P=(E=(0,v.Z)((function(){var e=k("INFURA"),t=e.status,n=e.loading,r=e.error,i=e.mutate,a=function(e,t){var n=g(t),r=(0,s.Ge)().account,i=(0,s.Ge)(t).chainId,a=(0,b.ZP)(e?"bids-".concat(i,"-").concat(null===e||void 0===e?void 0:e.toHexString()):null,N(y().mark((function t(){var i,a,o;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.time("useEvilBankBids"),i=n.filters.Bid(e),t.next=4,n.queryFilter(i);case 4:return a=t.sent,t.next=7,Promise.all(a.map(N(y().mark((function t(n){var i,a,o,s;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:var u;return i=n.transactionHash,u=n.args,a=u.director,o=u.bid,t.next=4,n.getBlock();case 4:return s=t.sent.timestamp,t.abrupt("return",{transactionHash:i,gameId:e,director:a,bid:o,timestamp:s,isCurrentAccount:a===r});case 6:case"end":return t.stop()}}),t)})))));case 7:return o=t.sent.sort((function(e,t){return t.timestamp-e.timestamp})),console.timeEnd("useEvilBankBids"),t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})))),o=a.data,u=a.error,l=a.mutate;return(0,c.useEffect)((function(){var t=n.filters.Bid(e),r=function(){return l()};return n.on(t,r),function(){n.off(t,r)}}),[n,e,l]),{loading:!o&&!u,error:u,events:o,mutate:l}}(null===t||void 0===t?void 0:t.gameId,"INFURA"),o=a.events,u=a.loading,l=a.error,d=a.mutate;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){T(e,t,n[t])}))}return e}({},t,{mutate:(0,c.useCallback)((function(){return Promise.all([i(),d()])}),[d,i]),events:o,loading:n||u,error:r||l})})),S=2,function(e){if(Array.isArray(e))return e}(E)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(E,S)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),I=P[0],M=P[1],A=function(){var e=M(),t=e.loading,n=e.error,i=e.events;return t||n||!i?null:(0,r.jsxs)("table",{className:"table-auto w-full text-left",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Transaction"}),(0,r.jsx)("th",{children:"Director"}),(0,r.jsx)("th",{className:"text-right",children:"Bid"})]})}),(0,r.jsx)("tbody",{children:i.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(h,{type:"Transaction",address:e.transactionHash,children:new Date(1e3*e.timestamp).toLocaleString()})}),(0,r.jsx)("td",{className:e.isCurrentAccount?"text-green-500":"",children:(0,r.jsx)(h,{type:"Account",address:e.director,color:e.isCurrentAccount?"green":"white"})}),(0,r.jsxs)("td",{className:"text-right font-bold",children:[o(e.bid)," ETH"]})]},e.timestamp)}))})]})},B=n(2283),C=n(4231),D=n(412),F=function(e){try{return(0,a.fi)(e)}catch(t){}};function G(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}var Z=function(e){return(0,c.useCallback)((t=y().mark((function t(n){var r,i;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.validate(n,{abortEarly:!1});case 3:return r=t.sent,t.abrupt("return",{values:r,errors:{}});case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{values:{},errors:t.t0.inner.reduce((function(e,t){return R({},e,H({},t.path,{type:null!==(i=t.type)&&void 0!==i?i:"validation",message:t.message}))}),{})});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(e){G(a,r,i,o,s,"next",e)}function s(e){G(a,r,i,o,s,"throw",e)}o(void 0)}))}),[e]);var t};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var V=function(e){var t=e.color,n=void 0===t?"white":t,i=e.compact,a=void 0!==i&&i,o=e.className,s=e.disabled,l=e.children,d=_(e,["color","compact","className","disabled","children"]),f=(0,c.useMemo)((function(){return function(e,t){switch(e){case"blue":return(0,u.Z)("text-blue-400 border-blue-600 focus-visible:border-blue-600",!t&&"hover:bg-blue-600 hover:text-blue-200");case"green":return(0,u.Z)("text-green-400 border-green-600 focus-visible:border-green-600",!t&&"hover:bg-green-600 hover:text-green-200");case"pink":return(0,u.Z)("text-pink-400 border-pink-600 focus-visible:border-pink-600",!t&&"hover:bg-pink-600 hover:text-pink-200");case"red":return(0,u.Z)("text-red-500 border-red-600 focus-visible:border-red-600",!t&&"hover:bg-red-600 hover:text-red-200");case"yellow":return(0,u.Z)("text-yellow-500 border-yellow-500 focus-visible:border-yellow-600",!t&&"hover:bg-yellow-500 hover:text-yellow-200");case"white":return(0,u.Z)("border-white-600 text-white focus-visible:border-white-600",!t&&"hover:bg-gray-200 hover:text-gray-700");case"gray":default:return(0,u.Z)("text-gray-300 border-gray-400 focus-visible:border-gray-400",!t&&"hover:bg-gray-200 hover:text-gray-700")}}(n,s)}),[n,s]);return(0,r.jsx)("button",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){U(e,t,n[t])}))}return e}({disabled:s,className:(0,u.Z)(f,"uppercase border-2 rounded-lg px-3 py-2 cursor-pointer disabled:opacity-50 disabled:hover:bg-transparent disabled:cursor-default",a?"py-1":"py-2",o)},d,{children:l}))},W=function(e){var t=e.className;return(0,r.jsxs)("svg",{"data-testid":"button-spinner",className:(0,u.Z)("animate-spin",null!==t&&void 0!==t?t:"w-5 h-5"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var K=function(e){var t=e.working,n=void 0!==t&&t,i=e.children,a=e.disabled,o=z(e,["working","children","disabled"]);return(0,r.jsxs)(V,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){q(e,t,n[t])}))}return e}({role:"button"},o,{className:"relative",disabled:a||n,children:[(0,r.jsx)("span",{className:n?"invisible":"visible",children:i}),n&&(0,r.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:(0,r.jsx)(W,{className:(0,u.Z)("w-5 h-5")})})]}))};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}function Y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var J=(0,c.forwardRef)((function(e,t){var n=e.symbol,i=e.className,a=e.error,o=Y(e,["symbol","className","error"]);return(0,r.jsxs)("div",{className:(0,u.Z)("overflow-hidden pr-0 relative flex w-full form-input rounded  bg-gray-700",a?"border-red-500 focus-within:ring-red-500":"focus-within:border-green-500 focus-within:ring-green-500",i),children:[(0,r.jsx)("input",X({ref:t,className:" w-full flex-grow outline-none bg-gray-700 text-white text-right"},o)),(0,r.jsx)("div",{className:"flex flex-col justify-center",children:(0,r.jsx)("span",{className:"text-gray-400 mx-2 h-6 fill-current ",children:n})})]})}));J.displayName="CurrencyInput";var Q=n(5769),$=n(3470);var ee=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}((0,v.Z)((function(){var e,t,n=(0,s.Ge)(),r=n.library,i=n.chainId,a=(0,b.ZP)(["GasPrice",i],(function(){return r.getGasPrice()}),{refreshInterval:6e4}),o=a.data,u=a.error;return{loading:!o&&!u,error:null!==(t=null===u||void 0===u||null===(e=u.data)||void 0===e?void 0:e.message)&&void 0!==t?t:null===u||void 0===u?void 0:u.message,gasprice:o}})),2),te=ee[0],ne=ee[1];function re(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var oe=function(e,t){var n=(0,$.C)(),r=n.loading,i=n.error,u=n.value,l=ne(),d=l.loading,f=l.error,p=l.gasprice,h=g(),v=ae((0,Q.Z)(e,200),1)[0],m=(0,c.useMemo)((function(){var e,n=t&&(null===(e=F(v))||void 0===e?void 0:e.gte(t));return{isValid:n,isReady:n&&!r&&!d}}),[v,r,d,t]),b=m.isValid,x=m.isReady,w=(0,c.useState)(!1),j=w[0],N=w[1],O=(0,c.useState)(),k=O[0],T=O[1],E=(0,c.useState)(0),S=E[0],P=E[1],I=(0,s.Ge)().library;(0,c.useEffect)((function(){if(!v)return P(0);var e,t=(e=y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.t0=P,e.next=5,null===h||void 0===h?void 0:h.estimateGas.bid({value:(0,a.fi)(v)});case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),T((0,D.e)(e.t2));case 12:N(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){re(a,r,i,o,s,"next",e)}function s(e){re(a,r,i,o,s,"throw",e)}o(void 0)}))});b?t():P(0)}),[v,null===h||void 0===h?void 0:h.estimateGas,b,I.blockNumber]);var M,A=(0,c.useMemo)((function(){if(!x)return{bidETH:"N/A",bidUSD:"N/A",estimateGasETH:"N/A",estimateGasUSD:"N/A",totalETH:"N/A",totalUSD:"N/A"};var e=(0,a.fi)(v),t="".concat(o(e)," ETH"),n=Number((0,a.dF)(e))*u,r="".concat(n.toFixed(2)," USD"),i=p.mul(S),s="".concat(o(i)," ETH"),c=Number((0,a.dF)(i))*u,l="".concat(c.toFixed(2)," USD"),d=e.add(i),f="".concat(o(d)," ETH"),h=Number((0,a.dF)(d))*u;return{bidETH:t,bidUSD:r,estimateGasETH:s,estimateGasUSD:l,totalETH:f,totalUSD:"".concat(h.toFixed(2)," USD")}}),[u,v,S,p,x]);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ie(e,t,n[t])}))}return e}({isValid:b,loading:j||d,error:null!==(M=null!==i&&void 0!==i?i:k)&&void 0!==M?M:f},A)},se=function(e){var t=e.bid,n=e.minBid,i=oe(t,n);return(0,r.jsx)("div",{className:"",children:(0,r.jsx)("table",{className:"w-full table-auto font-bold text-left ",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"pr-2 font-normal",children:"Bid"}),(0,r.jsx)("td",{className:"px-2 text-right w-40",children:i.bidETH}),(0,r.jsx)("td",{className:"pl-2 text-right w-40 opacity-50",children:i.bidUSD})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"pr-2 font-normal",children:"Estimated gas"}),(0,r.jsx)("td",{className:"px-2 text-right",children:i.estimateGasETH}),(0,r.jsx)("td",{className:"pl-2 text-right opacity-50",children:i.estimateGasUSD})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"pr-2",children:"Total cost"}),(0,r.jsx)("td",{className:"px-2 text-right",children:i.totalETH}),(0,r.jsx)("td",{className:"pl-2 text-right opacity-50",children:i.totalUSD})]})]})})})};function ue(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ce(e,t,n[t])}))}return e}var de=function(){var e,t,n=M(),i=n.minBid,o=n.mutate,s=g(),u=(0,c.useMemo)((function(){return e=i,(0,C.Ry)({bid:(0,C.Z_)().required().test("is big number","Failed parse the value",(function(e){return!Number.isNaN(e)})).test("is sufficient","Value must be greater or equal than ".concat(e?(0,a.dF)(e):"null"),(function(t){var n;return null===(n=F(t))||void 0===n?void 0:n.gte(null!==e&&void 0!==e?e:0)}))});var e}),[i]),l=Z(u),d=(0,B.cI)({resolver:l,mode:"onTouched",reValidateMode:"onChange"}),f=d.register,p=d.handleSubmit,h=d.formState,v=h.errors,m=h.isSubmitting,b=h.isValid,x=h.isValidating,w=d.reset,j=d.watch;(0,c.useEffect)((function(){i&&w({bid:(0,a.dF)(i)})}),[i,w]);var N,O,k=(0,c.useState)(),T=k[0],E=k[1],S=(N=y().mark((function e(t){var n,r;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(void 0),e.prev=1,n=(0,a.fi)(t.bid),e.next=5,s.bid({value:n});case 5:return r=e.sent,e.next=8,r.wait();case 8:return e.next=10,o();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),E((0,D.e)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var i=N.apply(e,t);function a(e){ue(i,n,r,a,o,"next",e)}function o(e){ue(i,n,r,a,o,"throw",e)}a(void 0)}))}),P=(0,c.useMemo)((function(){return x||m||!b}),[m,b,x]),I=j("bid");return(0,r.jsxs)("form",{onSubmit:p(S),children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("div",{className:"w-full flex space-x-5 overflow-hidden",children:[(0,r.jsx)(J,le({symbol:"ETH"},f("bid",{required:!0}),{id:"bid",name:"bid",autoComplete:"off",className:"flex-grow",error:Boolean(null===(e=v.bid)||void 0===e?void 0:e.message)})),(0,r.jsx)(K,{working:m,color:"green",type:"submit",disabled:P,children:"Deposit"})]}),(0,r.jsx)("div",{className:"text-red-500",children:null!==(O=null===(t=v.bid)||void 0===t?void 0:t.message)&&void 0!==O?O:T})]}),(0,r.jsx)("div",{className:"pt-4",children:(0,r.jsx)(se,{bid:I,minBid:i})})]})},fe=n(7117),pe=n(6083),he=function(e,t){var n=(0,c.useRef)(e);(0,c.useEffect)((function(){n.current=e}),[e]),(0,c.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])},ve=function(e){var t=e.target,n=(0,c.useState)(),i=n[0],a=n[1];return he((function(){var e=new Date;if(t.valueOf()<e.valueOf())a("FINISHED");else{var n=(0,fe.Z)({start:new Date,end:t});a((0,pe.Z)(n))}}),1e3),(0,r.jsx)("span",{className:"FINISHED"===i?"text-red-500":"text-green-500",children:i})},me=function(){var e=M(),t=e.gameId,n=e.endsAt,i=e.currentBid,a=(0,c.useMemo)((function(){var e=n?new Date(1e3*n.toNumber()):null;return{target:e,isFinished:(null===e||void 0===e?void 0:e.valueOf())<Date.now()}}),[n]),s=a.target,u=a.isFinished;return t?(0,r.jsx)("table",{className:"table-auto w-full text-left",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Current bid"}),(0,r.jsxs)("td",{className:"text-right font-bold",children:[o(i)," ETH"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Time left"}),(0,r.jsx)("td",{className:"text-right font-bold",children:(0,r.jsx)(ve,{target:s})})]}),u&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:2,className:"text-green-500 text-center",children:"This game beeing finished, next bid will start a new game !"})})]})}):(0,r.jsx)(r.Fragment,{children:"Loading..."})},ye=function(){var e=M().gameId;return e?(0,r.jsxs)(r.Fragment,{children:["Game N\xb0 ",e.toNumber()]}):(0,r.jsx)(r.Fragment,{children:"Loading..."})};var be=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}((0,v.Z)((function(e){return{color:e.color}})),2),xe=be[0],we=be[1],ge=function(e){switch(e){case"red":return"bg-red-800";default:return"bg-gray-500"}},je=function(e){switch(e){case"red":return"border-red-800";default:return"border-gray-500"}},Ne=function(e){var t=e.color,n=void 0===t?"red":t,i=e.children;return(0,r.jsx)(xe,{color:n,children:(0,r.jsxs)("div",{className:(0,u.Z)("relative sm:border-2 inline-block rounded w-full",je(n)),children:[(0,r.jsx)("div",{className:"absolute bg-gray-900 w-full h-full opacity-70 z-[-10]"}),i]})})},Oe=function(e){var t=e.children;return(0,r.jsx)("div",{className:"p-4",children:t})},ke=function(e){var t=e.large,n=e.children,i=we().color;return(0,r.jsx)("h3",{className:(0,u.Z)(t?"text-xl":"text-l","font-bold uppercase p-2  text-white text-center",ge(i)),children:n})};function Te(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}var Ee=function(){var e,t=g(),n=(0,s.Ge)().account,i=M(),a=i.running,o=i.endsAt,u=i.director,l=(0,c.useState)(!1),d=l[0],f=l[1],p=(0,c.useState)(),h=p[0],v=p[1],m=(0,c.useCallback)((e=y().mark((function e(){var n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(void 0),f(!0),e.prev=2,e.next=5,t.end();case 5:return n=e.sent,e.next=8,n.wait();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),v((0,D.e)(e.t0));case 13:f(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){Te(a,r,i,o,s,"next",e)}function s(e){Te(a,r,i,o,s,"throw",e)}o(void 0)}))}),[t]);return n!==u||!a||1e3*(null===o||void 0===o?void 0:o.toNumber())>Date.now()?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ke,{children:"Manual ending"}),(0,r.jsxs)(Oe,{children:[(0,r.jsxs)("div",{children:["As the last director of this game, you may end it manually and receive your deposit right away. This action will cost some gas.",(0,r.jsx)("br",{}),"You may also wait for someone to start the next game to receive your funds automatically."]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(K,{onClick:m,working:d,color:"green",compact:!0,children:"End game"})}),(0,r.jsx)("div",{className:"text-red-500",children:h})]})]})},Se=function(){return(0,r.jsxs)("div",{className:"p-4 text-center",children:[(0,r.jsx)("p",{children:"Your wallet is connected but targets an unsupported network."}),(0,r.jsx)("p",{children:"Supported networks are Hardhat (local dev), Ropsten Test Net"}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Please open your wallet and select a supported network."})]})},Pe=n(950),Ie=n(5254),Me=new Pe._k({supportedChainIds:[3,31337]}),Ae=new Ie.S({urls:{3:"https://ropsten.infura.io/v3/".concat("06cdc7be39dd496480504dd93e1b403f"),31337:"http://localhost:8545"},defaultChainId:Number("3")});var Be=n(2003),Ce=n.n(Be);function De(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function Fe(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){De(a,r,i,o,s,"next",e)}function s(e){De(a,r,i,o,s,"throw",e)}o(void 0)}))}}var Ge=function(e){var t=e.triedToEagerConnect,i=(0,s.Ge)(),a=i.active,o=i.error,u=i.activate,l=i.chainId,f=i.account,h=i.setError,v=function(){var e=(0,c.useRef)(),t=(0,c.useState)(),r=t[0],i=t[1];function a(){return(a=Fe(y().mark((function t(){var r,i;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.e(54).then(n.bind(n,8054)).then((function(e){return e.default}));case 3:i=t.sent,e.current=new i,null===(r=e.current)||void 0===r||r.startOnboarding();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,c.useEffect)((function(){function e(){return(e=Fe(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce()({timeout:1e3,mustBeMetaMask:!0});case 2:t=e.sent,i(!!t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),{startOnboarding:function(){return a.apply(this,arguments)},stopOnboarding:function(){(null===e||void 0===e?void 0:e.current)&&e.current.stopOnboarding()},isMetaMaskInstalled:r,isWeb3Available:null===window||void 0===window?void 0:window.ethereum}}(),m=v.isMetaMaskInstalled,b=v.isWeb3Available,x=v.startOnboarding,w=v.stopOnboarding,g=(0,c.useState)(!1),j=g[0],N=g[1];(0,c.useEffect)((function(){(a||o)&&(N(!1),w())}),[a,o,w]);var O=function(e){var t=(0,s.Ge)(),n=t.library,r=t.chainId,i=(0,c.useState)(""),a=i[0],o=i[1];return(0,c.useEffect)((function(){if(n&&"string"===typeof e){var t=!1;return n.lookupAddress(e).then((function(e){t||"string"!==typeof e||o(e)})).catch((function(){})),function(){t=!0,o("")}}}),[n,e,r]),a}(f);return o?null:t?"string"!==typeof f?(0,r.jsx)("div",{children:b?(0,r.jsx)(V,{color:"green",disabled:j,onClick:function(){N(!0),u(Me,void 0,!0).catch((function(e){var t,n;t=o,(null!=(n=Pe.ab)&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](t):t instanceof n)?N(!1):h(e)}))},children:m?"Connect to MetaMask":"Connect to Wallet"}):(0,r.jsx)(V,{color:"green",onClick:x,children:"Install Metamask"})}):(0,r.jsx)("a",{href:p("Account",[l,f]),target:"_blank",rel:"noopener noreferrer",children:O||"".concat(d(f,4))}):null},He=function(){var e=function(){var e=(0,s.Ge)(),t=e.activate,n=e.active,r=(0,c.useState)(!1),i=r[0],a=r[1];return(0,c.useEffect)((function(){Me.isAuthorized().then((function(e){e?t(Me,void 0,!0).catch((function(){a(!0)})):a(!0)}))}),[t]),(0,c.useEffect)((function(){!i&&n&&a(!0)}),[i,n]),i}();return(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("p",{className:"p-4",children:["This feature requires connecting to the Ethereum blockchain.",(0,r.jsx)("br",{}),"Please connect your wallet, or install Metamask, to continue."]}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)(Ge,{triedToEagerConnect:e})})]})};function Re(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}var Ze=function(e){var t=e.children,n=(0,s.Ge)("INFURA").chainId,i=(0,s.Ge)(),a=i.account,o=i.library,u=i.error,l=i.chainId,d=(0,c.useMemo)((function(){return"string"===typeof a&&!!o}),[a,o]),f=(0,c.useMemo)((function(){return"UnsupportedChainIdError"===(null===u||void 0===u?void 0:u.name)}),[null===u||void 0===u?void 0:u.name]);return(0,c.useEffect)((function(){var e,t=(e=y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{null===o||void 0===o||o.send("wallet_switchEthereumChain",[{chainId:"0x"+n.toString(16)}])}catch(t){console.error("chainConnect",t)}case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){Re(a,r,i,o,s,"next",e)}function s(e){Re(a,r,i,o,s,"throw",e)}o(void 0)}))});n&&l&&l!=n&&t()}),[l,n,o]),u&&console.error("Connected",{error:u}),d?(0,r.jsx)(r.Fragment,{children:t}):f?(0,r.jsx)(Se,{}):(0,r.jsx)(He,{})},Ue=function(e){var t=e.children;return M().loading?(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("div",{style:{borderTopColor:"transparent"},className:"inline-block w-12 h-12 border-4 border-red-500 border-solid rounded-full animate-spin"}),(0,r.jsx)("div",{className:"text-red-500",children:"Connecting to Ethereum..."})]}):(0,r.jsx)(r.Fragment,{children:t})},_e=function(){return(0,r.jsx)(I,{children:(0,r.jsx)(Ue,{children:(0,r.jsxs)(Ne,{children:[(0,r.jsx)(ke,{large:!0,children:(0,r.jsx)(ye,{})}),(0,r.jsx)(Oe,{children:(0,r.jsx)(me,{})}),(0,r.jsx)(Ee,{}),(0,r.jsx)(ke,{children:"Become the new director"}),(0,r.jsx)(Oe,{children:(0,r.jsx)(Ze,{children:(0,r.jsx)(de,{})})}),(0,r.jsx)(ke,{children:"Bids"}),(0,r.jsx)(Oe,{children:(0,r.jsx)(A,{})})]})})})},Ve=function(){return(0,r.jsxs)("div",{className:"text-left inline-block p-4",children:[(0,r.jsx)("h1",{className:"font-bold text-6xl mb-10 text-center text-red-600",style:{fontFamily:"Nosifer"},children:"ETHvil Bank"}),(0,r.jsxs)("div",{className:"my-4 text-sm text-yellow-500",children:["This application is a demo & portfolio app, therefore it is only connected to the Ropsten Test Network, for now. You may obtain free ETH for this network from a"," ",(0,r.jsx)("a",{className:"underline hover:text-yellow-400",href:"https://duckduckgo.com/?q=ropsten+faucet",children:"Ropsten faucet"}),"."]}),(0,r.jsxs)("div",{children:["Contract"," ",(0,r.jsx)(h,{type:"Account",address:"0xA169867963e66823625f8D2bb7E3680aB6941C3A"})," ",":"]}),(0,r.jsxs)("ul",{className:"list-disc pl-5",children:[(0,r.jsx)("li",{children:"Bid at least 10% more than the previous director to become the director of the bank."}),(0,r.jsx)("li",{children:"If another person becomes the director within 5 minutes, you will receive your bid + 5% bonus. Owner of the contract also gets 1%."}),(0,r.jsx)("li",{children:"If noone becomes a director after you within 5 minutes, you will get at least 95% of your bid back."})]})]})},We=n(1664),qe=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("header",{className:"bg-red-900 text-white fixed top-0 left-0 w-full h-10 flex p-2 justify-between z-10",children:[(0,r.jsx)("div",{children:(0,r.jsx)(We.default,{href:"/",children:(0,r.jsx)("a",{className:"text-white",children:"ETHvil Bank"})})}),(0,r.jsx)("div",{children:t})]}),(0,r.jsx)("div",{className:"h-10"})]})},ze=function(){var e=(0,s.Ge)("INFURA").chainId,t=(0,c.useMemo)((function(){return function(e){if(!e)return"";switch(e){case 1:return"Main Ethereum Network";case 3:return"Ropsten Test Network";case 4:return"Rinkeby Test Network";case 5:return"Goerli Test Network";case 69:return"Optimistic Kovan Test Network";case 2018:return"Dev Network";case 1337:return"DEV - Ganache";case 31337:return"DEV - Hardhat";default:return"UNKNOWN NETWORK (".concat(e,")")}}(e)}),[e]);return t?(0,r.jsx)("span",{title:"Use Metamask to change network",children:t}):(0,r.jsx)("span",{children:"DISCONNECTED"})},Ke=n(3153),Le=n(9583),Xe=function(){return(0,r.jsxs)("footer",{className:"h-30 bg-gray-900 py-4 flex",children:[(0,r.jsx)("div",{className:"w-10"}),(0,r.jsxs)("div",{className:"text-center flex-grow",children:["Built with ",(0,r.jsx)(Ke.h_8,{className:"inline text-red-500 w-5 h-5"})," by Arnault Nouvel"]}),(0,r.jsx)("div",{className:"w-10 text-white",children:(0,r.jsx)("a",{href:"https://github.com/ArnaultNouvel/ethvil-bank",children:(0,r.jsx)(Le.hJX,{className:" w-5 h-5"})})})]})},Ye=function(e){var t=e.children,n=(0,c.useState)(!1),i=n[0],a=n[1],o=(0,s.Ge)("INFURA"),u=o.library,l=o.error,d=o.active,f=o.activate,p=(0,c.useMemo)((function(){return!l&&d&&!!u}),[d,l,u]),h=(0,c.useMemo)((function(){return"UnsupportedChainIdError"===(null===l||void 0===l?void 0:l.name)}),[null===l||void 0===l?void 0:l.name]);return(0,c.useEffect)((function(){i||d||f(Ae,void 0,!0).catch((function(){a(!0)}))}),[f,d,i]),l?(console.error("Connected",{error:l}),(0,r.jsxs)("div",{children:["Failed to connect to Ethereum node : ",l.message]})):p?(0,r.jsx)(r.Fragment,{children:t}):h?(0,r.jsx)(Se,{}):(0,r.jsx)(He,{})};var Je=function(){return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"ETHvil Bank"}),(0,r.jsx)("link",{rel:"icon",href:"/ethvil-bank/favicon.ico"})]}),(0,r.jsx)(qe,{children:(0,r.jsx)(ze,{})}),(0,r.jsx)("div",{className:"container mx-auto max-w-2xl py-4 flex-grow",children:(0,r.jsxs)("main",{children:[(0,r.jsx)(Ve,{}),(0,r.jsx)("div",{className:"my-4 space-y-8",children:(0,r.jsx)(Ye,{children:(0,r.jsx)(te,{children:(0,r.jsx)(_e,{})})})})]})}),(0,r.jsx)(Xe,{})]})}}},function(e){e.O(0,[445,987,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);