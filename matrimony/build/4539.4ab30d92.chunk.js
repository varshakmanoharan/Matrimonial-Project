"use strict";(self.webpackChunkmatrimony=self.webpackChunkmatrimony||[]).push([[4539],{34539:(Q,L,s)=>{s.d(L,{ProtectedListPage:()=>ts});var _=s(92132),O=s(21272),P=s(90361),E=s(33363),i=s(85829),g=s(83997),m=s(94061),v=s(88353),D=s(38413),r=s(55356),W=s(85963),B=s(74773),c=s(4198),I=s(35513),p=s(40216),U=s(26127),K=s(98765),X=s(25641),a=s(89167),N=s(5194),H=s(90625),G=s(41909),J=s(50612),Y=s(60256),Z=s(88761),S=s(54894),k=s(17703),F=s(60636),b=s(39235),V=s(21587),Ms=s(15126),Os=s(63299),Ps=s(67014),rs=s(59080),Cs=s(79275),Ts=s(14718),Rs=s(82437),As=s(61535),hs=s(5790),Ls=s(12083),gs=s(35223),ms=s(5409),vs=s(74930),Ws=s(2600),Bs=s(48940),cs=s(41286),Is=s(56336),Us=s(13426),Ks=s(84624),xs=s(77965),fs=s(54257),js=s(71210),us=s(51187),ys=s(39404),ps=s(58692),Ns=s(501),Ss=s(57646),Fs=s(23120),Vs=s(44414),$s=s(25962),zs=s(14664),Qs=s(42588),Xs=s(90325),Hs=s(62785),Gs=s(87443),Js=s(41032),Ys=s(22957),Zs=s(93179),ks=s(73055),bs=s(15747),ws=s(85306),qs=s(26509),s_=s(32058),__=s(81185),t_=s(82261),o_=s(55151),a_=s(79077);const w=({id:t,name:d,description:n,usersCount:C,icons:T,rowIndex:x,canUpdate:R})=>{const{formatMessage:A}=(0,S.A)(),[,M]=T,f=A({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:C});return(0,_.jsxs)(P.Tr,{"aria-rowindex":x,...R?(0,a.onRowClick)({fn:M.onClick}):{},children:[(0,_.jsx)(E.Td,{maxWidth:(0,a.pxToRem)(130),children:(0,_.jsx)(i.o,{ellipsis:!0,textColor:"neutral800",children:d})}),(0,_.jsx)(E.Td,{maxWidth:(0,a.pxToRem)(250),children:(0,_.jsx)(i.o,{ellipsis:!0,textColor:"neutral800",children:n})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(i.o,{textColor:"neutral800",children:f})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(g.s,{justifyContent:"flex-end",...a.stopPropagation,children:T.map((l,h)=>l?(0,_.jsx)(m.a,{paddingLeft:h===0?0:1,children:(0,_.jsx)(v.K,{onClick:l.onClick,label:l.label,borderWidth:0,icon:l.icon})},l.label):null)})})]},t)},q=()=>{const{formatMessage:t}=(0,S.A)();(0,a.useFocusWhenNavigate)();const d=(0,F.j)(V.s),{formatAPIError:n}=(0,a.useAPIErrorHandler)(),C=(0,a.useNotification)(),[T,x]=O.useState(!1),[{query:R}]=(0,a.useQueryParams)(),{isLoading:A,allowedActions:{canCreate:M,canDelete:f,canRead:l,canUpdate:h}}=(0,a.useRBAC)(d.settings?.roles),{roles:$,refetch:os}=(0,b.u)({filters:R?._q?{name:{$containsi:R._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:A||!l}),{push:j}=(0,k.W6)(),[{showModalConfirmButtonLoading:as,roleToDelete:ns},u]=O.useReducer(_s,ss),{post:Es}=(0,a.getFetchClient)(),ls=async()=>{try{u({type:"ON_REMOVE_ROLES"}),await Es("/admin/roles/batch-delete",{ids:[ns]}),await os(),u({type:"RESET_DATA_TO_DELETE"})}catch(o){o instanceof Y.pe&&C({type:"warning",message:n(o)})}y()},z=()=>j("/settings/roles/new"),y=()=>x(o=>!o),is=o=>e=>{e.preventDefault(),e.stopPropagation(),o.usersCount?C({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):(u({type:"SET_ROLE_TO_DELETE",id:o.id}),y())},es=o=>e=>{e.preventDefault(),e.stopPropagation(),j(`/settings/roles/duplicate/${o.id}`)},ds=$.length+1,Ds=6;return A?(0,_.jsx)(D.g,{children:(0,_.jsx)(a.LoadingIndicatorPage,{})}):(0,_.jsxs)(D.g,{children:[(0,_.jsx)(a.SettingsPageTitle,{name:"Roles"}),(0,_.jsx)(r.Q,{primaryAction:M?(0,_.jsx)(W.$,{onClick:z,startIcon:(0,_.jsx)(N.A,{}),size:"S",children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:t({id:"global.roles",defaultMessage:"roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),l&&(0,_.jsx)(B.B,{startActions:(0,_.jsx)(a.SearchURLQuery,{label:t({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:t({id:"global.roles",defaultMessage:"roles"})})})}),l&&(0,_.jsx)(c.s,{children:(0,_.jsxs)(I.X,{colCount:Ds,rowCount:ds,footer:M?(0,_.jsx)(p.S,{onClick:z,icon:(0,_.jsx)(N.A,{}),children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,_.jsx)(U.d,{children:(0,_.jsxs)(P.Tr,{"aria-rowindex":1,children:[(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.o,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.o,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.o,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(K.s,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,_.jsx)(X.N,{children:$?.map((o,e)=>(0,_.jsx)(w,{id:o.id,name:o.name,description:o.description,usersCount:o.usersCount,icons:[M&&{onClick:es(o),label:t({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,_.jsx)(H.A,{})},h&&{onClick:()=>j(`/settings/roles/${o.id}`),label:t({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,_.jsx)(G.A,{})},f&&{onClick:is(o),label:t({id:"global.delete",defaultMessage:"Delete"}),icon:(0,_.jsx)(J.A,{})}].filter(Boolean),rowIndex:e+2,canUpdate:h},o.id))})]})}),(0,_.jsx)(a.ConfirmDialog,{isOpen:T,onConfirm:ls,isConfirmButtonLoading:as,onToggleDialog:y})]})},ss={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(t,d)=>(0,Z.Ay)(t,n=>{switch(d.type){case"ON_REMOVE_ROLES":{n.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{n.shouldRefetchData=!0,n.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{n.shouldRefetchData=!1,n.roleToDelete=null,n.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{n.roleToDelete=d.id;break}default:return n}}),ts=()=>{const t=(0,F.j)(V.s);return(0,_.jsx)(a.CheckPagePermissions,{permissions:t.settings?.roles.main,children:(0,_.jsx)(q,{})})}},39235:(Q,L,s)=>{s.d(L,{u:()=>i});var _=s(21272),O=s(89167),P=s(54894),E=s(60636);const i=(g={},m)=>{const{locale:v}=(0,P.A)(),D=(0,O.useCollator)(v,{sensitivity:"base"}),{data:r,error:W,isError:B,isLoading:c,refetch:I}=(0,E.z)(g,m);return{roles:_.useMemo(()=>[...r??[]].sort((U,K)=>D.compare(U.name,K.name)),[r,D]),error:W,isError:B,isLoading:c,refetch:I}}}}]);