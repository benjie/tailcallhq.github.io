"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4810],{4777:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=s(5893),n=s(1151);const i={title:"Operator Composition",sidebar_position:2},r=void 0,a={id:"guides/composition",title:"Operator Composition",description:'This example illustrates the concept of composition in GraphQL, which allows you to combine multiple operations (known as "operators") to build more complex transformations of data.',source:"@site/docs/guides/composition.md",sourceDirName:"guides",slug:"/guides/composition",permalink:"/docs/guides/composition",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/composition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Operator Composition",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Operators",permalink:"/docs/guides/operators"},next:{title:"CLI",permalink:"/docs/guides/cli"}},d={},c=[];function l(e){const t={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'This example illustrates the concept of composition in GraphQL, which allows you to combine multiple operations (known as "operators") to build more complex transformations of data.'}),"\n",(0,o.jsxs)(t.p,{children:["The given schema is defining two data types - ",(0,o.jsx)(t.code,{children:"User"})," and ",(0,o.jsx)(t.code,{children:"Post"}),". The ",(0,o.jsx)(t.code,{children:"User"})," type has fields ",(0,o.jsx)(t.code,{children:"id"})," and ",(0,o.jsx)(t.code,{children:"name"}),", and the ",(0,o.jsx)(t.code,{children:"Post"})," type initially has fields ",(0,o.jsx)(t.code,{children:"user"})," and ",(0,o.jsx)(t.code,{children:"userId"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User {\n  id: Int\n  name: String\n}\n\ntype Post @addField(name: "userName", path: ["user", "name"]) {\n  user: User @modify(omit: true) @http(path: "/users/{{userId}}")\n  userId: Int!\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["However, it uses a series of operators to modify the ",(0,o.jsx)(t.code,{children:"user"})," field."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:'@addField(name: "userName", path: ["user", "name"])'})," operator is used to extract the ",(0,o.jsx)(t.code,{children:"name"})," field from ",(0,o.jsx)(t.code,{children:"user"})," and add a field called ",(0,o.jsx)(t.code,{children:"userName"})," to the ",(0,o.jsx)(t.code,{children:"Post"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"@modify(omit: true)"})," operator is used to remove the ",(0,o.jsx)(t.code,{children:"user"})," field from the final Schema."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:'@http(path: "/users/{{userId}}")'})," operator is used to instruct the resolver to make an HTTP request to fetch the user data from a specified path (i.e., ",(0,o.jsx)(t.code,{children:"/users/{{userId}}"}),"), where ",(0,o.jsx)(t.code,{children:"{{userId}}"})," is a placeholder that would be replaced with the actual ",(0,o.jsx)(t.code,{children:"userId"})," when making the request."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The schema after this transformation looks like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:"type User {\n  id: Int\n  name: String\n}\n\ntype Post {\n  userName: String\n  userId: Int!\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["So, we've used composition of operators to take a complex object (the ",(0,o.jsx)(t.code,{children:"User"})," inside the ",(0,o.jsx)(t.code,{children:"Post"}),"), extract a specific part of it (",(0,o.jsx)(t.code,{children:"name"}),"), name that part (",(0,o.jsx)(t.code,{children:"userName"}),"), and then instruct GraphQL how to fetch the data using an HTTP request."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["It is important to note that the order of the operators ",(0,o.jsx)(t.code,{children:"@modify"})," and ",(0,o.jsx)(t.code,{children:"@http"})," doesn't matter. The resulting schema will always be the same."]})}),"\n",(0,o.jsx)(t.p,{children:"This is a powerful mechanism that allows you to make your GraphQL schema more precise, easier to understand, and more suitable for the specific needs of your application."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var o=s(7294);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);