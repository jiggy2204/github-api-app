(this["webpackJsonpgithub-api-app"]=this["webpackJsonpgithub-api-app"]||[]).push([[0],{11:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),l=s(4),n=s.n(l),i=s(2),r=s(0);function o(){return Object(r.jsx)("header",{id:"main-header",className:"hero",children:Object(r.jsx)("h1",{className:"title",children:"GITHUB API CALL LIST"})})}function j(){return Object(r.jsxs)("div",{className:"is-flex",children:[Object(r.jsx)("div",{className:"column is-one-third",children:"LOGIN NAME"}),Object(r.jsx)("div",{className:"column is-narrow",children:"ID"}),Object(r.jsx)("div",{})]})}var b=Object(t.createContext)(null);function d(e){var c=Object(t.useState)({}),s=Object(i.a)(c,2),a=s[0],l=s[1],n=Object(t.useState)(0),o=Object(i.a)(n,2),j=o[0],d=o[1],u=Object(t.useContext)(b).setClickCount;return Object(t.useEffect)((function(){l(e.data)}),[e.data]),Object(r.jsxs)("div",{className:"is-flex block is-size-4",children:[Object(r.jsx)("div",{className:"column is-one-third is-size-4",children:a.login}),Object(r.jsx)("div",{className:"column is-narrow has-text-right",children:a.id}),Object(r.jsx)("div",{className:"column is-narrow is-medium",children:Object(r.jsx)("button",{className:"modal-button button is-primary","data-toggle":"modal","aria-haspopup":"true",onClick:function(){var c=j+1;d(c),u(c),e.buttonClicked()},children:"MORE INFO"})})]})}function u(e){var c=Object(t.useState)(!1),s=Object(i.a)(c,2),a=s[0],l=s[1],n=Object(t.useState)({}),o=Object(i.a)(n,2),j=o[0],d=o[1],u=Object(t.useContext)(b).clickCount;return Object(t.useEffect)((function(){d(e.data),l(e.showState)}),[e]),Object(r.jsxs)("div",{className:a?"modal is-active":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("p",{className:"modal-card-title block",children:["GITHUB USER: ",j.login]}),Object(r.jsxs)("p",{className:"modal-card-title block",children:["Profile Views: ",u]}),Object(r.jsx)("button",{className:"delete","aria-label":"close",onClick:e.close})]}),Object(r.jsxs)("section",{className:"modal-card-body",children:[Object(r.jsxs)("p",{className:"block",children:["login: ",j.login]}),Object(r.jsxs)("p",{className:"block",children:["ID: ",j.id]}),Object(r.jsxs)("p",{className:"block",children:["Node ID: ",j.node_id]}),Object(r.jsxs)("p",{className:"block",children:["Avatar URL: ",j.avatar_url]}),Object(r.jsxs)("p",{className:"block",children:["Gravatar ID: ",j.gravatar_id]}),Object(r.jsxs)("p",{className:"block",children:["URL: ",j.url]}),Object(r.jsxs)("p",{className:"block",children:["HTML URL: ",j.html_url]}),Object(r.jsxs)("p",{className:"block",children:["FOLLOWERS URL: ",j.followers_url]}),Object(r.jsxs)("p",{className:"block",children:["FOLLOWING URL: ",j.following_url]}),Object(r.jsxs)("p",{className:"block",children:["GISTS: ",j.gists_url]}),Object(r.jsxs)("p",{className:"block",children:["STARRED: ",j.starred_url]}),Object(r.jsxs)("p",{className:"block",children:["SUBSCRIPTIONS: ",j.subscriptions_url]}),Object(r.jsxs)("p",{className:"block",children:["ORGANIZATIONS: ",j.organizations_url]}),Object(r.jsxs)("p",{className:"block",children:["REPOS: ",j.repos_url]}),Object(r.jsxs)("p",{className:"block",children:["EVENTS: ",j.events_url]}),Object(r.jsxs)("p",{className:"block",children:["RECEIVED EVENTS: ",j.received_events_url]}),Object(r.jsxs)("p",{className:"block",children:["TYPE: ",j.type]}),Object(r.jsxs)("p",{className:"block",children:["SITE ADMIN: ",j.site_admin]})]}),Object(r.jsx)("footer",{className:"modal-card-foot",children:Object(r.jsx)("button",{className:"button","aria-label":"close",onClick:e.close,children:"CLOSE"})})]})]})}var O=function(){var e=Object(t.useState)([]),c=Object(i.a)(e,2),s=c[0],a=c[1],l=Object(t.useState)(!1),n=Object(i.a)(l,2),O=n[0],m=n[1],h=Object(t.useState)({}),x=Object(i.a)(h,2),N=x[0],p=x[1],k=Object(t.useState)(0),v=Object(i.a)(k,2),f=v[0],S=v[1];return Object(t.useEffect)((function(){fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(e){return function(e){var c=e.splice(0,10).sort((function(e,c){var s=e.login.toUpperCase(),t=c.login.toUpperCase();return s<t?-1:s>t?1:0}));return a(c)}(e)}))}),[]),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(b.Provider,{value:{clickCount:f,setClickCount:S},children:[O?Object(r.jsx)(u,{data:N,showState:O,close:function(){m(!1)}}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)(o,{}),Object(r.jsx)(j,{}),s.map((function(e,c){return Object(r.jsx)(d,{data:e,buttonClicked:function(){return p(e),void m(!0)}},e.id)}))]})})};s(10);n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7434cd19.chunk.js.map