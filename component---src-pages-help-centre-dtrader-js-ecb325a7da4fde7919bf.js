(window.webpackJsonp=window.webpackJsonp||[]).push([[45,95],{"3OHM":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return u}));var a=n("vOnD"),i=n("O4Du"),c=n("Z/CU"),r=n("aC/h"),o=a.c.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"xgb5w4-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],r.a.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),r.a.tabletL),l=Object(a.c)(c.d).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"xgb5w4-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}"]),d=Object(a.c)(i.k).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"xgb5w4-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),u=Object(a.c)(i.w).withConfig({displayName:"_help-centre-style__StyledText",componentId:"xgb5w4-3"})(["margin-top:1.7rem;"])},"J/Db":function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n("q1tI"),i=n.n(a),c=n("vOnD"),r=n("omHr"),o=n("8k0H"),l=n("Z/CU"),d=n("O4Du"),u=n("g2Kc"),s=n("aC/h"),g=c.c.div.withConfig({displayName:"_article__Content",componentId:"sc-17ehp3-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),m=c.c.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-17ehp3-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],s.a.tabletL),w=c.c.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-17ehp3-2"})(["margin-top:8rem;"]),I=function(e){var t=e.children,n=e.header;return i.a.createElement(o.b,null,i.a.createElement(u.h,{title:Object(l.g)("Help Center | "+n)}),i.a.createElement(u.b,{align:"left",justify:"flex-start",direction:"column"},i.a.createElement(d.u,{to:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},Object(l.g)("Back")),i.a.createElement(g,null,i.a.createElement(m,null,i.a.createElement(d.s,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:n},t)))),i.a.createElement(w,null,i.a.createElement(r.DidntFindYourAnswerBanner,null)))}},ctXc:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),i=n.n(a),c=n("p46w"),r=n.n(c),o=n("txul"),l=function(){var e=i.a.useState(!1),t=e[0],a=e[1],c=Object(o.z)()&&window.LC_API||{},l=i.a.useState(!1),d=l[0],u=l[1],s=i.a.useRef(null),g=new URLSearchParams(Object(o.z)()&&window.location.search||"").get("is_livechat_open");return i.a.useEffect((function(){var e,t=null,i=null;if(Object(o.z)()){var c=window.location.hostname.includes("deriv.com")?"deriv.com":"binary.sx";try{n.e(75).then(n.bind(null,"49Cj")).then((function(e){s.current=e}))}catch(d){console.error(d)}var l=(e=document.cookie,function(){var t=document.cookie;if(t!=e){var n=r.a.get("client_information",{domain:c});u(!!n),e=t}});t=setInterval(l,500),i=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){a(!0),"true"===(null==g?void 0:g.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(t),clearTimeout(i)}}),[]),i.a.useEffect((function(){if(Object(o.z)()){var e=null,n=window.location.hostname.includes("deriv.com")?"deriv.com":"binary.sx";if(s.current)try{e=s.current.init({licenseId:o.C,clientId:o.B})}catch(a){console.error(a)}t&&window.LiveChatWidget.on("ready",(function(){if(d){var t=r.a.get("client_information",{domain:n}),i=JSON.parse(t),c=i.loginid,o=i.email,l=i.landing_company_shortcode,u=i.currency,s=i.residence,g=i.first_name,m=i.last_name,w={loginid:null!=c?c:"",landing_company_shortcode:null!=l?l:"",currency:null!=u?u:"",residence:null!=s?s:"",email:null!=o?o:""};window.LiveChatWidget.call("set_session_variables",w),o&&window.LiveChatWidget.call("set_customer_email",o),g&&m&&window.LiveChatWidget.call("set_customer_name",g+" "+m)}else{if(window.LiveChatWidget.get("chat_data")){var I=window.LiveChatWidget.get("chat_data").chatId;try{var h;null===(h=e)||void 0===h||h.deactivateChat({chatId:I})}catch(a){console.error(a)}}window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")}var f=new URLSearchParams(window.location.search).get("is_livechat_open");"true"===(null==f?void 0:f.toLowerCase())&&window.LC_API.open_chat_window()}))}}),[d,s]),[t,c]}},omHr:function(e,t,n){"use strict";n.r(t),n.d(t,"DidntFindYourAnswerBanner",(function(){return h}));var a=n("q1tI"),i=n.n(a),c=n("vOnD"),r=n("O4Du"),o=n("wYtL"),l=n("Z/CU"),d=n("g2Kc"),u=n("ctXc"),s=n("aC/h");var g=c.c.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1ba1494-0"})(["background-color:var(--color-black-3);"]),m=Object(c.c)(d.b).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1ba1494-1"})(["padding:3.5rem 0;justify-content:center;align-items:center;@media ","{flex-wrap:wrap;justify-content:center;align-items:center;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],s.a.mobileL,o.a),w=c.c.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1ba1494-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],s.a.tabletL),I=Object(c.c)(r.w).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1ba1494-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],s.a.mobileL),h=function(){var e=Object(u.a)(),t=e[0],n=e[1];return i.a.createElement(g,null,i.a.createElement(m,null,i.a.createElement(w,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYWM4cTZ6dW9sYSIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9Ijg3Ljk3MiUiIHkyPSIxMi4wMjglIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGNDQ0RiIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY2NDQ0IiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYWM4cTZ6dW9sYSkiCiAgICAgICAgICAgIGQ9Ik02MiAyMWMxLjEwNSAwIDIgLjg5NSAyIDJ2MzQuNzczYzAgLjQ5LS4xOC45NjMtLjUwNSAxLjMyOS0uNzM0LjgyNS0xLjk5OC45LTIuODI0LjE2Nkw1My42MiA1M0gxOGMtMS4xMDUgMC0yLS44OTUtMi0yVjQwaDJ2MTFoMzUuNjJjLjQ5IDAgLjk2Mi4xOCAxLjMyOS41MDVMNjIgNTcuNzczVjIzSDUydi0yaDEwek00NiA0YzEuMTA1IDAgMiAuODk1IDIgMnYyOGMwIDEuMTA1LS44OTUgMi0yIDJIMTAuMzhMMy4zMyA0Mi4yNjhjLS44MjYuNzM0LTIuMDkuNjYtMi44MjQtLjE2NkMuMTggNDEuNzM2IDAgNDEuMjYzIDAgNDAuNzczVjZjMC0xLjEwNS44OTUtMiAyLTJ6bTAgMkgydjM0Ljc3M2w3LjA1MS02LjI2OGMuMzY3LS4zMjUuODQtLjUwNSAxLjMzLS41MDVINDZWNnpNMzAgMjJjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDMwIDI0SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDIyaDIxem05LThjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDM5IDE2SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDE0aDMweiIgLz4KICAgIDwvZz4KPC9zdmc+",alt:"contact us icon"}),i.a.createElement(I,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},Object(l.g)("Didn’t find your answer? We can help.")),t&&i.a.createElement(o.a,{secondary:"true",onClick:function(){n.open_chat_window()},weight:"bold",color:"black"},Object(l.g)("Chat"))))};t.default=h},qfR5:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),c=n("J/Db"),r=n("3OHM"),o=n("O4Du"),l=n("Z/CU"),d=function(){return i.a.createElement(r.a,null,i.a.createElement(r.c,{as:"h4"},Object(l.g)("What is DTrader?")),i.a.createElement(o.w,null,Object(l.g)("DTrader is an advanced trading platform that allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.")))},u=function(){return i.a.createElement(r.a,null,i.a.createElement(r.c,{as:"h4"},Object(l.g)("What markets can I trade on DTrader?")),i.a.createElement(o.w,null,Object(l.g)("You can trade forex, stock indices, commodities, and synthetic indices on DTrader.")))},s=function(){return i.a.createElement(r.a,null,i.a.createElement(r.c,{as:"h4"},Object(l.g)("What contract types can I use on DTrader?")),i.a.createElement(o.w,null,Object(l.g)("We offer three contract types on DTrader: Ups & Downs, Highs & Lows, and Digits.")))};t.default=Object(l.e)()((function(){return i.a.createElement(c.a,{header:"DTrader"},i.a.createElement(d,{text:Object(l.g)("What is DTrader?"),label:"what-is-dtrader"}),i.a.createElement(u,{text:Object(l.g)("What markets can I trade on DTrader?"),label:"markets-on-dtrader"}),i.a.createElement(s,{text:Object(l.g)("What contract types can I use on DTrader?"),label:"contracts-on-dtrader"}))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-dtrader-js-ecb325a7da4fde7919bf.js.map