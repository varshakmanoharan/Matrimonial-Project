"use strict";(self.webpackChunkmatrimony=self.webpackChunkmatrimony||[]).push([[585],{92873:(W,s,t)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=t(92132),f=t(21272),T=t(94790),n=t(70746),O=t(63891),Y=t(8506),v=t(95278),M=t(31492),c=t(41999),Z=t(81303),U=t(67057),E=t(93788),g=t(69909),I=t(73725),a=t(48941),D=t(91753),C=t(76987),F=t(67296),K=t(83215),z=o=>o&&o.__esModule?o:{default:o};function B(o){if(o&&o.__esModule)return o;const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const d in o)if(d!=="default"){const h=Object.getOwnPropertyDescriptor(o,d);Object.defineProperty(l,d,h.get?h:{enumerable:!0,get:()=>o[d]})}}return l.default=o,Object.freeze(l)}const u=B(f),i=z(O),$=u.forwardRef(({allowCustomValue:o,autocomplete:l,children:d,className:h,clearLabel:j="clear",creatable:b=!1,createMessage:J=V=>`Create "${V}"`,defaultFilterValue:X,defaultTextValue:P,defaultOpen:go=!1,open:fo,onOpenChange:xo,disabled:w=!1,error:_,filterValue:po,hasMoreItems:Co=!1,id:q,isPrintableCharacter:mo,loading:G=!1,loadingMessage:jo="Loading content...",noOptionsMessage:yo=()=>"No results found",onChange:oo,onClear:Q,onCreateOption:eo,onFilterValueChange:Oo,onInputChange:to,onTextValueChange:Eo,onLoadMore:no,placeholder:Io="Select or enter a value",required:$o=!1,size:Ro="M",startIcon:so,textValue:Po,value:lo,...To},vo)=>{const[V,Mo]=M.useControllableState({prop:fo,defaultProp:go,onChange:xo}),[y,ro]=M.useControllableState({prop:Po,defaultProp:o&&!P?lo:P,onChange:Eo}),[Do,ao]=M.useControllableState({prop:po,defaultProp:X,onChange:Oo}),io=u.useRef(null),co=u.useRef(null),Fo=v.useComposedRefs(co,vo),Bo=u.useRef(null),So=r=>{Q&&!w&&(ro(""),ao(""),Q(r),co.current.focus())},Ao=r=>{Mo(r)},Lo=r=>{ro(r)},Vo=r=>{ao(r)},Wo=r=>{to&&to(r)},Uo=r=>{oo&&oo(r)},Ko=r=>{no&&Co&&!G&&no(r)},uo=()=>{eo&&y&&eo(y)},ho=c.useId(q),zo=c.useId(),bo=`intersection-${Y.stripReactIdOfColon(zo)}`;Z.useIntersection(io,Ko,{selectorToWatch:`#${bo}`,skipWhen:!V});const Ho=`${ho}-hint`,No=`${ho}-error`;return e.jsxs(n.Combobox.Root,{autocomplete:l||(b?"list":"both"),onOpenChange:Ao,open:V,onTextValueChange:Lo,textValue:y,allowCustomValue:b||o,disabled:w,required:$o,value:lo,onValueChange:Uo,filterValue:Do,onFilterValueChange:Vo,isPrintableCharacter:mo,children:[e.jsxs(N,{$hasError:Boolean(_),$size:Ro,className:h,children:[e.jsxs(g.Flex,{flex:"1",as:"span",gap:3,children:[so?e.jsx(I.Box,{as:"span","aria-hidden":!0,children:so}):null,e.jsx(A,{placeholder:Io,id:q,"aria-invalid":Boolean(_),"aria-describedby":`${Ho} ${No}`,onChange:Wo,ref:Fo,...To})]}),e.jsxs(g.Flex,{as:"span",gap:3,children:[y&&Q?e.jsx(x,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:So,"aria-disabled":w,"aria-label":j,title:j,ref:Bo,children:e.jsx(T.Cross,{})}):null,e.jsx(L,{children:e.jsx(T.CarretDown,{})})]})]}),e.jsx(n.Combobox.Portal,{children:e.jsx(p,{sideOffset:4,children:e.jsxs(R,{ref:io,children:[d,b?e.jsx(n.Combobox.CreateItem,{onPointerUp:uo,onClick:uo,asChild:!0,children:e.jsx(m,{children:e.jsx(a.Typography,{children:J(y??"")})})}):null,!b&&!G?e.jsx(n.Combobox.NoValueFound,{asChild:!0,children:e.jsx(m,{$hasHover:!1,children:e.jsx(a.Typography,{children:yo(y??"")})})}):null,G?e.jsx(g.Flex,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:e.jsx(U.Loader,{small:!0,children:jo})}):null,e.jsx(I.Box,{id:bo,width:"100%",height:"1px"})]})})})]})}),S=u.forwardRef(({error:o,hint:l,id:d,label:h,labelAction:j,required:b=!1,...J},X)=>{const P=c.useId(d);return e.jsx(D.Field,{hint:l,error:o,id:P,required:b,children:e.jsxs(g.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[h?e.jsx(C.FieldLabel,{action:j,children:h}):null,e.jsx($,{ref:X,id:P,error:o,required:b,...J}),e.jsx(F.FieldHint,{}),e.jsx(K.FieldError,{})]})})}),H=o=>e.jsx(S,{...o,creatable:!0}),x=i.default(I.Box)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.neutral600};
  }
