(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"30+C":function(e,a,t){"use strict";var n=t("wx14"),o=t("Ff2n"),r=t("q1tI"),c=t.n(r),l=(t("17x9"),t("iuhU")),i=t("kKAo"),s=t("H2TA"),d=c.a.forwardRef((function(e,a){var t=e.classes,r=e.className,s=e.raised,d=void 0!==s&&s,u=Object(o.a)(e,["classes","className","raised"]);return c.a.createElement(i.a,Object(n.a)({className:Object(l.a)(t.root,r),elevation:d?8:1,ref:a},u))}));a.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},"5kuK":function(e,a,t){"use strict";t.r(a);var n=t("pLtp"),o=t.n(n),r=t("6BQ9"),c=t.n(r),l=t("ln6h"),i=t.n(l),s=t("q1tI"),d=t.n(s),u=t("nOHt"),m=t("Z3vd"),p=t("ofer"),f=t("30+C"),b=t("oa/T"),v=t("wx14"),h=t("Ff2n"),g=(t("17x9"),t("iuhU")),y=t("ODXe"),O=t("yCxk"),j=t("EHdT"),x=t("H2TA"),k=t("PsDL"),C=d.a.forwardRef((function(e,a){var t=e.autoFocus,n=e.checked,o=e.checkedIcon,r=e.classes,c=e.className,l=e.defaultChecked,i=e.disabled,s=e.icon,u=e.id,m=e.inputProps,p=e.inputRef,f=e.name,b=e.onBlur,x=e.onChange,C=e.onFocus,w=e.readOnly,N=e.required,R=e.tabIndex,E=e.type,S=e.value,P=Object(h.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),T=Object(O.a)({controlled:n,default:Boolean(l),name:"SwitchBase"}),B=Object(y.a)(T,2),z=B[0],H=B[1],I=Object(j.a)(),M=i;I&&"undefined"===typeof M&&(M=I.disabled);var q="checkbox"===E||"radio"===E;return d.a.createElement(k.a,Object(v.a)({component:"span",className:Object(g.a)(r.root,c,z&&r.checked,M&&r.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),I&&I.onFocus&&I.onFocus(e)},onBlur:function(e){b&&b(e),I&&I.onBlur&&I.onBlur(e)},ref:a},P),d.a.createElement("input",Object(v.a)({autoFocus:t,checked:n,defaultChecked:l,className:r.input,disabled:M,id:q&&u,name:f,onChange:function(e){var a=e.target.checked;H(a),x&&x(e,a)},readOnly:w,ref:p,required:N,tabIndex:R,type:E,value:S},m)),z?o:s)})),w=Object(x.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(C),N=t("As0B"),R=Object(N.a)(d.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),E=Object(N.a)(d.a.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var S=Object(x.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var a=e.checked,t=e.classes,n=e.fontSize;return d.a.createElement("div",{className:Object(g.a)(t.root,a&&t.checked)},d.a.createElement(R,{fontSize:n}),d.a.createElement(E,{fontSize:n,className:t.layer}))})),P=t("ye/S"),T=t("NqtD"),B=t("x6Ns");var z=d.a.createContext();var H=d.a.createElement(S,{checked:!0}),I=d.a.createElement(S,null),M=d.a.forwardRef((function(e,a){var t=e.checked,n=e.classes,o=e.color,r=void 0===o?"secondary":o,c=e.name,l=e.onChange,i=e.size,s=void 0===i?"medium":i,u=Object(h.a)(e,["checked","classes","color","name","onChange","size"]),m=d.a.useContext(z),p=t,f=Object(B.a)(l,m&&m.onChange),b=c;return m&&("undefined"===typeof p&&(p=m.value===e.value),"undefined"===typeof b&&(b=m.name)),d.a.createElement(w,Object(v.a)({color:r,type:"radio",icon:d.a.cloneElement(I,{fontSize:"small"===s?"small":"default"}),checkedIcon:d.a.cloneElement(H,{fontSize:"small"===s?"small":"default"}),classes:{root:Object(g.a)(n.root,n["color".concat(Object(T.a)(r))]),checked:n.checked,disabled:n.disabled},name:b,checked:p,onChange:f,ref:a},u))})),q=Object(x.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(P.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(P.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(M),A=d.a.forwardRef((function(e,a){var t=e.classes,n=e.className,o=e.row,r=void 0!==o&&o,c=Object(h.a)(e,["classes","className","row"]);return d.a.createElement("div",Object(v.a)({className:Object(g.a)(t.root,n,r&&t.row),ref:a},c))})),F=Object(x.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(A),L=t("bfFb"),_=d.a.forwardRef((function(e,a){var t=e.actions,n=e.children,o=e.name,r=e.value,c=e.onChange,l=Object(h.a)(e,["actions","children","name","value","onChange"]),i=d.a.useRef(null),s=Object(O.a)({controlled:r,default:e.defaultValue,name:"RadioGroup"}),u=Object(y.a)(s,2),m=u[0],p=u[1];d.a.useImperativeHandle(t,(function(){return{focus:function(){var e=i.current.querySelector("input:not(:disabled):checked");e||(e=i.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var f=Object(L.a)(a,i);return d.a.createElement(z.Provider,{value:{name:o,onChange:function(e){p(e.target.value),c&&c(e,e.target.value)},value:m}},d.a.createElement(F,Object(v.a)({role:"radiogroup",ref:f},l),n))})),D=d.a.forwardRef((function(e,a){e.checked;var t=e.classes,n=e.className,o=e.control,r=e.disabled,c=(e.inputRef,e.label),l=e.labelPlacement,i=void 0===l?"end":l,s=(e.name,e.onChange,e.value,Object(h.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),u=Object(j.a)(),m=r;"undefined"===typeof m&&"undefined"!==typeof o.props.disabled&&(m=o.props.disabled),"undefined"===typeof m&&u&&(m=u.disabled);var f={disabled:m};return["checked","name","onChange","value","inputRef"].forEach((function(a){"undefined"===typeof o.props[a]&&"undefined"!==typeof e[a]&&(f[a]=e[a])})),d.a.createElement("label",Object(v.a)({className:Object(g.a)(t.root,n,"end"!==i&&t["labelPlacement".concat(Object(T.a)(i))],m&&t.disabled),ref:a},s),d.a.cloneElement(o,f),d.a.createElement(p.a,{component:"span",className:Object(g.a)(t.label,m&&t.disabled)},c))})),$=Object(x.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(D),J=t("ADg1"),V=t("NDwu"),U=t("q9P1"),X=t.n(U),G=t("79Xs"),W=t("ZiQX");var K=d.a.createContext(),Z=d.a.forwardRef((function(e,a){var t=e.classes,n=e.className,o=e.component,r=void 0===o?"table":o,c=e.padding,l=void 0===c?"default":c,i=e.size,s=void 0===i?"medium":i,u=e.stickyHeader,m=void 0!==u&&u,p=Object(h.a)(e,["classes","className","component","padding","size","stickyHeader"]),f=d.a.useMemo((function(){return{padding:l,size:s,stickyHeader:m}}),[l,s,m]);return d.a.createElement(K.Provider,{value:f},d.a.createElement(r,Object(v.a)({ref:a,className:Object(g.a)(t.root,n,m&&t.stickyHeader)},p)))})),Q=Object(x.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(v.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(Z);var Y=d.a.createContext(),ee={variant:"body"},ae=d.a.forwardRef((function(e,a){var t=e.classes,n=e.className,o=e.component,r=void 0===o?"tbody":o,c=Object(h.a)(e,["classes","className","component"]);return d.a.createElement(Y.Provider,{value:ee},d.a.createElement(r,Object(v.a)({className:Object(g.a)(t.root,n),ref:a},c)))})),te=Object(x.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(ae),ne=d.a.forwardRef((function(e,a){var t,n=e.align,o=void 0===n?"inherit":n,r=e.classes,c=e.className,l=e.component,i=e.padding,s=e.scope,u=e.size,m=e.sortDirection,p=e.variant,f=Object(h.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),b=d.a.useContext(K),y=d.a.useContext(Y);t=l||(y&&"head"===y.variant?"th":"td");var O=s;!O&&y&&"head"===y.variant&&(O="col");var j=i||(b&&b.padding?b.padding:"default"),x=u||(b&&b.size?b.size:"medium"),k=p||y&&y.variant,C=null;return m&&(C="asc"===m?"ascending":"descending"),d.a.createElement(t,Object(v.a)({ref:a,className:Object(g.a)(r.root,r[k],c,"inherit"!==o&&r["align".concat(Object(T.a)(o))],"default"!==j&&r["padding".concat(Object(T.a)(j))],"medium"!==x&&r["size".concat(Object(T.a)(x))],{head:b&&b.stickyHeader&&r.stickyHeader}[k]),"aria-sort":C,scope:O},f))})),oe=Object(x.a)((function(e){return{root:Object(v.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(P.e)(Object(P.c)(e.palette.divider,1),.88):Object(P.a)(Object(P.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(ne),re=d.a.forwardRef((function(e,a){var t=e.classes,n=e.className,o=e.component,r=void 0===o?"div":o,c=Object(h.a)(e,["classes","className","component"]);return d.a.createElement(r,Object(v.a)({ref:a,className:Object(g.a)(t.root,n)},c))})),ce=Object(x.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(re),le={variant:"head"},ie=d.a.forwardRef((function(e,a){var t=e.classes,n=e.className,o=e.component,r=void 0===o?"thead":o,c=Object(h.a)(e,["classes","className","component"]);return d.a.createElement(Y.Provider,{value:le},d.a.createElement(r,Object(v.a)({className:Object(g.a)(t.root,n),ref:a},c)))})),se=Object(x.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(ie),de=d.a.forwardRef((function(e,a){var t=e.classes,n=e.className,o=e.component,r=void 0===o?"tr":o,c=e.hover,l=void 0!==c&&c,i=e.selected,s=void 0!==i&&i,u=Object(h.a)(e,["classes","className","component","hover","selected"]),m=d.a.useContext(Y);return d.a.createElement(r,Object(v.a)({ref:a,className:Object(g.a)(t.root,n,m&&{head:t.head,footer:t.footer}[m.variant],l&&t.hover,s&&t.selected)},u))})),ue=Object(x.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(P.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(de),me=t("LMIa"),pe=d.a.createElement;a.default=function(){var e=Object(u.useRouter)().query.id,a=Object(s.useState)(),t=a[0],n=a[1],r=Object(s.useState)(),l=r[0],v=r[1],h=Object(s.useState)(),g=h[0],y=h[1],O=Object(s.useState)(""),j=O[0],x=O[1],k=Object(s.useState)(!1),C=k[0],w=k[1],N=Object(s.useState)(!1),R=N[0],E=N[1];function S(e){for(var a=e.toString().substr(2,e.length),t="",n=0;n<a.length;n+=2){var o=c()(a.substr(n,2),16);0!==o&&(t+=String.fromCharCode(o))}return t}return Object(s.useEffect)((function(){!t&&e&&function(){var a,t,o,r,c,l,s,d,u,m;i.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,i.a.awrap(me.a.getProposal(e));case 2:return a=p.sent,n(a.toJSON()),p.next=6,i.a.awrap(me.a.getVoteRecords(a.toJSON().vote_id));case 6:if(t=p.sent,o=t.toJSON(),v(o),o){for(r={},c=o.reveals.length,l=0;l<c;l++)for(s=o.reveals[l],d=s[1],u=0;u<d.length;u++)m=d[u],r[m]?r[m]++:r[m]=1;y(r)}case 10:case"end":return p.stop()}}))}()}),[t]),t?pe(d.a.Fragment,null,pe(p.a,{variant:"h4"},t.title),pe("br",null),pe(f.a,null,pe(b.a,null,pe(p.a,{variant:"h5"},t.contents),pe("br",null),pe(p.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},"Hash: ",e),l&&pe(d.a.Fragment,null,pe(p.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},"Author: ",t.author),pe(p.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},"Stage: ",o()(l.data.stage)[0]),pe(p.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},"Vote Type: ",null===l.data.vote_type.binary?"Binary":"MultiOption"),pe(p.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},"Tally Type: ",null===l.data.tally_type.oneperson?"OnePerson":"OneCoin"),pe(p.a,{variant:"h6",color:"textSecondary"},"Is Commit/Reveal: ",l.data.is_commit_reveal?"true":"false"),pe("br",null),pe(J.a,{component:"fieldset"},pe(V.a,{component:"legend"},"Votes"),pe(_,{"aria-label":"vote",name:"vote",value:j,onChange:function(e){x(e.target.value)}},l.outcomes.map((function(e,a){return pe($,{key:a,value:e,control:pe(q,null),label:"".concat(S(e)," - ").concat(g&&g[e]||0,"/").concat(l?l.reveals.length:0," votes")})})))),"voting"===o()(l.data.stage)[0]&&pe(d.a.Fragment,null,pe("br",null),pe("br",null),pe(m.a,{variant:"contained",type:"button",onClick:function(){w(!0),me.a.vote(l.id,j,!1,(function(){w(!1),E(!0)}),(function(){w(!1)}))},disabled:C},"Submit Vote"))))),pe(G.a,{open:C},pe(W.a,{severity:"info"},"Submitting transaction, please wait...")),pe(G.a,{open:R},pe(W.a,{severity:"success"},"Vote submitted!")),pe("br",null),l&&pe(d.a.Fragment,null,pe(f.a,null,pe(ce,{component:b.a},pe(p.a,{variant:"h5"},"Reveals: ",l?l.reveals.length:0),pe(Q,{"aria-label":"Reveals table"},pe(se,null,pe(ue,null,pe(oe,null,"Voter Address"),l.outcomes.map((function(e,a){return pe(oe,{align:"right",key:a},S(e))})))),pe(te,null,l.reveals.map((function(e,a){return pe(ue,{key:a},pe(oe,{component:"th",scope:"row"},e[0]),l.outcomes.map((function(a,t){return pe(oe,{align:"right",key:t},e[1].indexOf(a)>-1&&pe(X.a,null))})))})))))),pe("br",null),pe(f.a,null,pe(ce,{component:b.a},pe(p.a,{variant:"h5"},"Commitments: ",l?l.commitments.length:0),pe(Q,{"aria-label":"Reveals table"},pe(se,null,pe(ue,null,pe(oe,null,"Voter Address"),l.outcomes.map((function(e,a){return pe(oe,{align:"right",key:a},S(e))})))),pe(te,null,l.commitments.map((function(e,a){return pe(ue,{key:a},pe(oe,{component:"th",scope:"row"},e[0]),l.outcomes.map((function(a,t){return pe(oe,{align:"right",key:t},e[1].indexOf(a)>-1&&pe(X.a,null))})))})))))))):pe(p.a,{variant:"h4"},"Loading...")}},"8/g6":function(e,a,t){"use strict";var n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=r.default.memo(r.default.forwardRef((function(a,t){return r.default.createElement(c.default,(0,o.default)({ref:t},a),e)})));0;return t.muiName=c.default.muiName,t};var o=n(t("pVnL")),r=n(t("q1tI")),c=n(t("UJJ5"))},Gxqj:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/proposal/[id]",function(){return t("5kuK")}])},UJJ5:function(e,a,t){"use strict";t.r(a);var n=t("HR5l");t.d(a,"default",(function(){return n.a}))},"oa/T":function(e,a,t){"use strict";var n=t("wx14"),o=t("Ff2n"),r=t("q1tI"),c=t.n(r),l=(t("17x9"),t("iuhU")),i=t("H2TA"),s=c.a.forwardRef((function(e,a){var t=e.classes,r=e.className,i=e.component,s=void 0===i?"div":i,d=Object(o.a)(e,["classes","className","component"]);return c.a.createElement(s,Object(n.a)({className:Object(l.a)(t.root,r),ref:a},d))}));a.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},pVnL:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}e.exports=t},q9P1:function(e,a,t){"use strict";var n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(t("q1tI")),r=(0,n(t("8/g6")).default)(o.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");a.default=r}},[["Gxqj",1,2,3,0,18,19,20,21]]]);