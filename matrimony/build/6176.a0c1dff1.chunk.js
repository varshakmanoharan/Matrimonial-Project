(self.webpackChunkmatrimony=self.webpackChunkmatrimony||[]).push([[6176],{94445:V=>{function X(p,s,y,_){for(var O=-1,D=p==null?0:p.length;++O<D;){var b=p[O];s(_,b,y(b),p)}return _}V.exports=X},7233:(V,X,p)=>{var s=p(97449);function y(_,O,D,b){return s(_,function(B,K,Z){O(b,B,D(B),Z)}),b}V.exports=y},88532:(V,X,p)=>{var s=p(94445),y=p(7233),_=p(45353),O=p(82261);function D(b,B){return function(K,Z){var le=O(K)?s:y,de=B?B():{};return le(K,b,_(Z,2),de)}}V.exports=D},94710:(V,X,p)=>{var s=p(95292),y=p(88532),_=Object.prototype,O=_.hasOwnProperty,D=y(function(b,B,K){O.call(b,K)?b[K].push(B):s(b,K,[B])});V.exports=D},66176:(V,X,p)=>{"use strict";p.d(X,{P:()=>Bs});var s=p(92132),y=p(21272),_=p(83997),O=p(94061),D=p(50215),b=p(85829),B=p(85963),K=p(61485),Z=p(99248),le=p(6239),de=p(67030),Ne=p(76079),Ve=p(57237),we=p(60888),He=p(44604),Ce=p(4181),Fe=p(90151),Ge=p(68074),Xe=p(12081),xe=p(12408),z=p(24093),_e=p(89167),ye=p(88761),ce=p(51187),M=p(2600),ne=p(412),Q=p(77965),U=p(48940),I=p(54894),w=p(60636),Je=p(89032),Ye=p(59080),ue=p(94710),je=p(35223),S=p(63891),Ze=p(9005),ze=p(20415),Qe=p(74312),qe=p(44895),es=p(37679),ss=p(60043),ts=p(39404);const[ns,os]=(0,Je.q)("PermissionsDataManager"),J=()=>os("usePermissionsDataManager"),Oe=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Oe(o)):t.push(o),t),[]):[],F=e=>(0,w.F)(e)?Oe(Object.values(e).map(t=>(0,w.F)(t)?F(t):t)):[],Ee=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),is=e=>{const t=Ae(e.plugins),o=Ae(e.settings),n=be(e.collectionTypes),r=be(e.singleTypes);return[...t,...o,...n,...r]},Ae=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:c,properties:{enabled:u}}])=>(u&&i.push({action:l,subject:null,conditions:pe(c),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),be=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[c,u]=l;if(!F(u).some(m=>m))return i;if(!u?.properties?.enabled){const m=Object.entries(u.properties).reduce((C,x)=>{const[h,f]=x;return C.properties[h]=Me(f),C},{action:c,subject:r,conditions:pe(u.conditions),properties:{}});return[...i,m]}return u.properties.enabled&&i.push({action:c,subject:r,properties:{},conditions:pe(u.conditions)}),i},[]);return[...o,...d]},[]),Me=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,w.F)(a)?[...o,...Me(a,`${t}${r}.`)]:(a&&!(0,w.F)(a)&&o.push(`${t}${r}`),o)},[]),pe=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Pe=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),Te=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((c,u)=>{const g=Ee(o,u.action,null);return c[u.action]={properties:{enabled:g!==void 0},conditions:Pe(t,g?.conditions??[])},c},{}),i),{});return n[r]=d,n},{}),rs=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const c=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=c,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},ve=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,c)=>{const u=e.find(({uid:g})=>g===c)||null;return u&&(l[c]=u),l},{});if(Q(d))return r;const i=Object.keys(d).reduce((l,c)=>{const{actionId:u,applyToProperties:g}=a,x=d[c].properties.map(({value:P})=>P).every(P=>(g||[]).indexOf(P)===-1),h=Ee(n,u,c),f=Pe(o,h?.conditions??[]);if(l[c]||(l[c]={}),Q(g)||x)return l[c][u]={properties:{enabled:h!==void 0},conditions:f},l;const j=rs(g,d[c],h);return l[c][u]={...j,conditions:f},l},{});return Ye(r,i)},{}),Se=(e,t)=>Object.entries(ue(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(ue(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),oe=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,w.F)(n)&&!ne(n,"conditions"))return{...t,[o]:oe(n)};if((0,w.F)(n)&&ne(n,"conditions")&&!F(je(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),q=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,w.F)(a)?{...n,[r]:q(a,t,r==="fields")}:(n[r]=t,n)},{}),N=`${120/16}rem`,he=`${200/16}rem`,ie=`${53/16}rem`,ge=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,G=e=>{const t=ge(e),o=F(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},re=e=>e.charAt(0).toUpperCase()+e.slice(1),De=(0,S.default)(_.s)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,me=S.default.div`
  width: ${N};
`,$e=()=>(0,s.jsx)(O.a,{color:"danger700",paddingLeft:1,children:"*"}),Le=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:c})=>{const{formatMessage:u}=(0,I.A)();return(0,s.jsxs)(_.s,{alignItems:"center",paddingLeft:6,width:he,shrink:0,children:[(0,s.jsx)(O.a,{paddingRight:2,children:(0,s.jsx)(D.J,{name:e,"aria-label":u({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:c})}),(0,s.jsxs)(De,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(b.o,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:re(a)}),t]})]})},as=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,y.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(_.s,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(fs,{label:n,headers:d}),(0,s.jsx)(O.a,{children:t.map(({children:i,label:l,value:c,required:u},g)=>(0,s.jsx)(ls,{childrenForm:i,label:l,isFormDisabled:o,name:c,required:u,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},c))})]})},ls=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:c}=(0,I.A)(),[u,g]=y.useState(null),{modifiedData:m,onChangeCollectionTypeLeftActionRowCheckbox:C,onChangeParentCheckbox:x,onChangeSimpleCheckbox:h}=J(),f=u===n,j=(0,y.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=j.length>0,$=y.useCallback(()=>{P&&g(T=>T===n?null:n)},[P,n]),E=({target:{value:T}})=>{C(a,i,n,T)},{hasAllActionsSelected:A,hasSomeActionsSelected:v}=(0,y.useMemo)(()=>ds(d,m,a,i,n),[d,m,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(cs,{alignItems:"center",isCollapsable:P,isActive:f,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(_.s,{children:[(0,s.jsxs)(Le,{onChange:E,onClick:$,isCollapsable:P,isFormDisabled:o,label:t,someChecked:v,value:A,isActive:f,children:[r&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:f})]}),(0,s.jsx)(_.s,{children:d.map(({label:T,isActionRelatedToCurrentProperty:R,actionId:k})=>{if(!R)return(0,s.jsx)(me,{},T);const L=[...a.split(".."),k,"properties",i,n];if(!P){const W=M(m,L,!1);return(0,s.jsx)(_.s,{width:N,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:o,name:L.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),onValueChange:Ks=>{h({target:{name:L.join(".."),value:Ks}})},value:W})},k)}const Y=M(m,L,{}),{hasAllActionsSelected:H,hasSomeActionsSelected:te}=G(Y);return(0,s.jsx)(_.s,{width:N,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:o,name:L.join(".."),onValueChange:W=>{x({target:{name:L.join(".."),value:W}})},"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),value:H,indeterminate:te})},T)})})]})}),f&&(0,s.jsx)(Re,{childrenForm:j,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},ds=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const c=M(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=c,i},{});return G(d)},cs=(0,S.default)(_.s)`
  height: ${ie};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,ee=(0,S.default)(Ze.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Re=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,I.A)(),{modifiedData:l,onChangeParentCheckbox:c,onChangeSimpleCheckbox:u}=J(),[g,m]=y.useState(null),C=h=>{m(f=>f===h?null:h)},x=(0,y.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(O.a,{paddingLeft:"2rem",children:[(0,s.jsx)(hs,{}),e.map(({label:h,value:f,required:j,children:P},$)=>{const E=$+1<e.length,A=Array.isArray(P),v=g===f;return(0,s.jsxs)(us,{isVisible:E,children:[(0,s.jsxs)(_.s,{height:ie,children:[(0,s.jsx)(gs,{children:(0,s.jsx)(ms,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(_.s,{style:{flex:1},children:[(0,s.jsx)(ps,{level:o,isActive:v,isCollapsable:A,children:(0,s.jsxs)(De,{alignItems:"center",isCollapsable:A,...A&&{onClick:()=>C(f),"aria-expanded":v,onKeyDown:({key:T})=>(T==="Enter"||T===" ")&&C(f),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(b.o,{ellipsis:!0,children:re(h)}),j&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:v})]})}),(0,s.jsx)(_.s,{style:{flex:1},children:r.map(({actionId:T,label:R,isActionRelatedToCurrentProperty:k})=>{if(!k)return(0,s.jsx)(me,{},T);const L=[...n.split(".."),T,"properties",d,...a.split(".."),f],Y=M(l,L,!1);if(!P)return(0,s.jsx)(_.s,{position:"relative",width:N,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:t,name:L.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${R}`}),onValueChange:W=>{u({target:{name:L.join(".."),value:W}})},value:Y})},R);const{hasAllActionsSelected:H,hasSomeActionsSelected:te}=G(Y);return(0,s.jsx)(_.s,{position:"relative",width:N,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.J,{disabled:t,name:L.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${R}`}),onValueChange:W=>{c({target:{name:L.join(".."),value:W}})},value:H,indeterminate:te},R)},R)})})]})]}),x&&v&&(0,s.jsx)(O.a,{paddingBottom:2,children:(0,s.jsx)(Re,{isFormDisabled:t,parentName:`${a}..${f}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:x.children})})]},f)})]})},us=(0,S.default)(O.a)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,ps=(0,S.default)(_.s)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,hs=S.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,gs=(0,S.default)(O.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,ms=S.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,fs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,I.A)();return(0,s.jsxs)(_.s,{children:[(0,s.jsx)(_.s,{width:he,height:ie,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(_.s,{width:N,shrink:0,justifyContent:"center",children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(_.s,{width:N,shrink:0},n.label))]})},se=e=>(0,S.css)`
  ${b.o} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ee} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,Cs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,I.A)();return(0,s.jsx)(xs,{hasConditions:o,className:t,children:(0,s.jsx)(B.$,{variant:n,startIcon:(0,s.jsx)(ze.A,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},xs=(0,S.default)(O.a)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ae=(0,S.default)(Cs)``,Be=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,I.A)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=J(),c=y.useMemo(()=>Object.entries(ue(d,"category")),[d]),u=e.filter(({isDisplayed:h,hasSomeActionsSelected:f,hasAllActionsSelected:j})=>h&&Boolean(f||j)),[g,m]=y.useState(_s(u,i,c)),C=(h,f)=>{m((0,ye.Ay)(j=>{j[h]||(j[h]={}),j[h].default||(j[h].default={}),j[h].default=f}))},x=()=>{const h=Object.entries(g).reduce((f,j)=>{const[P,$]=j,E=Object.values($).reduce((A,v)=>({...A,...v}),{});return f[P]=E,f},{});l(h),r()};return(0,s.jsxs)(K.k,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(Z.r,{children:(0,s.jsx)(es.B,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,f,j)=>(0,s.jsx)(ss.m,{isCurrent:f===j.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(le.c,{children:[u.length===0&&(0,s.jsx)(b.o,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:u.map(({actionId:h,label:f,pathToConditionsObject:j},P)=>{const $=j.join("..");return(0,s.jsx)(ys,{arrayOfOptionsGroupedByCategory:c,label:f,isFormDisabled:o,isGrey:P%2===0,name:$,onChange:C,value:M(g,$,{})},h)})})]}),(0,s.jsx)(de.j,{startActions:(0,s.jsx)(B.$,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(B.$,{onClick:x,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},_s=(e,t,o)=>e.reduce((n,r)=>{const a=M(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[c,u]=l,g=u.reduce((m,C)=>(m[C.id]=M(a,C.id,!1),m),{});return i[c]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),ys=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,I.A)(),l=c=>{a&&a(r,Es(e,c))};return(0,s.jsxs)(_.s,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(_.s,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(b.o,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(b.o,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(b.o,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(O.a,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(Ne.B,{id:r,customizeContent:(c=[])=>`${c.length} currently selected`,onChange:l,value:js(d),options:Os(e),disabled:t})})]})},js=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Os=e=>e.reduce((t,[o,n])=>(t.push({label:re(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),Es=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),As=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=y.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:c},u)=>{const g=r===i,m=e.map(C=>({...C,isDisplayed:Array.isArray(C.subjects)&&C.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(_.s,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(bs,{availableActions:m,isActive:g,isGrey:u%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&c.map(({label:C,value:x,children:h})=>(0,s.jsx)(as,{availableActions:m,childrenForm:h,isFormDisabled:t,label:C,pathToData:[o,i].join(".."),propertyName:x},x))]},i)})})},bs=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=y.useState(!1),{formatMessage:c}=(0,I.A)(),{modifiedData:u,onChangeParentCheckbox:g,onChangeSimpleCheckbox:m}=J(),C=()=>{l(A=>!A)},x=()=>{l(!1)},h=M(u,d.split(".."),{}),f=y.useMemo(()=>Object.keys(h).reduce((A,v)=>(A[v]=je(h[v],"conditions"),A),{}),[h]),{hasAllActionsSelected:j,hasSomeActionsSelected:P}=G(f),$=y.useMemo(()=>Ms(e,u,d),[e,u,d]),E=$.some(A=>A.hasConditions);return(0,s.jsxs)(Ps,{isActive:t,children:[(0,s.jsxs)(Ie,{height:ie,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(Le,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:P,value:j,isActive:t,children:(0,s.jsx)(We,{paddingLeft:2,children:t?(0,s.jsx)(Qe.A,{}):(0,s.jsx)(qe.A,{})})}),(0,s.jsx)(_.s,{style:{flex:1},children:$.map(({actionId:A,hasSomeActionsSelected:v,isDisplayed:T,...R})=>{if(!T)return(0,s.jsx)(me,{},A);const{hasConditions:k,hasAllActionsSelected:L,isParentCheckbox:Y,checkboxName:H,label:te}=R;return Y?(0,s.jsxs)(ke,{justifyContent:"center",alignItems:"center",children:[k&&(0,s.jsx)(O.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.J,{disabled:n,name:H,"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${te} ${r}`}),onValueChange:W=>{g({target:{name:H,value:W}})},indeterminate:v,value:L})]},A):(0,s.jsxs)(ke,{justifyContent:"center",alignItems:"center",children:[k&&(0,s.jsx)(O.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.J,{disabled:n,indeterminate:k,name:H,onValueChange:W=>{m({target:{name:H,value:W}})},value:L})]},A)})}),i&&(0,s.jsx)(Be,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:$,isFormDisabled:n,onClosed:x,onToggle:C})]}),(0,s.jsx)(O.a,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ae,{onClick:C,hasConditions:E})})]})},Ms=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=Q(a)?[...i,"properties","enabled"]:i,c=M(t,[...i,"conditions"],null),u={actionId:n,checkboxName:l.join(".."),hasConditions:F(c).some(x=>x),isDisplayed:r,label:d,pathToConditionsObject:i};if(Q(a)){const x=M(t,l,!1);return{...u,hasAllActionsSelected:x,hasSomeActionsSelected:x,isParentCheckbox:!1}}const g=M(t,l,null),{hasAllActionsSelected:m,hasSomeActionsSelected:C}=G(g);return{...u,hasAllActionsSelected:m,hasSomeActionsSelected:C,isParentCheckbox:!0}}),fe=(e,t)=>`
  ${Ie} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${We} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
    ${se(e)}
  }

  &:focus-within {
    ${()=>fe(e,t)}
  }
`,Ie=(0,S.default)(_.s)`
  border: 1px solid transparent;
`,Ps=S.default.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&fe(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>fe(e,t)}
  }
`,ke=(0,S.default)(_.s)`
  width: ${N};
  position: relative;
`,We=(0,S.default)(O.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ts=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,I.A)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=J(),d=e.filter(({subjects:l})=>l&&l.length),i=y.useMemo(()=>{const l=d.map(({actionId:m})=>m),c=r[o],u=l.reduce((m,C)=>(Object.keys(c).forEach(x=>{const h=M(c,[x,C]),f={[x]:ge(h)};m[C]?m[C]={...m[C],...f}:m[C]=f}),m),{});return Object.keys(u).reduce((m,C)=>(m[C]=G(u[C]),m),{})},[r,d,o]);return(0,s.jsx)(O.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:he},children:(0,s.jsx)(_.s,{gap:0,children:d.map(({label:l,actionId:c})=>(0,s.jsxs)(_.s,{shrink:0,width:N,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(D.J,{disabled:t,onValueChange:u=>{a(o,c,u)},name:c,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:M(i,[c,"hasAllActionsSelected"],!1),indeterminate:M(i,[c,"hasSomeActionsSelected"],!1)})]},c))})})},Ke=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(vs,{background:"neutral0",children:[(0,s.jsx)(Ts,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(As,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},vs=(0,S.default)(O.a)`
  overflow-x: auto;
`,Ue=({layout:e,...t})=>{const[o,n]=y.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(O.a,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ss,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ss=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,I.A)(),c=()=>{d(o)},u=o.split("::").pop()??"";return(0,s.jsxs)(Ve.n,{expanded:n,onToggle:c,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(we.P,{title:re(u),description:`${l({id:"Settings.permissions.category",defaultMessage:u},{category:u})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(He.u,{children:(0,s.jsx)(O.a,{padding:6,children:e.map(({actions:g,subCategoryName:m,subCategoryId:C})=>(0,s.jsx)(Ds,{actions:g,categoryName:u,isFormDisabled:r,subCategoryName:m,pathToData:[...i,C]},m))})})]})},Ds=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=y.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:c}=J(),{formatMessage:u}=(0,I.A)(),g=M(i,r,{}),m=y.useMemo(()=>Object.keys(g).reduce((E,A)=>(E[A]=ge(g[A]),E),{}),[g]),{hasAllActionsSelected:C,hasSomeActionsSelected:x}=G(m),h=()=>{d(E=>!E)},f=()=>{d(!1)},j=y.useMemo(()=>e.map(E=>{const A=[...r,E.action,"properties","enabled"],v=M(i,A,!1),T=M(i,[...r,E.action,"conditions"],{}),R=F(T).some(k=>k);return{...E,isDisplayed:v,checkboxName:A.join(".."),hasSomeActionsSelected:v,value:v,hasConditions:R,label:E.displayName,actionId:E.action,pathToConditionsObject:[...r,E.action]}}),[e,i,r]),P=M(i,[...r],{}),$=F(Object.entries(P).reduce((E,A)=>{const[v,{conditions:T}]=A;return E[v]=T,E},{})).some(E=>E);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(O.a,{children:[(0,s.jsxs)(_.s,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(O.a,{paddingRight:4,children:(0,s.jsx)(b.o,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(O.a,{paddingLeft:4,children:(0,s.jsx)(Ce.S,{name:r.join(".."),disabled:o,onValueChange:E=>{l({target:{name:r.join(".."),value:E}})},indeterminate:x,value:C,children:u({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(_.s,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(Fe.x,{gap:2,style:{flex:1},children:j.map(({checkboxName:E,value:A,action:v,displayName:T,hasConditions:R})=>(0,s.jsx)(Ge.E,{col:3,children:(0,s.jsx)(Ls,{disabled:o,hasConditions:R,children:(0,s.jsx)(Ce.S,{name:E,disabled:o,onValueChange:k=>{c({target:{name:E,value:k}})},value:A,children:T})})},v))}),(0,s.jsx)(ae,{hasConditions:$,onClick:h})]})]}),a&&(0,s.jsx)(Be,{headerBreadCrumbs:[t,n],actions:j,isFormDisabled:o,onClosed:f,onToggle:h})]})},$s=(0,S.default)(O.a)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ls=S.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Rs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Bs=y.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=y.useReducer(ks,Is,()=>Ws(e,o)),{formatMessage:l}=(0,I.A)();y.useImperativeHandle(n,()=>({getPermissions(){const x=(0,_e.difference)(r.collectionTypes,d.collectionTypes),h=(0,_e.difference)(r.singleTypes,d.singleTypes),f={...x,...h};let j;return Q(f)?j=!1:j=Object.values(f).some((P={})=>Object.values(P).some($=>ne($,"conditions"))),{permissionsToSend:is(d),didUpdateConditions:j}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const c=(x,h,f,j)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:x,propertyName:h,rowName:f,value:j})},u=(x,h,f)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:x,actionId:h,value:f})},g=x=>{i({type:"ON_CHANGE_CONDITIONS",conditions:x})},m=y.useCallback(({target:{name:x,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:x,value:h})},[]),C=y.useCallback(({target:{name:x,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:x,value:h})},[]);return(0,s.jsx)(ns,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:m,onChangeParentCheckbox:C,onChangeCollectionTypeLeftActionRowCheckbox:c,onChangeCollectionTypeGlobalActionCheckbox:u,children:(0,s.jsxs)(Xe.f,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(xe.t,{children:Rs.map(x=>(0,s.jsx)(xe.o,{children:l({id:x.labelId,defaultMessage:x.defaultMessage})},x.id))}),(0,s.jsxs)(z.T,{style:{position:"relative"},children:[(0,s.jsx)(z.K,{children:(0,s.jsx)(Ke,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ke,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ue,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(z.K,{children:(0,s.jsx)(Ue,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},ks=(e,t)=>(0,ye.Ay)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(M(e,d)).forEach(i=>{const l=M(e,[...d,i,r],void 0);if(l){let c=q(l,a);if(!a&&c.conditions){const u=q(c.conditions,!1);c={...c,conditions:u}}U(o,[...d,i,r],c)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=ce(e.modifiedData);const l=n.split(".."),c=M(i,l,{});Object.keys(c).forEach(u=>{if(ne(c[u],`properties.${r}`)){const g=M(c,[u,"properties",r,a]),m=[...l,u,"properties",r,a];if(!(0,w.F)(g))U(i,m,d);else{const C=q(g,d);U(i,m,C)}}}),d||(i=oe(i)),U(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;U(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=ce(e.modifiedData);U(n,[...t.keys.split("..")],t.value),t.value||(n=oe(n)),U(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=ce(e.modifiedData);const i=M(d,a,{}),l=q(i,r);U(d,a,l),r||(d=oe(d)),U(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ws=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:Se(a,"plugin"),settings:Se(d,"category")},l={collectionTypes:ve(n,o,t),singleTypes:ve(r,o,t),plugins:Te(i.plugins,o,t),settings:Te(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}}}}]);
