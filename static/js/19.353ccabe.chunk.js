(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[19],{1022:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",{className:"bread_crumb"},e.children)}},1059:function(e,t,a){"use strict";a.r(t);var n=a(89),i=a(0),r=a.n(i),l=a(1025),c=a(1014),s=a(1018),o=a(7),m=(a(9),a(1022)),u=a(331),d=a(147),p=a(1013),f=a(181),b=a(1045),y=a(1042),E=a(1052),v=a(57),g=c.a.Option,h=(c.a.OptGroup,function(e){Object(v.h)();var t=s.a.Item,a=e.setvisible,l=e.isvisible,o=Object(i.useState)([]),m=Object(n.a)(o,2),u=(m[0],m[1],Object(i.useState)(0)),d=Object(n.a)(u,2),b=d[0],y=d[1],h=s.a.useForm(),k=Object(n.a)(h,1)[0];return Object(i.useEffect)((function(){0==b&&(k.resetFields(),y(1))}),[b]),console.log("fd"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Add Penetrant Type",footer:!1,visible:l,onCancel:function(){return a(!1)}},r.a.createElement("div",{className:"pop-up-forms product_form"},r.a.createElement(s.a,{initialValues:{remember:!0},name:"basic",form:k,onFinish:function(e){a(!1),k.resetFields()},layout:"inline"},r.a.createElement(t,{rules:[{required:!0,message:"Please input your Title!'}"}],name:"penetrant_type"},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(t,{rules:[{required:!0,message:"Please select any one of the field"}],name:"status"},r.a.createElement(c.a,{placeholder:"Status",onChange:function(e){console.log(e,"i am here")}},r.a.createElement(g,{value:"active"},"Active"),r.a.createElement(g,{value:"inactive"},"Inactive"))),r.a.createElement("div",{className:"submit_popup"},r.a.createElement(f.a,{className:"gx-mb-0 ",type:"primary",htmlType:"submit"},"Add"))))))}),k=c.a.Option,x=(c.a.OptGroup,s.a.Item),O=function(e){e.match;var t,a=s.a.useForm(),l=Object(n.a)(a,1)[0],o=Object(i.useState)(!1),m=Object(n.a)(o,2),u=m[0],E=m[1],v=Object(i.useState)("1"),g=Object(n.a)(v,2),O=(g[0],g[1],Object(i.useState)([])),j=Object(n.a)(O,2),F=j[0],S=j[1],_=Object(i.useState)([]),N=Object(n.a)(_,2),C=N[0],T=N[1],I=Object(i.useState)([{key:"1",penetrant_type:"penetrant_typess1",status:"inactive",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"2",penetrant_type:"penetrant_typess2",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"3",status:"active",penetrant_type:"penetrant_typess3",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"4",status:"active",penetrant_type:"penetrant_typess4",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"5",penetrant_type:"penetrant_typess5",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"6",penetrant_type:"penetrant_typess6",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))}]),A=Object(n.a)(I,2),w=A[0],D=A[1],P=[{title:"Title",dataIndex:"penetrant_type",key:"penetrant_type",render:function(e,t,a){if(F.filter((function(e){return a==e.index})).length>0){var n={},i=F.filter((function(e,t){return e.index==a}));i=i[0].key;var o=w.filter((function(e){return e.key==i}));return n["penetrant_type".concat(a)]=o[0].penetrant_type,n["permissions".concat(a)]=o[0].permissions,n["status".concat(a)]=o[0].status,-1==C.indexOf(a)?(l.setFieldsValue(n),T((function(e){return[].concat(Object(d.a)(e),[a])}))):C.indexOf(a),{props:{colSpan:3},children:r.a.createElement(s.a,{initialValues:{remember:!0},name:"basic",form:l,onFinish:function(e){var t=w.map((function(t){if(t.key==i){var n=t;return n.penetrant_type=e["penetrant_type".concat(a)],n.status=e["status".concat(a)],t}return t})),n=F.filter((function(e){return e.key!=i}));S(n),D(t)},onFinishFailed:function(){},layout:"inline"},r.a.createElement(x,{label:"Title",rules:[{required:!0,message:"Please input your Title!'}"}],name:"penetrant_type".concat(a)},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(x,{label:"Status",rules:[{required:!0,message:"Please select any one of the field"}],name:"status".concat(a)},r.a.createElement(c.a,{style:{width:200},onChange:function(e){}},r.a.createElement(k,{value:"active"},"Active"),r.a.createElement(k,{value:"inactive"},"Inactive"))),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Save"),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",onClick:function(){var e=F.filter((function(e){return e.key!=i}));S(e)}},"Cancel"))}}return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Created",dataIndex:"created",key:"created"},{title:"Modified",dataIndex:"modified",key:"modified"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",dataIndex:"action"}];return t=w.map((function(e,t){return F.filter((function(t){return console.log(String(e.key)==String(t.key),"i am here"),console.log(t.key,"i am here"),String(e.key)==String(t.key)})).length>0?{key:e.key,penetrant_type:"",created:"",modified:"",status:"",permissions:"",action:""}:{key:e.key,penetrant_type:e.penetrant_type,created:"06-09-2022",modified:"07-09-2022",status:"active"==e.status?r.a.createElement("button",{style:{background:"#4ad411b8",border:"1px solid #4ad411b8",width:"70px",color:"white",fontWeight:"200"}},"active"):r.a.createElement("button",{style:{background:"#ff000096",border:"1px solid #ff000096",width:"70px",color:"white",fontWeight:"200"}},"Inactive"),permissions:e.permissions,action:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-edit",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,onClick:function(e){var t={key:e.target.id,index:e.target.getAttribute("data-index")};S((function(e){return[].concat(Object(d.a)(e),[t])}))},"data-index":t}),r.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,"data-index":t,onClick:function(e){var t=w.filter((function(t){return t.key!=e.target.id}));t.map((function(e,t){F.map((function(a,n){if(e.key==a.key)if(a.index==t);else{var i=F;i[n].index="".concat(t),S(i)}}))}));D(t)}})))}})),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px",marginRight:"20px"}},r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",onClick:function(){return E(!0)}},"Add")),r.a.createElement(b.a,{className:"gx-card"},r.a.createElement(y.a,{className:"gx-table-responsive",pagination:{pageSize:4},columns:P,dataSource:t})),r.a.createElement(h,{setvisible:E,isvisible:u}))},j=c.a.Option,F=(c.a.OptGroup,function(e){Object(v.h)();var t=s.a.Item,a=e.setvisible,l=e.isvisible,o=Object(i.useState)([]),m=Object(n.a)(o,2),u=(m[0],m[1],Object(i.useState)(0)),d=Object(n.a)(u,2),b=d[0],y=d[1],g=s.a.useForm(),h=Object(n.a)(g,1)[0];return Object(i.useEffect)((function(){0==b&&(h.resetFields(),y(1))}),[b]),console.log("fd"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Add Method",footer:!1,visible:l,onCancel:function(){return a(!1)}},r.a.createElement("div",{className:"pop-up-forms product_form"},r.a.createElement(s.a,{initialValues:{remember:!0},name:"basic",form:h,onFinish:function(e){a(!1),h.resetFields()},layout:"inline"},r.a.createElement(t,{rules:[{required:!0,message:"Please input your Title!'}"}],name:"method"},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(t,{rules:[{required:!0,message:"Please select any one of the field"}],name:"status"},r.a.createElement(c.a,{placeholder:"Status",onChange:function(e){console.log(e,"i am here")}},r.a.createElement(j,{value:"active"},"Active"),r.a.createElement(j,{value:"inactive"},"Inactive"))),r.a.createElement("div",{className:"submit_popup"},r.a.createElement(f.a,{className:"gx-mb-0 ",type:"primary",htmlType:"submit"},"Add"))))))}),S=c.a.Option,_=(c.a.OptGroup,s.a.Item),N=function(e){e.match;var t,a=s.a.useForm(),l=Object(n.a)(a,1)[0],o=Object(i.useState)(!1),m=Object(n.a)(o,2),u=m[0],E=m[1],v=Object(i.useState)("1"),g=Object(n.a)(v,2),h=(g[0],g[1],Object(i.useState)([])),k=Object(n.a)(h,2),x=k[0],O=k[1],j=Object(i.useState)([]),N=Object(n.a)(j,2),C=N[0],T=N[1],I=Object(i.useState)([{key:"1",method:"methodss1",status:"inactive",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"2",method:"methodss2",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"3",status:"active",method:"methodss3",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"4",status:"active",method:"methodss4",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"5",method:"methodss5",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"6",method:"methodss6",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))}]),A=Object(n.a)(I,2),w=A[0],D=A[1],P=[{title:"Title",dataIndex:"method",key:"method",render:function(e,t,a){if(x.filter((function(e){return a==e.index})).length>0){var n={},i=x.filter((function(e,t){return e.index==a}));i=i[0].key;var o=w.filter((function(e){return e.key==i}));return n["method".concat(a)]=o[0].method,n["permissions".concat(a)]=o[0].permissions,n["status".concat(a)]=o[0].status,-1==C.indexOf(a)?(l.setFieldsValue(n),T((function(e){return[].concat(Object(d.a)(e),[a])}))):C.indexOf(a),{props:{colSpan:3},children:r.a.createElement(s.a,{initialValues:{remember:!0},name:"basic",form:l,onFinish:function(e){var t=w.map((function(t){if(t.key==i){var n=t;return n.method=e["method".concat(a)],n.status=e["status".concat(a)],t}return t})),n=x.filter((function(e){return e.key!=i}));O(n),D(t)},onFinishFailed:function(){},layout:"inline"},r.a.createElement(_,{label:"Title",rules:[{required:!0,message:"Please input your Title!'}"}],name:"method".concat(a)},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(_,{label:"Status",rules:[{required:!0,message:"Please select any one of the field"}],name:"status".concat(a)},r.a.createElement(c.a,{style:{width:200},onChange:function(e){}},r.a.createElement(S,{value:"active"},"Active"),r.a.createElement(S,{value:"inactive"},"Inactive"))),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Save"),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",onClick:function(){var e=x.filter((function(e){return e.key!=i}));O(e)}},"Cancel"))}}return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Created",dataIndex:"created",key:"created"},{title:"Modified",dataIndex:"modified",key:"modified"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",dataIndex:"action"}];return t=w.map((function(e,t){return x.filter((function(t){return console.log(String(e.key)==String(t.key),"i am here"),console.log(t.key,"i am here"),String(e.key)==String(t.key)})).length>0?{key:e.key,method:"",created:"",modified:"",status:"",permissions:"",action:""}:{key:e.key,method:e.method,created:"06-09-2022",modified:"07-09-2022",status:"active"==e.status?r.a.createElement("button",{style:{background:"#4ad411b8",border:"1px solid #4ad411b8",width:"70px",color:"white",fontWeight:"200"}},"active"):r.a.createElement("button",{style:{background:"#ff000096",border:"1px solid #ff000096",width:"70px",color:"white",fontWeight:"200"}},"Inactive"),permissions:e.permissions,action:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-edit",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,onClick:function(e){var t={key:e.target.id,index:e.target.getAttribute("data-index")};O((function(e){return[].concat(Object(d.a)(e),[t])}))},"data-index":t}),r.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,"data-index":t,onClick:function(e){var t=w.filter((function(t){return t.key!=e.target.id}));t.map((function(e,t){x.map((function(a,n){if(e.key==a.key)if(a.index==t);else{var i=x;i[n].index="".concat(t),O(i)}}))}));D(t)}})))}})),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px",marginRight:"20px"}},r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",onClick:function(){return E(!0)}},"Add")),r.a.createElement(b.a,{className:"gx-card"},r.a.createElement(y.a,{className:"gx-table-responsive",pagination:{pageSize:4},columns:P,dataSource:t})),r.a.createElement(F,{setvisible:E,isvisible:u}))},C=c.a.Option,T=(c.a.OptGroup,function(e){Object(v.h)();var t=s.a.Item,a=e.setvisible,l=e.isvisible,o=Object(i.useState)([]),m=Object(n.a)(o,2),u=(m[0],m[1],Object(i.useState)(0)),d=Object(n.a)(u,2),b=d[0],y=d[1],g=s.a.useForm(),h=Object(n.a)(g,1)[0];return Object(i.useEffect)((function(){0==b&&(h.resetFields(),y(1))}),[b]),console.log("fd"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Add Penetrant Form",footer:!1,visible:l,onCancel:function(){return a(!1)}},r.a.createElement("div",{className:"pop-up-forms product_form"},r.a.createElement(s.a,{initialValues:{remember:!0},name:"basic",form:h,onFinish:function(e){a(!1),h.resetFields()},layout:"inline"},r.a.createElement(t,{rules:[{required:!0,message:"Please input your Title!'}"}],name:"penetrant_Form"},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(t,{rules:[{required:!0,message:"Please select any one of the field"}],name:"status"},r.a.createElement(c.a,{placeholder:"Status",onChange:function(e){console.log(e,"i am here")}},r.a.createElement(C,{value:"active"},"Active"),r.a.createElement(C,{value:"inactive"},"Inactive"))),r.a.createElement("div",{className:"submit_popup"},r.a.createElement(f.a,{className:"gx-mb-0 ",type:"primary",htmlType:"submit"},"Add"))))))}),I=c.a.Option,A=(c.a.OptGroup,s.a.Item),w=function(e){e.match;var t,a=s.a.useForm(),l=Object(n.a)(a,1)[0],o=Object(i.useState)(!1),m=Object(n.a)(o,2),u=m[0],E=m[1],v=Object(i.useState)("1"),g=Object(n.a)(v,2),h=(g[0],g[1],Object(i.useState)([])),k=Object(n.a)(h,2),x=k[0],O=k[1],j=Object(i.useState)([]),F=Object(n.a)(j,2),S=F[0],_=F[1],N=Object(i.useState)([{key:"1",penetrant_Form:"penetrant_Formss1",status:"inactive",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"2",penetrant_Form:"penetrant_Formss2",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"3",status:"active",penetrant_Form:"penetrant_Formss3",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"4",status:"active",penetrant_Form:"penetrant_Formss4",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"5",penetrant_Form:"penetrant_Formss5",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"6",penetrant_Form:"penetrant_Formss6",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))}]),C=Object(n.a)(N,2),w=C[0],D=C[1],P=[{title:"Title",dataIndex:"penetrant_Form",key:"penetrant_Form",render:function(e,t,a){if(x.filter((function(e){return a==e.index})).length>0){var n={},i=x.filter((function(e,t){return e.index==a}));i=i[0].key;var o=w.filter((function(e){return e.key==i}));return n["penetrant_Form".concat(a)]=o[0].penetrant_Form,n["permissions".concat(a)]=o[0].permissions,n["status".concat(a)]=o[0].status,-1==S.indexOf(a)?(l.setFieldsValue(n),_((function(e){return[].concat(Object(d.a)(e),[a])}))):S.indexOf(a),{props:{colSpan:3},children:r.a.createElement(s.a,{initialValues:{remember:!0},name:"basic",form:l,onFinish:function(e){var t=w.map((function(t){if(t.key==i){var n=t;return n.penetrant_Form=e["penetrant_Form".concat(a)],n.status=e["status".concat(a)],t}return t})),n=x.filter((function(e){return e.key!=i}));O(n),D(t)},onFinishFailed:function(){},layout:"inline"},r.a.createElement(A,{label:"Title",rules:[{required:!0,message:"Please input your Title!'}"}],name:"penetrant_Form".concat(a)},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(A,{label:"Status",rules:[{required:!0,message:"Please select any one of the field"}],name:"status".concat(a)},r.a.createElement(c.a,{style:{width:200},onChange:function(e){}},r.a.createElement(I,{value:"active"},"Active"),r.a.createElement(I,{value:"inactive"},"Inactive"))),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Save"),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",onClick:function(){var e=x.filter((function(e){return e.key!=i}));O(e)}},"Cancel"))}}return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Created",dataIndex:"created",key:"created"},{title:"Modified",dataIndex:"modified",key:"modified"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",dataIndex:"action"}];return t=w.map((function(e,t){return x.filter((function(t){return console.log(String(e.key)==String(t.key),"i am here"),console.log(t.key,"i am here"),String(e.key)==String(t.key)})).length>0?{key:e.key,penetrant_Form:"",created:"",modified:"",status:"",permissions:"",action:""}:{key:e.key,penetrant_Form:e.penetrant_Form,created:"06-09-2022",modified:"07-09-2022",status:"active"==e.status?r.a.createElement("button",{style:{background:"#4ad411b8",border:"1px solid #4ad411b8",width:"70px",color:"white",fontWeight:"200"}},"active"):r.a.createElement("button",{style:{background:"#ff000096",border:"1px solid #ff000096",width:"70px",color:"white",fontWeight:"200"}},"Inactive"),permissions:e.permissions,action:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-edit",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,onClick:function(e){var t={key:e.target.id,index:e.target.getAttribute("data-index")};O((function(e){return[].concat(Object(d.a)(e),[t])}))},"data-index":t}),r.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,"data-index":t,onClick:function(e){var t=w.filter((function(t){return t.key!=e.target.id}));t.map((function(e,t){x.map((function(a,n){if(e.key==a.key)if(a.index==t);else{var i=x;i[n].index="".concat(t),O(i)}}))}));D(t)}})))}})),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px",marginRight:"20px"}},r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",onClick:function(){return E(!0)}},"Add")),r.a.createElement(b.a,{className:"gx-card"},r.a.createElement(y.a,{className:"gx-table-responsive",pagination:{pageSize:4},columns:P,dataSource:t})),r.a.createElement(T,{setvisible:E,isvisible:u}))},D=l.a.TabPane;c.a.Option,c.a.OptGroup,s.a.Item,t.default=function(e){e.match;var t=Object(i.useState)(!1),a=Object(n.a)(t,2),c=a[0],s=a[1],d=Object(i.useState)("1"),p=Object(n.a)(d,2),f=p[0],b=p[1];return console.log("----"),r.a.createElement("div",null,r.a.createElement(m.a,null," ",r.a.createElement("i",{className:"icon icon-menu-right"})," ",r.a.createElement(o.a,{to:"/sample"},"Home"),r.a.createElement("i",{className:"icon icon-menu-right"})," ",r.a.createElement("span",{onClick:function(){return s(!0)}},"Settings"),r.a.createElement("i",{className:"icon icon-menu-right"}),r.a.createElement("span",{onClick:function(){return s(!0)}},"Non-Destructive Examination"),r.a.createElement("i",{className:"icon icon-menu-right"}),r.a.createElement(o.a,{to:"/Penetrant_Test"},"Penetrant Test"),"  "),r.a.createElement(l.a,{className:"customize_tab",activeKey:f,onChange:function(e){b(e)}},r.a.createElement(D,{tab:"Penetrant Type",key:"1"},r.a.createElement(O,null)," "),r.a.createElement(D,{tab:"Method",key:"2"},r.a.createElement(N,null)),r.a.createElement(D,{tab:"Penetrant Form",key:"3"},r.a.createElement(w,null))),r.a.createElement(u.a,{setvisible:s,isvisible:c}))}}}]);
//# sourceMappingURL=19.353ccabe.chunk.js.map