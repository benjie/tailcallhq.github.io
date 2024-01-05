"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3238],{8894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(5893),r=t(1151);const a={title:"Context"},i=void 0,o={id:"guides/context",title:"Context",description:"In any GraphQL framework, including Tailcall, Context is a fundamental mechanism used for data sharing amongst various parts of your application. It is an adaptable object that is made available to every resolver in GraphQL.",source:"@site/docs/guides/context.md",sourceDirName:"guides",slug:"/guides/context",permalink:"/docs/guides/context",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/context.md",tags:[],version:"current",frontMatter:{title:"Context"},sidebar:"tutorialSidebar",previous:{title:"Tuning Client for Performance",permalink:"/docs/guides/client-tuning"},next:{title:"Environment Variables",permalink:"/docs/guides/environment-variables"}},l={},c=[{value:"Context in Tailcall",id:"context-in-tailcall",level:2},{value:"args",id:"args",level:3},{value:"value",id:"value",level:3},{value:"parent",id:"parent",level:3},{value:"env",id:"env",level:3},{value:"headers",id:"headers",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In any GraphQL framework, including Tailcall, ",(0,s.jsx)(n.code,{children:"Context"})," is a fundamental mechanism used for data sharing amongst various parts of your application. It is an adaptable object that is made available to every resolver in GraphQL."]}),"\n",(0,s.jsx)(n.h2,{id:"context-in-tailcall",children:"Context in Tailcall"}),"\n",(0,s.jsxs)(n.p,{children:["In Tailcall, as in all GraphQL implementations, Context is a variable that is accessible to every ",(0,s.jsx)(n.a,{href:"/docs/operators/",children:"Operator"}),". It is used to store and access data that needs to be shared between operators."]}),"\n",(0,s.jsx)(n.p,{children:"The Context can be described using the following Typescript interface:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface Context {\n  args: Map<string, Json>\n  value: Json\n  parent: Context\n  env: Map<string, string>\n  headers: Map<string, string>\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"args",children:"args"}),"\n",(0,s.jsx)(n.p,{children:"These are the arguments passed to the current query. They can be used to access the arguments of the query. For example,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  user(id: ID!): User @http(path: "/users/{{args.id}}")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"args.id"})," is used to access the ",(0,s.jsx)(n.code,{children:"id"})," argument passed to the ",(0,s.jsx)(n.code,{children:"user"})," query."]}),"\n",(0,s.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,s.jsx)(n.p,{children:"This represents the value of the current node. For instance,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  id: ID!\n  title: String!\n  body: String!\n  comments: [Comment] @http(path: "/posts/{{value.id}}/comments")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above, ",(0,s.jsx)(n.code,{children:"value.id"})," is used to access the ",(0,s.jsx)(n.code,{children:"id"})," field of the ",(0,s.jsx)(n.code,{children:"Post"})," type."]}),"\n",(0,s.jsx)(n.h3,{id:"parent",children:"parent"}),"\n",(0,s.jsx)(n.p,{children:"This denotes the context of the parent node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  posts: [Post] @http(path: "/posts")\n}\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  user: User\n    @http(path: "/users", query: [{key: "id", value: "{{value.userId}}"}], matchPath: ["id"], matchKey: "userId")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this case, ",(0,s.jsx)(n.code,{children:"value.userId"})," is a way to get the ",(0,s.jsx)(n.code,{children:"userId"}),' information from the "parent" context of the ',(0,s.jsx)(n.code,{children:"Post"}),' type. Essentially, it\'s extracting a list or "array" of ',(0,s.jsx)(n.code,{children:"userId"})," fields from multiple ",(0,s.jsx)(n.code,{children:"Post"})," types. Think of ",(0,s.jsx)(n.code,{children:"value"})," as a container that holds the results of a post query, with ",(0,s.jsx)(n.code,{children:"userId"})," being the specific key you want to fetch from that container."]}),"\n",(0,s.jsx)(n.h3,{id:"env",children:"env"}),"\n",(0,s.jsx)(n.p,{children:"This represents global environment variables for the server. This is set once when the server starts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]! @http(baseUrl: "{{env.API_ENDPOINT}}", path: "/users")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, ",(0,s.jsx)(n.code,{children:"env.API_ENDPOINT"})," refers to an environment variable called API_ENDPOINT, which should be defined in your server settings."]}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:"headers"}),"\n",(0,s.jsx)(n.p,{children:"These are the headers of the request that was received by the Tailcall server."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  commentsForUser: [Comment] @http(path: "/users/{{headers.userId}}/comments")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here, ",(0,s.jsx)(n.code,{children:"headers.userId"})," refers to a header called ",(0,s.jsx)(n.code,{children:"userId"})," that should be present in the ",(0,s.jsx)(n.code,{children:"context"}),". The server can use this ",(0,s.jsx)(n.code,{children:"userId"})," to fetch comments for the specified user."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(7294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);