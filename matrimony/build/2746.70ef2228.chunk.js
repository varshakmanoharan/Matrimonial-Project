"use strict";(self.webpackChunkmatrimony=self.webpackChunkmatrimony||[]).push([[2746],{72746:(G,R,t)=>{t.r(R),t.d(R,{E:()=>V,a:()=>$,b:()=>Le});var e=t(92132),f=t(21272),m=t(83997),I=t(8361),S=t(43064),L=t(46462),U=t(66809),x=t(84843),_=t(81621),a=t(98765),g=t(85829),M=t(379),D=t(4181),B=t(50215),y=t(94061),K=t(90151),O=t(68074),N=t(7537),ne=t(18629),re=t(76517),ae=t(80782),oe=t(55356),z=t(85963),ie=t(4198),de=t(38413),T=t(89167),le=t(71389),X=t(17703),w=t(60636),Y=t(87281),ce=t(21587),ge=t(21610),he=t(5194),Q=t(68802),ue=t(84795),Z=t(54514),_e=t(98052),Ee=t(46270),b=t(61535),W=t(54894),C=t(12083),me=t(89032),H=t(63891),pe=t(37469);const[fe,J]=(0,me.q)("WebhookEvent"),Me=({children:s})=>{const{formatMessage:n}=(0,W.A)(),{collectionTypes:r,isLoading:h}=(0,Y.u)(),o=f.useMemo(()=>r.some(i=>i.options?.draftAndPublish===!0),[r]),c=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(fe,{isDraftAndPublish:o,children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(I.d,{"aria-hidden":!0,children:c}),h&&(0,e.jsx)(S.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(xe,{"aria-label":c,children:s})]})})},xe=(0,H.default)(L.X)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,ye=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},je=({getHeaders:s=ye})=>{const{isDraftAndPublish:n}=J("Headers"),{formatMessage:r}=(0,W.A)(),h=s(n);return(0,e.jsx)(U.r,{children:(0,e.jsxs)(x.N,{children:[(0,e.jsx)(_.e,{children:(0,e.jsx)(a.s,{children:r({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),h.map(o=>["app.utils.publish","app.utils.unpublish"].includes(o?.id??"")?(0,e.jsx)(_.e,{title:r({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id):(0,e.jsx)(_.e,{children:(0,e.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id))]})})},Pe=({providedEvents:s})=>{const{isDraftAndPublish:n}=J("Body"),r=s||ve(n),{values:h,handleChange:o}=(0,b.useFormikContext)(),c="events",i=h.events,p=[],j=i.reduce((d,l)=>{const E=l.split(".")[0];return d[E]||(d[E]=[]),d[E].push(l),d},{}),u=({target:{name:d,value:l}})=>{const E=new Set(i);l?E.add(d):E.delete(d),o({target:{name:c,value:Array.from(E)}})},v=({target:{name:d,value:l}})=>{const E=new Set(i);l?r[d].forEach(A=>{p.includes(A)||E.add(A)}):r[d].forEach(A=>E.delete(A)),o({target:{name:c,value:Array.from(E)}})};return(0,e.jsx)(M.f,{children:Object.entries(r).map(([d,l])=>(0,e.jsx)(q,{disabledEvents:p,name:d,events:l,inputValue:j[d],handleSelect:u,handleSelectAll:v},d))})},ve=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},q=({disabledEvents:s=[],name:n,events:r=[],inputValue:h=[],handleSelect:o,handleSelectAll:c})=>{const{formatMessage:i}=(0,W.A)(),p=r.filter(l=>!s.includes(l)),j=h.length>0,u=h.length===p.length,v=({target:{name:l}})=>{c({target:{name:l,value:!u}})},d=5;return(0,e.jsxs)(x.N,{children:[(0,e.jsx)(_.N,{children:(0,e.jsx)(D.S,{indeterminate:j&&!u,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:v,value:u,children:Oe(n)})}),r.map(l=>(0,e.jsx)(_.N,{children:(0,e.jsx)(B.J,{disabled:s.includes(l),"aria-label":l,name:l,value:h.includes(l),onValueChange:E=>o({target:{name:l,value:E}})})},l)),r.length<d&&(0,e.jsx)(_.N,{colSpan:d-r.length})]})},Oe=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),$={Root:Me,Headers:je,Body:Pe,Row:q},be=()=>(0,e.jsxs)($.Root,{children:[(0,e.jsx)($.Headers,{}),(0,e.jsx)($.Body,{})]}),Ae=()=>{const{formatMessage:s}=(0,W.A)(),{values:n,errors:r}=(0,b.useFormikContext)();return(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(I.d,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(y.a,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(b.FieldArray,{validateOnChange:!1,name:"headers",render:({push:h,remove:o})=>(0,e.jsxs)(K.x,{gap:4,children:[n.headers.map((c,i)=>{const p=r.headers?.[i],j=typeof p=="object"?p.key:void 0,u=typeof p=="object"?p.value:void 0;return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsx)(O.E,{col:6,children:(0,e.jsx)(b.Field,{as:De,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:j})}),(0,e.jsx)(O.E,{col:6,children:(0,e.jsxs)(m.s,{alignItems:"flex-end",children:[(0,e.jsx)(y.a,{style:{flex:1},children:(0,e.jsx)(b.Field,{as:N.k,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:u})}),(0,e.jsx)(m.s,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:u?0:5,children:(0,e.jsx)(T.RemoveRoundedButton,{disabled:n.headers.length===1,onClick:()=>o(i),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${c.key}`)}),(0,e.jsx)(O.E,{col:12,children:(0,e.jsx)(ne.Q,{type:"button",onClick:()=>{h({key:"",value:""})},startIcon:(0,e.jsx)(he.A,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},De=({name:s,onChange:n,value:r,...h})=>{const{values:{headers:o}}=(0,b.useFormikContext)(),[c,i]=f.useState([...ee]);f.useEffect(()=>{const u=ee.filter(v=>!o?.some(d=>d.key!==r&&d.key===v));i(u)},[o,r]);const p=u=>{n({target:{name:s,value:u}})},j=u=>{i(v=>[...v,u]),p(u)};return(0,e.jsx)(re.nP,{...h,onClear:()=>p(""),onChange:p,onCreateOption:j,placeholder:"",value:r,children:c.map(u=>(0,e.jsx)(ae.j,{value:u,children:u},u))})},ee=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Ce=({isPending:s,onCancel:n,response:r})=>{const{statusCode:h,message:o}=r??{},{formatMessage:c}=(0,W.A)();return(0,e.jsx)(y.a,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(K.x,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(O.E,{col:3,children:(0,e.jsx)(g.o,{children:c({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(O.E,{col:3,children:(0,e.jsx)(Te,{isPending:s,statusCode:h})}),(0,e.jsx)(O.E,{col:6,children:s?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:n,type:"button",children:(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(g.o,{textColor:"neutral400",children:c({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(F,{as:Q.A,color:"neutral400"})]})})}):(0,e.jsx)(We,{statusCode:h,message:o})})]})})},F=H.default.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,H.css)`
          path {
            fill: ${s.colors[n]};
          }
        `:""}
`),Te=({isPending:s,statusCode:n})=>{const{formatMessage:r}=(0,W.A)();return s||!n?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(F,{as:ue.A}),(0,e.jsx)(g.o,{children:r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(F,{as:Z.A,color:"success700"}),(0,e.jsx)(g.o,{children:r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(F,{as:Q.A,color:"danger700"}),(0,e.jsxs)(g.o,{children:[r({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},We=({statusCode:s,message:n})=>{const{formatMessage:r}=(0,W.A)();return s?s>=200&&s<300?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)(g.o,{textColor:"neutral600",ellipsis:!0,children:r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)(m.s,{maxWidth:(0,T.pxToRem)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(g.o,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Re=({handleSubmit:s,triggerWebhook:n,isCreating:r,isTriggering:h,triggerResponse:o,data:c})=>{const{formatMessage:i}=(0,W.A)(),[p,j]=f.useState(!1),u=(0,w.p)(be,async()=>(await t.e(2297).then(t.bind(t,82297))).EventsTableEE),v=l=>Object.keys(l).length?Object.entries(l).map(([E,A])=>({key:E,value:A})):[{key:"",value:""}],d=(0,b.useFormik)({initialValues:{name:c?.name||"",url:c?.url||"",headers:v(c?.headers||{}),events:c?.events||[]},async onSubmit(l,E){await s(l,E),E.resetForm({values:l})},validationSchema:Se({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return u?(0,e.jsx)(b.FormikProvider,{value:d,children:(0,e.jsxs)(T.Form,{children:[(0,e.jsx)(oe.Q,{primaryAction:(0,e.jsxs)(m.s,{gap:2,children:[(0,e.jsx)(z.$,{onClick:()=>{n(),j(!0)},variant:"tertiary",startIcon:(0,e.jsx)(_e.A,{}),disabled:r||h,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(z.$,{startIcon:(0,e.jsx)(Z.A,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):c?.name,navigationAction:(0,e.jsx)(ge.N,{as:le.NavLink,startIcon:(0,e.jsx)(Ee.A,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(ie.s,{children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:4,children:[p&&(0,e.jsx)(Ce,{isPending:h,response:o,onCancel:()=>j(!1)}),(0,e.jsx)(y.a,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(K.x,{gap:6,children:[(0,e.jsx)(O.E,{col:6,children:(0,e.jsx)(b.Field,{as:N.k,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(O.E,{col:12,children:(0,e.jsx)(b.Field,{as:N.k,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(Ae,{}),(0,e.jsx)(u,{})]})})]})})]})}):null},Ie=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,ke=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Se=({formatMessage:s})=>C.Ik().shape({name:C.Yj().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Ie,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:C.Yj().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(ke,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:C.RZ(n=>{const r=C.YO();if(n.length===1){const{key:h,value:o}=n[0];if(!h&&!o)return r}return r.of(C.Ik().shape({key:C.Yj().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:C.Yj().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:C.YO()}),se=s=>({...s,headers:s.headers.reduce((n,{key:r,value:h})=>(r!==""&&(n[r]=h),n),{})}),V=()=>{const n=(0,X.W5)("/settings/webhooks/:id")?.params.id,r=n==="create",{replace:h}=(0,X.W6)(),o=(0,T.useNotification)(),{_unstableFormatAPIError:c,_unstableFormatValidationErrors:i}=(0,T.useAPIErrorHandler)(),{isLoading:p}=(0,Y.u)(),[j,u]=f.useState(!1),[v,d]=f.useState(),{isLoading:l,webhooks:E,error:A,createWebhook:Ue,updateWebhook:Be,triggerWebhook:Ke}=(0,pe.u)({id:n},{skip:r});f.useEffect(()=>{A&&o({type:"warning",message:c(A)})},[A,o,c]);const we=async()=>{try{u(!0);const k=await Ke(n);if("error"in k){o({type:"warning",message:c(k.error)});return}d(k.data)}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{u(!1)}},$e=async(k,te)=>{try{if(r){const P=await Ue(se(k));if("error"in P){(0,w.x)(P.error)&&P.error.name==="ValidationError"?te.setErrors(i(P.error)):o({type:"warning",message:c(P.error)});return}o({type:"success",message:{id:"Settings.webhooks.created"}}),h(`/settings/webhooks/${P.data.id}`)}else{const P=await Be({id:n,...se(k)});if("error"in P){(0,w.x)(P.error)&&P.error.name==="ValidationError"?te.setErrors(i(P.error)):o({type:"warning",message:c(P.error)});return}o({type:"success",message:{id:"notification.form.success.fields"}})}}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(l||p)return(0,e.jsx)(T.LoadingIndicatorPage,{});const[Fe]=E??[];return(0,e.jsxs)(de.g,{children:[(0,e.jsx)(T.SettingsPageTitle,{name:"Webhooks"}),(0,e.jsx)(Re,{data:Fe,handleSubmit:$e,triggerWebhook:we,isCreating:r,isTriggering:j,triggerResponse:v})]})},Le=Object.freeze(Object.defineProperty({__proto__:null,EditPage:V,ProtectedEditPage:()=>{const s=(0,w.j)(ce.s);return(0,e.jsx)(T.CheckPagePermissions,{permissions:s.settings?.webhooks.update,children:(0,e.jsx)(V,{})})}},Symbol.toStringTag,{value:"Module"}))},87281:(G,R,t)=>{t.d(R,{u:()=>U});var e=t(21272),f=t(89167),m=t(60636);const I=m.n.injectEndpoints({endpoints:x=>({getComponents:x.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:_=>_.data}),getContentTypes:x.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:_=>_.data})}),overrideExisting:!1}),{useGetComponentsQuery:S,useGetContentTypesQuery:L}=I;function U(){const{_unstableFormatAPIError:x}=(0,f.useAPIErrorHandler)(),_=(0,f.useNotification)(),a=S(),g=L();e.useEffect(()=>{g.error&&_({type:"warning",message:x(g.error)})},[g.error,x,_]),e.useEffect(()=>{a.error&&_({type:"warning",message:x(a.error)})},[a.error,x,_]);const M=a.isLoading||g.isLoading,D=e.useMemo(()=>(g?.data??[]).filter(y=>y.kind==="collectionType"&&y.isDisplayed),[g?.data]),B=e.useMemo(()=>(g?.data??[]).filter(y=>y.kind!=="collectionType"&&y.isDisplayed),[g?.data]);return{isLoading:M,components:e.useMemo(()=>a?.data??[],[a?.data]),collectionTypes:D,singleTypes:B}}},37469:(G,R,t)=>{t.d(R,{u:()=>x});var e=t(60636);const f=e.n.injectEndpoints({endpoints:_=>({getWebhooks:_.query({query:a=>({url:`/admin/webhooks/${a?.id??""}`,method:"GET"}),transformResponse:a=>Array.isArray(a.data)?a.data:[a.data],providesTags:(a,g,M)=>typeof M=="object"&&"id"in M?[{type:"Webhook",id:M.id}]:[...a?.map(({id:D})=>({type:"Webhook",id:D}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:_.mutation({query:a=>({url:"/admin/webhooks",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:_.mutation({query:({id:a,...g})=>({url:`/admin/webhooks/${a}`,method:"PUT",data:g}),transformResponse:a=>a.data,invalidatesTags:(a,g,{id:M})=>[{type:"Webhook",id:M}]}),triggerWebhook:_.mutation({query:a=>({url:`/admin/webhooks/${a}/trigger`,method:"POST"}),transformResponse:a=>a.data}),deleteManyWebhooks:_.mutation({query:a=>({url:"/admin/webhooks/batch-delete",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:(a,g,{ids:M})=>M.map(D=>({type:"Webhook",id:D}))})}),overrideExisting:!1}),{useGetWebhooksQuery:m,useCreateWebhookMutation:I,useUpdateWebhookMutation:S,useTriggerWebhookMutation:L,useDeleteManyWebhooksMutation:U}=f,x=(_=void 0,a)=>{const{data:g,isLoading:M,error:D}=m(_,a),[B]=I(),[y]=S(),[K]=L(),[O]=U();return{webhooks:g,isLoading:M,error:D,createWebhook:B,updateWebhook:y,triggerWebhook:K,deleteManyWebhooks:O}}}}]);