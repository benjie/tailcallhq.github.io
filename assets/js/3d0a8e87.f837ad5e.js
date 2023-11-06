"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[8902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Configuration",sidebar_position:2},i=void 0,s={unversionedId:"getting_started/configuration",id:"getting_started/configuration",title:"Configuration",description:"For our first example, we are going to compose a GraphQL schema from the REST APIs at https://jsonplaceholder.typicode.com, a free online REST API with some fake data.",source:"@site/docs/getting_started/configuration.mdx",sourceDirName:"getting_started",slug:"/getting_started/configuration",permalink:"/docs/getting_started/configuration",draft:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/getting_started/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting_started"},next:{title:"Launch",permalink:"/docs/getting_started/launch"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For our first example, we are going to compose a GraphQL schema from the REST APIs at ",(0,a.kt)("a",{href:"https://jsonplaceholder.typicode.com",target:"_blank"},(0,a.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com"},"https://jsonplaceholder.typicode.com")),", a free online REST API with some fake data.\nWe will use the API at ",(0,a.kt)("inlineCode",{parentName:"p"},"/users")," to get a list of users, and ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/:id/posts")," to get the posts for each user, and compose them into a single GraphQL schema."),(0,a.kt)("p",null,"Create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonplaceholder.graphql")," and paste the following contents into it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'# Specify a base url for all http requests\nschema @upstream(baseURL: "http://jsonplaceholder.typicode.com") {\n  query: Query\n}\n\ntype Query {\n  # Specify the http path for the users query\n  users: [User] @http(path: "/users")\n}\n\n# Create a user type with the fields returned by the users api\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n\n  # Extend the user type with the posts field\n  # Use the current user\'s id to construct the path\n  posts: [Post] @http(path: "/users/{{value.id}}/posts")\n}\n\n# Create a post type with the fields returned by the posts api\ntype Post {\n  id: Int!\n  title: String!\n  body: String!\n}\n')),(0,a.kt)("p",null,"The above file is a standard ",(0,a.kt)("inlineCode",{parentName:"p"},".graphQL")," file, with a few additions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@server")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@http")," directives. So basically we specify the GraphQL schema and how to resolve that GraphQL schema in the same file, without having to write any code! Here is a quick overview of what the above schema does:"))}d.isMDXComponent=!0}}]);