`,N=i.default(n.Combobox.Trigger)`
  position: relative;
  border: 1px solid ${({theme:o,$hasError:l})=>l?o.colors.danger600:o.colors.neutral200};
  padding-right: ${({theme:o})=>o.spaces[3]};
  padding-left: ${({theme:o})=>o.spaces[3]};
  border-radius: ${({theme:o})=>o.borderRadius};
  background: ${({theme:o})=>o.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:o})=>o.spaces[4]};
  min-height: ${({theme:o,$size:l})=>E.getThemeSize("input")({theme:o,size:l})};

  &[data-disabled] {
    color: ${({theme:o})=>o.colors.neutral600};
    background: ${({theme:o})=>o.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:o,$hasError:l})=>E.inputFocusStyle()({theme:o,hasError:l})};
`,A=i.default(n.Combobox.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:o})=>o.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,L=i.default(n.Combobox.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:o})=>o.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,p=i.default(n.Combobox.Content)`
  background: ${({theme:o})=>o.colors.neutral0};
  box-shadow: ${({theme:o})=>o.shadows.filterShadow};
  border: 1px solid ${({theme:o})=>o.colors.neutral150};
  border-radius: ${({theme:o})=>o.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:o})=>o.zIndices[1]};
`,R=i.default(n.Combobox.Viewport)`
  padding: ${({theme:o})=>o.spaces[1]};
`,k=u.forwardRef(({children:o,value:l,disabled:d,textValue:h,...j},b)=>e.jsx(n.Combobox.ComboboxItem,{asChild:!0,value:l,disabled:d,textValue:h,children:e.jsx(m,{ref:b,...j,children:e.jsx(n.Combobox.ItemText,{asChild:!0,children:e.jsx(a.Typography,{children:o})})})})),m=i.default.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:o})=>o.spaces[2]} ${({theme:o})=>o.spaces[4]};
  background-color: ${({theme:o})=>o.colors.neutral0};
  border-radius: ${({theme:o})=>o.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:o})=>o.colors.primary100};

    ${a.Typography} {
      color: ${({theme:o})=>o.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:o,$hasHover:l=!0})=>l?o.colors.primary100:o.colors.neutral0};
  }

  &[data-highlighted] {
    ${a.Typography} {
      color: ${({theme:o})=>o.colors.primary600};
      font-weight: bold;
    }
  }
`;s.Combobox=S,s.ComboboxInput=$,s.CreatableCombobox=H,s.Option=k,s.OptionBox=m},73144:(W,s,t)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const f=t(92873).Option;s.ComboboxOption=f},66096:(W,s,t)=>{Object.defineProperty(s,Symbol.toStringTag,{value:"Module"});const e=t(92873),f=t(73144);s.Combobox=e.Combobox,s.CreatableCombobox=e.CreatableCombobox,s.ComboboxOption=f.ComboboxOption},30585:(W,s,t)=>{t.r(s),t.d(s,{default:()=>I});var e=t(92132),f=t(21272),T=t(33544),n=t.n(T),O=t(66096),Y=t.n(O),v=t(70505),M=t.n(v),c=t(79521),Z=t.n(c),U=t(54894),E=t(45250);const g=f.forwardRef(({value:a,onChange:D,name:C,intlLabel:F,labelAction:K,required:z,attribute:B,description:u,placeholder:i,disabled:$,error:S},H)=>{const{formatMessage:x,messages:N}=(0,U.A)(),A=JSON.parse(N[(0,E.A)("countries")]),L=!a||A.hasOwnProperty(a);return(0,e.jsx)(c.Field,{name:C,id:C,error:L?S:x({id:(0,E.A)("country-select.unsupported-country-code")},{countryCode:a}),required:z,hint:u&&x(u),children:(0,e.jsxs)(v.Stack,{spacing:1,children:[(0,e.jsx)(c.FieldLabel,{action:K,children:x(F)}),(0,e.jsx)(O.Combobox,{ref:H,placeholder:i&&x(i),"aria-label":x(F),"aria-disabled":$,disabled:$,value:L?a:null,onChange:p=>D({target:{name:C,value:p,type:B.type}}),onClear:()=>D({target:{name:C,value:"",type:B.type}}),children:Object.entries(A).sort(([p,R],[k,m])=>R.localeCompare(m)).map(([p,R])=>(0,e.jsx)(O.ComboboxOption,{value:p,children:R},p))}),(0,e.jsx)(c.FieldHint,{}),(0,e.jsx)(c.FieldError,{})]})})});g.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},g.propTypes={intlLabel:n().object.isRequired,onChange:n().func.isRequired,attribute:n().object.isRequired,name:n().string.isRequired,description:n().object,disabled:n().bool,error:n().string,labelAction:n().object,required:n().bool,value:n().string};const I=g}}]);
