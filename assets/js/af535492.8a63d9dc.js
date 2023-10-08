"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,c=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(c,s(s({ref:t},d),{},{components:n})):a.createElement(c,s({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Operators",sidebar_position:4},s=void 0,o={unversionedId:"intro/operators",id:"intro/operators",title:"Operators",description:"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom operators. These operators provide powerful compile time guarantees to make sure your API composition is tight and robust. The operator information is used to automatically generates highly optimized resolver logic for your types.",source:"@site/docs/intro/operators.md",sourceDirName:"intro",slug:"/intro/operators",permalink:"/docs/intro/operators",draft:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/intro/operators.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Operators",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/intro/cli"},next:{title:"Context",permalink:"/docs/intro/context"}},l={},p=[{value:"@server",id:"server",level:2},{value:"port",id:"port",level:4},{value:"baseURL",id:"baseurl",level:4},{value:"enableHttpCache",id:"enablehttpcache",level:4},{value:"enableCacheControlHeader",id:"enablecachecontrolheader",level:4},{value:"enableGraphiql",id:"enablegraphiql",level:4},{value:"proxy",id:"proxy",level:4},{value:"vars",id:"vars",level:4},{value:"enableIntrospection",id:"enableintrospection",level:4},{value:"enableQueryValidation",id:"enablequeryvalidation",level:4},{value:"enableResponseValidation",id:"enableresponsevalidation",level:4},{value:"globalResponseTimeout",id:"globalresponsetimeout",level:4},{value:"allowedHeaders",id:"allowedheaders",level:4},{value:"@http",id:"http",level:2},{value:"baseURL",id:"baseurl-1",level:4},{value:"path",id:"path",level:4},{value:"method",id:"method",level:4},{value:"query",id:"query",level:4},{value:"body",id:"body",level:4},{value:"headers",id:"headers",level:4},{value:"@batch",id:"batch",level:2},{value:"path",id:"path-1",level:4},{value:"key",id:"key",level:4},{value:"@modify",id:"modify",level:2},{value:"name",id:"name",level:4},{value:"omit",id:"omit",level:4},{value:"@inline",id:"inline",level:2},{value:"@const",id:"const",level:2},{value:"Operator Composition",id:"operator-composition",level:2}],d={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom operators. These operators provide powerful compile time guarantees to make sure your API composition is tight and robust. The operator information is used to automatically generates highly optimized resolver logic for your types."),(0,i.kt)("h2",{id:"server"},"@server"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@server")," directive, when applied at the schema level, offers a comprehensive set of server configurations. It dictates how the server behaves and helps tune tailcall for various use-cases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(...[ServerSettings]...){\n    query: Query\n    mutation: Mutation\n}\n")),(0,i.kt)("p",null,"In this templated structure, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"...[ServerSettings]...")," with specific configurations tailored to your project's needs. Adjust and expand these settings as necessary."),(0,i.kt)("p",null,"The various ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerSettings")," options and their details are explained below."),(0,i.kt)("h4",{id:"port"},"port"),(0,i.kt)("p",null,"This refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," on which the Tailcall will be running. If not specified, the default port is ",(0,i.kt)("inlineCode",{parentName:"p"},"8000"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(port: 8090) {\n  query: Query\n  mutation: Mutation\n}\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"port")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"8090"),". This means that the Tailcall will be accessible at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8090"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Always lean towards non-standard ports, steering clear of typical ones like 80 or 8080. Ensure your chosen port is unoccupied.")),(0,i.kt)("h4",{id:"baseurl"},"baseURL"),(0,i.kt)("p",null,"This refers to the default base URL for your APIs. If it's not explicitly mentioned in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@server")," operator, then each ",(0,i.kt)("a",{parentName:"p",href:"#http"},"@http")," operator must specify its own ",(0,i.kt)("inlineCode",{parentName:"p"},"baseURL"),". If neither ",(0,i.kt)("inlineCode",{parentName:"p"},"@server")," nor ",(0,i.kt)("a",{parentName:"p",href:"#http"},"@http")," provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"baseURL"),", it results in a compilation error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'schema @server(baseURL: "http://jsonplaceholder.typicode.com") {\n  query: Query\n  mutation: Mutation\n}\n')),(0,i.kt)("p",null,"In this representation, the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseURL")," is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"http://jsonplaceholder.typicode.com"),". Thus, all API calls made by ",(0,i.kt)("inlineCode",{parentName:"p"},"@http")," will prepend this URL to their respective paths."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Ensure that your base URL remains free from specific path segments."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GOOD:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"@server(baseURL: http://jsonplaceholder.typicode.com)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BAD:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"@server(baseURL: http://jsonplaceholder.typicode.com/api)")))),(0,i.kt)("h4",{id:"enablehttpcache"},"enableHttpCache"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enableHttpCache")," configuration, when activated, directs Tailcall to utilize HTTP caching mechanisms. These mechanisms, in accordance with the ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7234"},"HTTP Caching RFC"),", are designed to improve performance by reducing unnecessary data fetches. If left unspecified, this feature defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(enableHttpCache: true) {\n  query: Query\n  mutation: Mutation\n}\n")),(0,i.kt)("h4",{id:"enablecachecontrolheader"},"enableCacheControlHeader"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enableCacheControlHeader")," configuration, when activated, instructs Tailcall to transmit ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},"Cache-Control")," headers in its responses. The ",(0,i.kt)("inlineCode",{parentName:"p"},"max-age")," value in the header, is the least of the values in the responses received by tailcall from the upstream services. By default, this is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," meaning no header is set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(enableCacheControlHeader: true) {\n  query: Query\n  mutation: Mutation\n}\n")),(0,i.kt)("h4",{id:"enablegraphiql"},"enableGraphiql"),(0,i.kt)("p",null,"This configuration dictates the path on which the GraphiQL interface is hosted within Tailcall. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," is a built-in, interactive in-browser GraphQL IDE that simplifies query development and testing. By designating a path, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/graphiql"),", you grant access to this IDE at that specific URL endpoint, like ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/graphiql"),". If not provided, GraphiQL won't be available. It's a ready-to-use feature in Tailcall, requiring no additional setup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'schema @server(port: 8000, enableGraphiql: "/graphiql") {\n  query: Query\n  mutation: Mutation\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While the GraphiQL interface is a powerful tool for development, it's recommended to disable it in production environments, especially if you're not exposing GraphQL APIs directly to users. This ensures an added layer of security and reduces unnecessary exposure.")),(0,i.kt)("h4",{id:"proxy"},"proxy"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy")," setting defines an intermediary server through which the upstream requests will be routed before reaching their intended endpoint. By specifying a proxy URL, you introduce an additional layer, enabling custom routing and security policies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'schema\n  @server(\n    proxy: {url: "http://localhost:3000"}\n    baseURL: "http://jsonplaceholder.typicode.com"\n  ) {\n  query: Query\n  mutation: Mutation\n}\n')),(0,i.kt)("p",null,"In the provided example, we've set the proxy's ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),' to "http://localhost:3000". This configuration ensures that all requests aimed at the designated ',(0,i.kt)("inlineCode",{parentName:"p"},"baseURL")," are first channeled through this proxy. To illustrate, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseURL"),' is "',(0,i.kt)("a",{parentName:"p",href:"http://jsonplaceholder.typicode.com%22"},'http://jsonplaceholder.typicode.com"'),', any request targeting it would be initially sent to "http://localhost:3000" before being redirected to its final destination.'),(0,i.kt)("h4",{id:"vars"},"vars"),(0,i.kt)("p",null,"This configuration allows you to define local variables that can be leveraged during the server's operations. These variables are particularly handy when you need to store constant configurations, secrets, or other shared information that various operations might require."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'schema @server(\n  vars: {key: "apiKey", value: "YOUR_API_KEY_HERE"}\n){\n    query: Query\n    mutation: Mutation\n}\n\ntype Query {\n  externalData: Data @http(\n    path: "/external-api/data",\n    headers: [{key: "Authorization", value: "Bearer {{vars.apiKey}}"}]\n  )\n}\n')),(0,i.kt)("p",null,"In the provided example, a variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),' is set with a placeholder value of "YOUR_API_KEY_HERE". This configuration implies that whenever Tailcall fetches data from the ',(0,i.kt)("inlineCode",{parentName:"p"},"externalData")," endpoint, it includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey")," in the Authorization header of the HTTP request."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Local variables, like ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),", can be instrumental in securing access to external services or providing a unified place for configurations. Ensure that sensitive information stored this way is well protected and not exposed unintentionally, especially if your Tailcall configuration is publicly accessible.")),(0,i.kt)("h4",{id:"enableintrospection"},"enableIntrospection"),(0,i.kt)("p",null,"This setting governs whether introspection queries are permitted on the server. Introspection is an intrinsic feature of GraphQL, allowing clients to fetch information about the schema directly. This can be instrumental for tools and client applications to understand the types, fields, and operations available. By default, this setting is enabled (",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(enableIntrospection: false) {\n  query: Query\n  mutation: Mutation\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Although introspection is beneficial during development and debugging stages, it's wise to consider disabling it in production environments. Turning off introspection in live deployments can enhance security by preventing potential attackers from easily discerning the schema and any associated business logic or data structures.")),(0,i.kt)("h4",{id:"enablequeryvalidation"},"enableQueryValidation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enableQueryValidation")," configuration specifies whether the server should validate incoming GraphQL queries against the defined schema. Validating each query ensures its conformity to the schema, preventing errors from invalid or malformed queries. However, there are situations where you might opt to disable it, notably when seeking to ",(0,i.kt)("strong",{parentName:"p"},"enhance server performance")," at the cost of such checks. This defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if not specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(enableQueryValidation: false) {\n  query: Query\n  mutation: Mutation\n}\n")),(0,i.kt)("p",null,"In the example above, ",(0,i.kt)("inlineCode",{parentName:"p"},"enableQueryValidation")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", bypassing the validation phase for incoming queries."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This should be enabled in dev environment to make sure the queries sent are correct and validated, however in production env, you could consider disabling it for improved performance.")),(0,i.kt)("h4",{id:"enableresponsevalidation"},"enableResponseValidation"),(0,i.kt)("p",null,"Tailcall automatically can infer the schema of the http endpoints for you. This information can be used to validate responses that are received from the upstream services. Enabling this setting allows you to perform exactly that. If this is not specified, the default setting for ",(0,i.kt)("inlineCode",{parentName:"p"},"enableResponseValidation")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(enableResponseValidation: true) {\n  query: Query\n  mutation: Mutation\n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Disabling this setting will offer major performance improvements, but at the potential expense of data.")),(0,i.kt)("h4",{id:"globalresponsetimeout"},"globalResponseTimeout"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"globalResponseTimeout")," configuration determines the maximum duration a query is allowed to run before it's terminated by the server. Essentially, it acts as a safeguard against long-running queries that could strain resources or pose security concerns."),(0,i.kt)("p",null,"If not explicitly defined, there might be a system-specific or default value that applies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema @server(globalResponseTimeout: 5000) {\n  query: Query\n  mutation: Mutation\n}\n")),(0,i.kt)("p",null,"In this given example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"globalResponseTimeout")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"5000")," milliseconds, or 5 seconds. This means any query execution taking longer than this duration will be automatically terminated by the server."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It's crucial to set an appropriate response timeout, especially in production environments. This not only optimizes resource utilization but also acts as a security measure against potential denial-of-service attacks where adversaries might run complex queries to exhaust server resources.")),(0,i.kt)("h4",{id:"allowedheaders"},"allowedHeaders"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"allowedHeaders")," configuration specifies which HTTP headers are permitted to be forwarded to upstream services when making requests.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"allowedHeaders")," isn't specified, no incoming headers will be forwarded to the upstream services, which can provide an added layer of security but might restrict essential data flow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'schema @server(allowedHeaders: ["Authorization", "X-Api-Key"]) {\n  query: Query\n  mutation: Mutation\n}\n')),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"allowedHeaders")," is set to allow only ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Api-Key")," headers. This means that requests containing these headers will forward them to upstream services, while all others will be ignored. It ensures that only expected headers are communicated to dependent services, emphasizing security and consistency."),(0,i.kt)("h2",{id:"http"},"@http"),(0,i.kt)("p",null,"This ",(0,i.kt)("strong",{parentName:"p"},"@http")," operator serves as an indication of a field or node that is underpinned by a REST API. For Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Query {\n  user(id: ID!): User @http(path: "/users")\n}\n')),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"@http")," operator is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," type. This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field is underpinned by a REST API. The ",(0,i.kt)("a",{parentName:"p",href:"#path"},"path")," argument is used to specify the path of the REST API. In this case, the path is ",(0,i.kt)("inlineCode",{parentName:"p"},"/users"),". This means that the GraphQL server will make a GET request to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://jsonplaceholder.typicode.com/users")," when the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field is queried."),(0,i.kt)("h4",{id:"baseurl-1"},"baseURL"),(0,i.kt)("p",null,"This refers to the base URL of the API. If not specified, the default base URL is the one specified in the ",(0,i.kt)("a",{parentName:"p",href:"#server"},"@server")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Query {\n  user(id: ID!): User\n    @http(path: "/users", baseURL: "https://jsonplaceholder.typicode.com")\n}\n')),(0,i.kt)("h4",{id:"path"},"path"),(0,i.kt)("p",null,"This refers to the API endpoint you're going to call. For instance ",(0,i.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/users%60"},"https://jsonplaceholder.typicode.com/users`"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Query {\n  user(id: ID!): User @http(path: "/users")\n}\n')),(0,i.kt)("p",null,"If your API endpoint contains dynamic segments, you can use Mustache templates to substitute variables. For example, to fetch a specific user, the path can be written as ",(0,i.kt)("inlineCode",{parentName:"p"},"/users/{{args.id}}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Query {\n  user(id: ID!): User @http(path: "/users/{{args.id}}")\n}\n')),(0,i.kt)("h4",{id:"method"},"method"),(0,i.kt)("p",null,"This refers to the HTTP method of the API call. Commonly used methods include GET, POST, PUT, DELETE, etc. If not specified, the default method is GET. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Mutation {\n  createUser(input: UserInput!): User @http(method: "POST", path: "/users")\n}\n')),(0,i.kt)("h4",{id:"query"},"query"),(0,i.kt)("p",null,"This represents the query parameters of your API call. You can pass it as a static object or use Mustache template for dynamic parameters. These parameters will be added to the URL. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Query {\n  userPosts(id: ID!): [Post]\n    @http(path: "/posts", query: [{key: "userId", value: "{{args.id}}"}])\n}\n')),(0,i.kt)("h4",{id:"body"},"body"),(0,i.kt)("p",null,"The body of the API call. It's used for methods like POST or PUT that send data to the server. You can pass it as a static object or use a Mustache template to substitute variables from the GraphQL variables. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Mutation {\n  createUser(input: UserInput!): User\n    @http(method: "POST", path: "/users", body: "{{args.input}}")\n}\n')),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"createUser")," mutation sends a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/users"),", with the input object converted to JSON and included in the request body."),(0,i.kt)("h4",{id:"headers"},"headers"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," parameter allows you to customize the headers of the HTTP request made by the ",(0,i.kt)("inlineCode",{parentName:"p"},"@http")," operator. It is used by specifying a key-value map of header names and their values."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Mutation {\n  createUser(input: UserInput!): User\n    @http(path: "/users", headers: [{key: "X-Server", value: "Tailcall"}])\n}\n')),(0,i.kt)("p",null,"In this example, a request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/users")," will include an additional HTTP header ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Server")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"Tailcall"),"."),(0,i.kt)("p",null,"You can make use of mustache templates to provide dynamic values for headers, derived from the arguments or ",(0,i.kt)("a",{parentName:"p",href:"/docs/intro/context"},"context")," provided in the request. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Mutation {\n  users(name: String): User\n    @http(path: "/users", headers: [{key: "X-Server", value: "Tailcall"}, {key: "User-Name", value: "{{args.name}}"}])\n}\n')),(0,i.kt)("p",null,"In this scenario, the ",(0,i.kt)("inlineCode",{parentName:"p"},"User-Name")," header's value will dynamically adjust according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," argument passed in the request."),(0,i.kt)("h2",{id:"batch"},"@batch"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@batch")," operator in Tailcall groups multiple data requests into a single call. It works together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@http")," operator. For more details please refer out ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/n+1#solving-using-batching"},"n + 1 guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Post {\n  id: Int!\n  name: String!\n  user: User\n    @http(path: "/users", query: {key: "id", value: "{{parent.value.userId}}"}])\n    @batch(key: "userId", path: ["id"])\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'query: {key: "id", value: "{{parent.value.userId}}"}]'),": Here, TailCall CLI is instructed to generate a URL where the user id aligns with the ",(0,i.kt)("inlineCode",{parentName:"li"},"userId")," from the parent ",(0,i.kt)("inlineCode",{parentName:"li"},"Post"),". For a batch of posts, the CLI compiles a single URL, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"/users?id=1&id=2&id=3...id=10"),", consolidating multiple requests into one.")),(0,i.kt)("h4",{id:"path-1"},"path"),(0,i.kt)("p",null,"This parameter instructs the system to convert the list of responses into a map internally, using the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," as the unique key. In essence, it allows the system to differentiate each user value in the response list."),(0,i.kt)("h4",{id:"key"},"key"),(0,i.kt)("p",null,"This parameter matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," object to the user data in the batched request response. This correlation is crucial for associating the ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," to its relevant ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,i.kt)("h2",{id:"modify"},"@modify"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@modify")," operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this operator:"),(0,i.kt)("h4",{id:"name"},"name"),(0,i.kt)("p",null,"You can rename a field or a node in your GraphQL schema using the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," argument in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@modify")," operator. This can be helpful when the field name in your underlying data source doesn't match the desired field name in your schema. For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type User {\n  id: Int! @modify(name: "userId")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'@modify(name: "userId")')," tells GraphQL that although the field is referred to as ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"in the underlying data source, it should be presented as ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," in your schema."),(0,i.kt)("h4",{id:"omit"},"omit"),(0,i.kt)("p",null,"You can exclude a field or a node from your GraphQL schema using the ",(0,i.kt)("inlineCode",{parentName:"p"},"omit")," argument in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@modify")," operator. This can be useful if you want to keep certain data hidden from the client. For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"type User {\n  id: Int! @modify(omit: true)\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@modify(omit: true)")," tells GraphQL that the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field should not be included in the schema, thus it won't be accessible to the client."),(0,i.kt)("h2",{id:"inline"},"@inline"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@inline")," operator simplifies data structures and fetch processes by 'inlining' or flattening a field or node within your schema. It works by modifying the schema and the data transformation process, essentially streamlining how nested data is accessed and presented."),(0,i.kt)("p",null,"For instance, consider a schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'schema {\n  query: Query\n}\n\ntype Post {\n  id: Int!\n  user: User!\n}\n\ntype User {\n  id: Int!\n  name: String!\n  email: String!\n  address: Address!\n}\n\ntype Address {\n  street: String!\n  city: String!\n  state: String!\n}\n\ntype Query {\n  postUserStreet(id: Int): Post! @inline(path: ["user", "address", "street"])\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@inline")," operator, in this case, is applied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"postUserStreet")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," type. It includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," argument, indicating the chain of fields to be traversed from ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," to the field to be inlined."),(0,i.kt)("p",null,"Post application, the schema becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"schema {\n  query: Query\n}\n\ntype Query {\n  postUserStreet(id: Int): String\n}\n")),(0,i.kt)("p",null,"As seen, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Post"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Address")," types are eliminated from the schema. The ",(0,i.kt)("inlineCode",{parentName:"p"},"postUserStreet")," now directly returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," representing the address street, thereby simplifying the client-side data fetch process. ",(0,i.kt)("inlineCode",{parentName:"p"},"@inline")," operator also take cares of nullablity of the fields. If any of the fields in the path is nullable, the resulting type will be nullable."),(0,i.kt)("p",null,"Additionally, ",(0,i.kt)("inlineCode",{parentName:"p"},"@inline")," supports indexing, meaning you can specify the array index to be inlined. If a field ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"[User]"),", and you want to inline the first user, you can specify the path as ","[",(0,i.kt)("inlineCode",{parentName:"p"},'"users"'),",",(0,i.kt)("inlineCode",{parentName:"p"},'"0"'),",",(0,i.kt)("inlineCode",{parentName:"p"},'"name"'),"]","."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type Post {\n  firstUser: User @inline(path: ["users", "0", "name"]) @http(path: "/users")\n}\n')),(0,i.kt)("p",null,"In conclusion, the ",(0,i.kt)("inlineCode",{parentName:"p"},"@inline")," operator helps tidy up your schema and streamline data fetching by reducing query depth, promoting better performance and simplicity."),(0,i.kt)("h2",{id:"const"},"@const"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@const")," operators allows us to embed a constant response for the schema. For eg:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'schema {\n  query: Query\n}\n\ntype Query {\n  user: User @const(data: {name: "John", age: 12})\n}\n\ntype User {\n  name: String\n  age: Int\n}\n')),(0,i.kt)("p",null,"The const operator will also validate the provided value at compile time to make sure that it matches the of the field. If the schema of the provided value doesn't match the type of the field, a descriptive error message is show on the console."),(0,i.kt)("h2",{id:"operator-composition"},"Operator Composition"),(0,i.kt)("p",null,'This example illustrates the concept of composition in GraphQL, which allows you to combine multiple operations (known as "operators") to build more complex transformations of data.'),(0,i.kt)("p",null,"The given schema is defining two data types - ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Post"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," type has fields ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," type initially has fields ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},'type User {\n  id: Int\n  name: String\n}\n\ntype Post {\n  user: User\n    @inline(path: ["name"])\n    @modify(name: "userName")\n    @http(path: "/users/{{userId}}")\n  userId: Int!\n}\n')),(0,i.kt)("p",null,"However, it uses a series of operators to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},'@inline(path: ["name"])')," operator is used to drill down into the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," object, specifically targeting the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field. This is equivalent to fetching the ",(0,i.kt)("inlineCode",{parentName:"p"},"User.name")," property.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},'@modify(name: "userName")')," operator is used to name the inlined ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"userName"),". So, instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," field that is a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," object, we now have a ",(0,i.kt)("inlineCode",{parentName:"p"},"userName")," field that is a ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},'@http(path: "/users/{{userId}}")')," operator is used to instruct the resolver to make an HTTP request to fetch the user data from a specified path (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"/users/{{userId}}"),"), where ",(0,i.kt)("inlineCode",{parentName:"p"},"{{userId}}")," is a placeholder that would be replaced with the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," when making the request."))),(0,i.kt)("p",null,"The schema after this transformation looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"showLineNumbers",showLineNumbers:!0},"type User {\n  id: Int\n  name: String\n}\n\ntype Post {\n  userName: String\n  userId: Int!\n}\n")),(0,i.kt)("p",null,"So, we've used composition of operators to take a complex object (the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"Post"),"), extract a specific part of it (",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"), name that part (",(0,i.kt)("inlineCode",{parentName:"p"},"userName"),"), and then instruct GraphQL how to fetch the data using an HTTP request."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is important to note that the order of the operators doesn't matter. The resulting schema will always be the same.")),(0,i.kt)("p",null,"This is a powerful mechanism that allows you to make your GraphQL schema more precise, easier to understand, and more suitable for the specific needs of your application."))}u.isMDXComponent=!0}}]);