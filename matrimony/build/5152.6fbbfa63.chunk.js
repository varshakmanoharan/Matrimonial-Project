"use strict";(self.webpackChunkmatrimony=self.webpackChunkmatrimony||[]).push([[5152],{45152:(u,c,t)=>{t.d(c,{ProtectedListView:()=>Et});var s=t(92132),E=t(21272),U=t(38413),B=t(55356),d=t(25815),M=t(4198),_=t(89167),r=t(5194),a=t(5409),P=t(54894),e=t(17703),W=t(60636),p=t(14579),I=t(99831),K=t(22185),x=t(15126),F=t(63299),V=t(67014),z=t(59080),G=t(79275),Q=t(14718),j=t(82437),Y=t(61535),H=t(5790),J=t(12083),X=t(35223),n=t(74930),i=t(2600),T=t(48940),O=t(41286),m=t(56336),D=t(13426),l=t(84624),v=t(77965),A=t(54257),y=t(71210),Z=t(51187),w=t(39404),b=t(58692),q=t(501),tt=t(57646),o=t(23120),st=t(44414),S=t(25962),Tt=t(14664),Ot=t(42588),mt=t(90325),At=t(62785),ct=t(87443),gt=t(41032),Ct=t(22957),It=t(93179),vt=t(73055),Lt=t(15747),Rt=t(85306),ht=t(26509),Ut=t(32058),Bt=t(81185),Wt=t(82261);const _t=[{name:"name",key:"name",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],it=()=>{(0,_.useFocusWhenNavigate)();const{formatMessage:g}=(0,P.A)(),L=(0,_.useNotification)(),dt=(0,W.j)(C=>C.admin_app.permissions.settings?.["api-tokens"]),{allowedActions:{canCreate:k,canDelete:rt,canUpdate:lt,canRead:R}}=(0,_.useRBAC)(dt),{push:at}=(0,e.W6)(),{trackUsage:f}=(0,_.useTracking)(),{startSection:et}=(0,_.useGuidedTour)(),{_unstableFormatAPIError:N}=(0,_.useAPIErrorHandler)();E.useEffect(()=>{et("apiTokens")},[et]),E.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]);const Pt=_t.map(C=>({...C,metadatas:{...C.metadatas,label:g(C.metadatas.label)}}));(0,W.b)(()=>{f("willAccessTokenList",{tokenType:I.A})});const{data:h=[],isLoading:nt,error:$}=(0,p.u)(void 0,{skip:!R});E.useEffect(()=>{$&&L({type:"warning",message:N($)})},[$,N,L]),E.useEffect(()=>{f("didAccessTokenList",{number:h.length,tokenType:I.A})},[h,f]);const[Dt]=(0,p.a)(),Mt=async C=>{try{const ot=await Dt(C);if("error"in ot){L({type:"warning",message:N(ot.error)});return}f("didDeleteToken")}catch{L({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}};return(0,s.jsxs)(U.g,{"aria-busy":nt,children:[(0,s.jsx)(_.SettingsPageTitle,{name:"API Tokens"}),(0,s.jsx)(B.Q,{title:g({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:g({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:k&&(0,s.jsx)(d.z,{"data-testid":"create-api-token-button",startIcon:(0,s.jsx)(r.A,{}),size:"S",onClick:()=>f("willAddTokenFromList",{tokenType:I.A}),to:"/settings/api-tokens/create",children:g({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),(0,s.jsxs)(M.s,{children:[!R&&(0,s.jsx)(_.NoPermissions,{}),R&&h.length>0&&(0,s.jsx)(K.T,{permissions:{canRead:R,canDelete:rt,canUpdate:lt},headers:Pt,contentType:"api-tokens",isLoading:nt,onConfirmDelete:Mt,tokens:h,tokenType:I.A}),R&&k&&h.length===0&&(0,s.jsx)(_.NoContent,{content:{id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"},action:(0,s.jsx)(d.z,{variant:"secondary",startIcon:(0,s.jsx)(r.A,{}),to:"/settings/api-tokens/create",children:g({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}),R&&!k&&h.length===0&&(0,s.jsx)(_.NoContent,{content:{id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},Et=()=>{const g=(0,W.j)(L=>L.admin_app.permissions.settings?.["api-tokens"].main);return(0,s.jsx)(_.CheckPagePermissions,{permissions:g,children:(0,s.jsx)(it,{})})}},22185:(u,c,t)=>{t.d(c,{T:()=>z});var s=t(92132),E=t(21272),U=t(25641),B=t(90361),d=t(33363),M=t(85829),_=t(83997),r=t(94061),a=t(88353),P=t(21610),e=t(89167),W=t(50612),p=t(83925),I=t(41909),K=t(54894),x=t(17703),F=t(71389),V=t(63891);const z=({permissions:n,headers:i=[],contentType:T,isLoading:O=!1,tokens:m=[],onConfirmDelete:D,tokenType:l})=>{const{canDelete:v,canUpdate:A,canRead:y}=n;return(0,s.jsx)(e.DynamicTable,{headers:i,contentType:T,rows:m,withBulkActions:v||A||y,isLoading:O,onConfirmDelete:D,children:(0,s.jsx)(G,{tokenType:l,permissions:n,onConfirmDelete:D})})},G=({tokenType:n,permissions:i,rows:T=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:D,canUpdate:l,canRead:v}=i,[{query:A}]=(0,e.useQueryParams)(),{formatMessage:y}=(0,K.A)(),[,Z]=A&&A.sort?A.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,x.W6)(),{trackUsage:q}=(0,e.useTracking)(),tt=[...T].sort((o,st)=>{const S=o.name.localeCompare(st.name);return Z==="DESC"?-S:S});return(0,s.jsx)(U.N,{children:tt.map(o=>(0,s.jsxs)(B.Tr,{...(0,e.onRowClick)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${o.id}`)},condition:l}),children:[(0,s.jsx)(d.Td,{maxWidth:(0,e.pxToRem)(250),children:(0,s.jsx)(M.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:o.name})}),(0,s.jsx)(d.Td,{maxWidth:(0,e.pxToRem)(250),children:(0,s.jsx)(M.o,{textColor:"neutral800",ellipsis:!0,children:o.description})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(M.o,{textColor:"neutral800",children:(0,s.jsx)(e.RelativeTime,{timestamp:new Date(o.createdAt)})})}),(0,s.jsx)(d.Td,{children:o.lastUsedAt&&(0,s.jsx)(M.o,{textColor:"neutral800",children:(0,s.jsx)(e.RelativeTime,{timestamp:new Date(o.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,s.jsx)(d.Td,{children:(0,s.jsxs)(_.s,{justifyContent:"end",children:[l&&(0,s.jsx)(X,{tokenName:o.name,tokenId:o.id}),!l&&v&&(0,s.jsx)(J,{tokenName:o.name,tokenId:o.id}),D&&(0,s.jsx)(H,{tokenName:o.name,onClickDelete:()=>m?.(o.id),tokenType:n})]})})]},o.id))})},Q={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},j=({tokenName:n,tokenId:i,buttonType:T="edit",children:O})=>{const{formatMessage:m}=(0,K.A)(),{location:{pathname:D}}=(0,x.W6)();return(0,s.jsx)(Y,{forwardedAs:F.NavLink,to:`${D}/${i}`,title:m(Q[T],{target:n}),children:O})},Y=(0,V.default)(P.N)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,H=({tokenName:n,onClickDelete:i,tokenType:T})=>{const{formatMessage:O}=(0,K.A)(),{trackUsage:m}=(0,e.useTracking)(),[D,l]=E.useState(!1),v=()=>{l(!1),m("willDeleteToken",{tokenType:T}),i()};return(0,s.jsxs)(r.a,{paddingLeft:1,onClick:A=>A.stopPropagation(),children:[(0,s.jsx)(a.K,{onClick:()=>{l(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(W.A,{})}),(0,s.jsx)(e.ConfirmDialog,{onToggleDialog:()=>l(!1),onConfirm:v,isOpen:D})]})},J=({tokenName:n,tokenId:i})=>(0,s.jsx)(j,{tokenName:n,tokenId:i,buttonType:"read",children:(0,s.jsx)(p.A,{})}),X=({tokenName:n,tokenId:i})=>(0,s.jsx)(j,{tokenName:n,tokenId:i,children:(0,s.jsx)(I.A,{width:12})})},14579:(u,c,t)=>{t.d(c,{a:()=>M,b:()=>B,c:()=>d,d:()=>_,u:()=>U});var s=t(60636);const E=s.n.injectEndpoints({endpoints:r=>({getAPITokens:r.query({query:()=>"/admin/api-tokens",transformResponse:a=>a.data,providesTags:(a,P)=>[...a?.map(({id:e})=>({type:"ApiToken",id:e}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:r.query({query:a=>`/admin/api-tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),createAPIToken:r.mutation({query:a=>({url:"/admin/api-tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:r.mutation({query:a=>({url:`/admin/api-tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,P,e)=>[{type:"ApiToken",id:e}]}),updateAPIToken:r.mutation({query:({id:a,...P})=>({url:`/admin/api-tokens/${a}`,method:"PUT",data:P}),transformResponse:a=>a.data,invalidatesTags:(a,P,{id:e})=>[{type:"ApiToken",id:e}]})}),overrideExisting:!1}),{useGetAPITokensQuery:U,useGetAPITokenQuery:B,useCreateAPITokenMutation:d,useDeleteAPITokenMutation:M,useUpdateAPITokenMutation:_}=E},99831:(u,c,t)=>{t.d(c,{A:()=>s,T:()=>E});const s="api-token",E="transfer-token"}}]);