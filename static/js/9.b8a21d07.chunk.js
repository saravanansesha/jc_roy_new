(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[9],{1022:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",{className:"bread_crumb"},e.children)}},1054:function(e,t,a){"use strict";a.r(t);var n=a(89),i=a(0),r=a.n(i),l=a(1025),s=a(1014),c=a(1018),o=a(7),u=(a(9),a(1022)),m=a(331),d=a(147),p=a(1013),f=a(181),b=a(1045),y=a(1042),E=a(1052),g=a(57),v=s.a.Option,k=(s.a.OptGroup,function(e){Object(g.h)();var t=c.a.Item,a=e.setvisible,l=e.isvisible,o=Object(i.useState)([]),u=Object(n.a)(o,2),m=(u[0],u[1],Object(i.useState)(0)),d=Object(n.a)(m,2),b=d[0],y=d[1],k=c.a.useForm(),h=Object(n.a)(k,1)[0];return Object(i.useEffect)((function(){0==b&&(h.resetFields(),y(1))}),[b]),console.log("fd"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Add Audit Standards",footer:!1,visible:l,onCancel:function(){return a(!1)}},r.a.createElement("div",{className:"pop-up-forms product_form"},r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:h,onFinish:function(e){a(!1),h.resetFields()},layout:"inline"},r.a.createElement(t,{rules:[{required:!0,message:"Please input your Title!'}"}],name:"audit_Standards"},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(t,{rules:[{required:!0,message:"Please select any one of the field"}],name:"status"},r.a.createElement(s.a,{placeholder:"Status",onChange:function(e){console.log(e,"i am here")}},r.a.createElement(v,{value:"active"},"Active"),r.a.createElement(v,{value:"inactive"},"Inactive"))),r.a.createElement("div",{className:"submit_popup"},r.a.createElement(f.a,{className:"gx-mb-0 ",type:"primary",htmlType:"submit"},"Add"))))))}),h=s.a.Option,x=(s.a.OptGroup,c.a.Item),O=function(e){e.match;var t,a=c.a.useForm(),l=Object(n.a)(a,1)[0],o=Object(i.useState)(!1),u=Object(n.a)(o,2),m=u[0],E=u[1],g=Object(i.useState)("1"),v=Object(n.a)(g,2),O=(v[0],v[1],Object(i.useState)([])),_=Object(n.a)(O,2),S=_[0],j=_[1],C=Object(i.useState)([]),T=Object(n.a)(C,2),A=T[0],N=T[1],F=Object(i.useState)([{key:"1",audit_Standards:"audit_Standardsss1",status:"inactive",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"2",audit_Standards:"audit_Standardsss2",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"3",status:"active",audit_Standards:"audit_Standardsss3",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"4",status:"active",audit_Standards:"audit_Standardsss4",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"5",audit_Standards:"audit_Standardsss5",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"6",audit_Standards:"audit_Standardsss6",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))}]),I=Object(n.a)(F,2),w=I[0],D=I[1],P=[{title:"Title",dataIndex:"audit_Standards",key:"audit_Standards",render:function(e,t,a){if(S.filter((function(e){return a==e.index})).length>0){var n={},i=S.filter((function(e,t){return e.index==a}));i=i[0].key;var o=w.filter((function(e){return e.key==i}));return n["audit_Standards".concat(a)]=o[0].audit_Standards,n["permissions".concat(a)]=o[0].permissions,n["status".concat(a)]=o[0].status,-1==A.indexOf(a)?(l.setFieldsValue(n),N((function(e){return[].concat(Object(d.a)(e),[a])}))):A.indexOf(a),{props:{colSpan:3},children:r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:l,onFinish:function(e){var t=w.map((function(t){if(t.key==i){var n=t;return n.audit_Standards=e["audit_Standards".concat(a)],n.status=e["status".concat(a)],t}return t})),n=S.filter((function(e){return e.key!=i}));j(n),D(t)},onFinishFailed:function(){},layout:"inline"},r.a.createElement(x,{label:"Title",rules:[{required:!0,message:"Please input your Title!'}"}],name:"audit_Standards".concat(a)},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(x,{label:"Status",rules:[{required:!0,message:"Please select any one of the field"}],name:"status".concat(a)},r.a.createElement(s.a,{style:{width:200},onChange:function(e){}},r.a.createElement(h,{value:"active"},"Active"),r.a.createElement(h,{value:"inactive"},"Inactive"))),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Save"),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",onClick:function(){var e=S.filter((function(e){return e.key!=i}));j(e)}},"Cancel"))}}return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Created",dataIndex:"created",key:"created"},{title:"Modified",dataIndex:"modified",key:"modified"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",dataIndex:"action"}];return t=w.map((function(e,t){return S.filter((function(t){return console.log(String(e.key)==String(t.key),"i am here"),console.log(t.key,"i am here"),String(e.key)==String(t.key)})).length>0?{key:e.key,audit_Standards:"",created:"",modified:"",status:"",permissions:"",action:""}:{key:e.key,audit_Standards:e.audit_Standards,created:"06-09-2022",modified:"07-09-2022",status:"active"==e.status?r.a.createElement("button",{style:{background:"#4ad411b8",border:"1px solid #4ad411b8",width:"70px",color:"white",fontWeight:"200"}},"active"):r.a.createElement("button",{style:{background:"#ff000096",border:"1px solid #ff000096",width:"70px",color:"white",fontWeight:"200"}},"Inactive"),permissions:e.permissions,action:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-edit",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,onClick:function(e){var t={key:e.target.id,index:e.target.getAttribute("data-index")};j((function(e){return[].concat(Object(d.a)(e),[t])}))},"data-index":t}),r.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,"data-index":t,onClick:function(e){var t=w.filter((function(t){return t.key!=e.target.id}));t.map((function(e,t){S.map((function(a,n){if(e.key==a.key)if(a.index==t);else{var i=S;i[n].index="".concat(t),j(i)}}))}));D(t)}})))}})),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px",marginRight:"20px"}},r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",onClick:function(){return E(!0)}},"Add")),r.a.createElement(b.a,{className:"gx-card"},r.a.createElement(y.a,{className:"gx-table-responsive",pagination:{pageSize:4},columns:P,dataSource:t})),r.a.createElement(k,{setvisible:E,isvisible:m}))},_=s.a.Option,S=(s.a.OptGroup,function(e){Object(g.h)();var t=c.a.Item,a=e.setvisible,l=e.isvisible,o=Object(i.useState)([]),u=Object(n.a)(o,2),m=(u[0],u[1],Object(i.useState)(0)),d=Object(n.a)(m,2),b=d[0],y=d[1],v=c.a.useForm(),k=Object(n.a)(v,1)[0];return Object(i.useEffect)((function(){0==b&&(k.resetFields(),y(1))}),[b]),console.log("fd"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Add Audit Area",footer:!1,visible:l,onCancel:function(){return a(!1)}},r.a.createElement("div",{className:"pop-up-forms product_form"},r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:k,onFinish:function(e){a(!1),k.resetFields()},layout:"inline"},r.a.createElement(t,{rules:[{required:!0,message:"Please input your Title!'}"}],name:"audit_Area"},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(t,{rules:[{required:!0,message:"Please select any one of the field"}],name:"status"},r.a.createElement(s.a,{placeholder:"Status",onChange:function(e){console.log(e,"i am here")}},r.a.createElement(_,{value:"active"},"Active"),r.a.createElement(_,{value:"inactive"},"Inactive"))),r.a.createElement("div",{className:"submit_popup"},r.a.createElement(f.a,{className:"gx-mb-0 ",type:"primary",htmlType:"submit"},"Add"))))))}),j=s.a.Option,C=(s.a.OptGroup,c.a.Item),T=function(e){e.match;var t,a=c.a.useForm(),l=Object(n.a)(a,1)[0],o=Object(i.useState)(!1),u=Object(n.a)(o,2),m=u[0],E=u[1],g=Object(i.useState)("1"),v=Object(n.a)(g,2),k=(v[0],v[1],Object(i.useState)([])),h=Object(n.a)(k,2),x=h[0],O=h[1],_=Object(i.useState)([]),T=Object(n.a)(_,2),A=T[0],N=T[1],F=Object(i.useState)([{key:"1",audit_Area:"audit_Areass1",status:"inactive",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"2",audit_Area:"audit_Areass2",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"3",status:"active",audit_Area:"audit_Areass3",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"4",status:"active",audit_Area:"audit_Areass4",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"5",audit_Area:"audit_Areass5",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"6",audit_Area:"audit_Areass6",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))}]),I=Object(n.a)(F,2),w=I[0],D=I[1],P=[{title:"Title",dataIndex:"audit_Area",key:"audit_Area",render:function(e,t,a){if(x.filter((function(e){return a==e.index})).length>0){var n={},i=x.filter((function(e,t){return e.index==a}));i=i[0].key;var o=w.filter((function(e){return e.key==i}));return n["audit_Area".concat(a)]=o[0].audit_Area,n["permissions".concat(a)]=o[0].permissions,n["status".concat(a)]=o[0].status,-1==A.indexOf(a)?(l.setFieldsValue(n),N((function(e){return[].concat(Object(d.a)(e),[a])}))):A.indexOf(a),{props:{colSpan:3},children:r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:l,onFinish:function(e){var t=w.map((function(t){if(t.key==i){var n=t;return n.audit_Area=e["audit_Area".concat(a)],n.status=e["status".concat(a)],t}return t})),n=x.filter((function(e){return e.key!=i}));O(n),D(t)},onFinishFailed:function(){},layout:"inline"},r.a.createElement(C,{label:"Title",rules:[{required:!0,message:"Please input your Title!'}"}],name:"audit_Area".concat(a)},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(C,{label:"Status",rules:[{required:!0,message:"Please select any one of the field"}],name:"status".concat(a)},r.a.createElement(s.a,{style:{width:200},onChange:function(e){}},r.a.createElement(j,{value:"active"},"Active"),r.a.createElement(j,{value:"inactive"},"Inactive"))),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Save"),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",onClick:function(){var e=x.filter((function(e){return e.key!=i}));O(e)}},"Cancel"))}}return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Created",dataIndex:"created",key:"created"},{title:"Modified",dataIndex:"modified",key:"modified"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",dataIndex:"action"}];return t=w.map((function(e,t){return x.filter((function(t){return console.log(String(e.key)==String(t.key),"i am here"),console.log(t.key,"i am here"),String(e.key)==String(t.key)})).length>0?{key:e.key,audit_Area:"",created:"",modified:"",status:"",permissions:"",action:""}:{key:e.key,audit_Area:e.audit_Area,created:"06-09-2022",modified:"07-09-2022",status:"active"==e.status?r.a.createElement("button",{style:{background:"#4ad411b8",border:"1px solid #4ad411b8",width:"70px",color:"white",fontWeight:"200"}},"active"):r.a.createElement("button",{style:{background:"#ff000096",border:"1px solid #ff000096",width:"70px",color:"white",fontWeight:"200"}},"Inactive"),permissions:e.permissions,action:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-edit",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,onClick:function(e){var t={key:e.target.id,index:e.target.getAttribute("data-index")};O((function(e){return[].concat(Object(d.a)(e),[t])}))},"data-index":t}),r.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,"data-index":t,onClick:function(e){var t=w.filter((function(t){return t.key!=e.target.id}));t.map((function(e,t){x.map((function(a,n){if(e.key==a.key)if(a.index==t);else{var i=x;i[n].index="".concat(t),O(i)}}))}));D(t)}})))}})),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px",marginRight:"20px"}},r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",onClick:function(){return E(!0)}},"Add")),r.a.createElement(b.a,{className:"gx-card"},r.a.createElement(y.a,{className:"gx-table-responsive",pagination:{pageSize:4},columns:P,dataSource:t})),r.a.createElement(S,{setvisible:E,isvisible:m}))},A=s.a.Option,N=(s.a.OptGroup,function(e){Object(g.h)();var t=c.a.Item,a=e.setvisible,l=e.isvisible,o=Object(i.useState)([]),u=Object(n.a)(o,2),m=(u[0],u[1],Object(i.useState)(0)),d=Object(n.a)(m,2),b=d[0],y=d[1],v=c.a.useForm(),k=Object(n.a)(v,1)[0];return Object(i.useEffect)((function(){0==b&&(k.resetFields(),y(1))}),[b]),console.log("fd"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Add Audit Coordinators",footer:!1,visible:l,onCancel:function(){return a(!1)}},r.a.createElement("div",{className:"pop-up-forms product_form"},r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:k,onFinish:function(e){a(!1),k.resetFields()},layout:"inline"},r.a.createElement(t,{rules:[{required:!0,message:"Please input your Title!'}"}],name:"audit_Coordinators"},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(t,{rules:[{required:!0,message:"Please select any one of the field"}],name:"status"},r.a.createElement(s.a,{placeholder:"Status",onChange:function(e){console.log(e,"i am here")}},r.a.createElement(A,{value:"active"},"Active"),r.a.createElement(A,{value:"inactive"},"Inactive"))),r.a.createElement("div",{className:"submit_popup"},r.a.createElement(f.a,{className:"gx-mb-0 ",type:"primary",htmlType:"submit"},"Add"))))))}),F=s.a.Option,I=(s.a.OptGroup,c.a.Item),w=function(e){e.match;var t,a=c.a.useForm(),l=Object(n.a)(a,1)[0],o=Object(i.useState)(!1),u=Object(n.a)(o,2),m=u[0],E=u[1],g=Object(i.useState)("1"),v=Object(n.a)(g,2),k=(v[0],v[1],Object(i.useState)([])),h=Object(n.a)(k,2),x=h[0],O=h[1],_=Object(i.useState)([]),S=Object(n.a)(_,2),j=S[0],C=S[1],T=Object(i.useState)([{key:"1",audit_Coordinators:"audit_Coordinatorsss1",status:"inactive",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"2",audit_Coordinators:"audit_Coordinatorsss2",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"3",status:"active",audit_Coordinators:"audit_Coordinatorsss3",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"4",status:"active",audit_Coordinators:"audit_Coordinatorsss4",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"5",audit_Coordinators:"audit_Coordinatorsss5",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"6",audit_Coordinators:"audit_Coordinatorsss6",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))}]),A=Object(n.a)(T,2),w=A[0],D=A[1],P=[{title:"Title",dataIndex:"audit_Coordinators",key:"audit_Coordinators",render:function(e,t,a){if(x.filter((function(e){return a==e.index})).length>0){var n={},i=x.filter((function(e,t){return e.index==a}));i=i[0].key;var o=w.filter((function(e){return e.key==i}));return n["audit_Coordinators".concat(a)]=o[0].audit_Coordinators,n["permissions".concat(a)]=o[0].permissions,n["status".concat(a)]=o[0].status,-1==j.indexOf(a)?(l.setFieldsValue(n),C((function(e){return[].concat(Object(d.a)(e),[a])}))):j.indexOf(a),{props:{colSpan:3},children:r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:l,onFinish:function(e){var t=w.map((function(t){if(t.key==i){var n=t;return n.audit_Coordinators=e["audit_Coordinators".concat(a)],n.status=e["status".concat(a)],t}return t})),n=x.filter((function(e){return e.key!=i}));O(n),D(t)},onFinishFailed:function(){},layout:"inline"},r.a.createElement(I,{label:"Title",rules:[{required:!0,message:"Please input your Title!'}"}],name:"audit_Coordinators".concat(a)},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(I,{label:"Status",rules:[{required:!0,message:"Please select any one of the field"}],name:"status".concat(a)},r.a.createElement(s.a,{style:{width:200},onChange:function(e){}},r.a.createElement(F,{value:"active"},"Active"),r.a.createElement(F,{value:"inactive"},"Inactive"))),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Save"),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",onClick:function(){var e=x.filter((function(e){return e.key!=i}));O(e)}},"Cancel"))}}return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Created",dataIndex:"created",key:"created"},{title:"Modified",dataIndex:"modified",key:"modified"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",dataIndex:"action"}];return t=w.map((function(e,t){return x.filter((function(t){return console.log(String(e.key)==String(t.key),"i am here"),console.log(t.key,"i am here"),String(e.key)==String(t.key)})).length>0?{key:e.key,audit_Coordinators:"",created:"",modified:"",status:"",permissions:"",action:""}:{key:e.key,audit_Coordinators:e.audit_Coordinators,created:"06-09-2022",modified:"07-09-2022",status:"active"==e.status?r.a.createElement("button",{style:{background:"#4ad411b8",border:"1px solid #4ad411b8",width:"70px",color:"white",fontWeight:"200"}},"active"):r.a.createElement("button",{style:{background:"#ff000096",border:"1px solid #ff000096",width:"70px",color:"white",fontWeight:"200"}},"Inactive"),permissions:e.permissions,action:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-edit",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,onClick:function(e){var t={key:e.target.id,index:e.target.getAttribute("data-index")};O((function(e){return[].concat(Object(d.a)(e),[t])}))},"data-index":t}),r.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,"data-index":t,onClick:function(e){var t=w.filter((function(t){return t.key!=e.target.id}));t.map((function(e,t){x.map((function(a,n){if(e.key==a.key)if(a.index==t);else{var i=x;i[n].index="".concat(t),O(i)}}))}));D(t)}})))}})),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px",marginRight:"20px"}},r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",onClick:function(){return E(!0)}},"Add")),r.a.createElement(b.a,{className:"gx-card"},r.a.createElement(y.a,{className:"gx-table-responsive",pagination:{pageSize:4},columns:P,dataSource:t})),r.a.createElement(N,{setvisible:E,isvisible:m}))},D=s.a.Option,P=(s.a.OptGroup,function(e){Object(g.h)();var t=c.a.Item,a=e.setvisible,l=e.isvisible,o=Object(i.useState)([]),u=Object(n.a)(o,2),m=(u[0],u[1],Object(i.useState)(0)),d=Object(n.a)(m,2),b=d[0],y=d[1],v=c.a.useForm(),k=Object(n.a)(v,1)[0];return Object(i.useEffect)((function(){0==b&&(k.resetFields(),y(1))}),[b]),console.log("fd"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Add Findings Type",footer:!1,visible:l,onCancel:function(){return a(!1)}},r.a.createElement("div",{className:"pop-up-forms product_form"},r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:k,onFinish:function(e){a(!1),k.resetFields()},layout:"inline"},r.a.createElement(t,{rules:[{required:!0,message:"Please input your Title!'}"}],name:"findings_Type"},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(t,{rules:[{required:!0,message:"Please select any one of the field"}],name:"status"},r.a.createElement(s.a,{placeholder:"Status",onChange:function(e){console.log(e,"i am here")}},r.a.createElement(D,{value:"active"},"Active"),r.a.createElement(D,{value:"inactive"},"Inactive"))),r.a.createElement("div",{className:"submit_popup"},r.a.createElement(f.a,{className:"gx-mb-0 ",type:"primary",htmlType:"submit"},"Add"))))))}),q=s.a.Option,W=(s.a.OptGroup,c.a.Item),R=function(e){e.match;var t,a=c.a.useForm(),l=Object(n.a)(a,1)[0],o=Object(i.useState)(!1),u=Object(n.a)(o,2),m=u[0],E=u[1],g=Object(i.useState)("1"),v=Object(n.a)(g,2),k=(v[0],v[1],Object(i.useState)([])),h=Object(n.a)(k,2),x=h[0],O=h[1],_=Object(i.useState)([]),S=Object(n.a)(_,2),j=S[0],C=S[1],T=Object(i.useState)([{key:"1",findings_Type:"findings_Typess1",status:"inactive",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"2",findings_Type:"findings_Typess2",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"3",status:"active",findings_Type:"findings_Typess3",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"4",status:"active",findings_Type:"findings_Typess4",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"5",findings_Type:"findings_Typess5",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))},{key:"6",findings_Type:"findings_Typess6",status:"active",permissions:"permissions",action:r.a.createElement("div",null,r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete"))}]),A=Object(n.a)(T,2),N=A[0],F=A[1],I=[{title:"Title",dataIndex:"findings_Type",key:"findings_Type",render:function(e,t,a){if(x.filter((function(e){return a==e.index})).length>0){var n={},i=x.filter((function(e,t){return e.index==a}));i=i[0].key;var o=N.filter((function(e){return e.key==i}));return n["findings_Type".concat(a)]=o[0].findings_Type,n["permissions".concat(a)]=o[0].permissions,n["status".concat(a)]=o[0].status,-1==j.indexOf(a)?(l.setFieldsValue(n),C((function(e){return[].concat(Object(d.a)(e),[a])}))):j.indexOf(a),{props:{colSpan:3},children:r.a.createElement(c.a,{initialValues:{remember:!0},name:"basic",form:l,onFinish:function(e){var t=N.map((function(t){if(t.key==i){var n=t;return n.findings_Type=e["findings_Type".concat(a)],n.status=e["status".concat(a)],t}return t})),n=x.filter((function(e){return e.key!=i}));O(n),F(t)},onFinishFailed:function(){},layout:"inline"},r.a.createElement(W,{label:"Title",rules:[{required:!0,message:"Please input your Title!'}"}],name:"findings_Type".concat(a)},r.a.createElement(p.a,{placeholder:"Title"})),r.a.createElement(W,{label:"Status",rules:[{required:!0,message:"Please select any one of the field"}],name:"status".concat(a)},r.a.createElement(s.a,{style:{width:200},onChange:function(e){}},r.a.createElement(q,{value:"active"},"Active"),r.a.createElement(q,{value:"inactive"},"Inactive"))),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Save"),r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",onClick:function(){var e=x.filter((function(e){return e.key!=i}));O(e)}},"Cancel"))}}return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Created",dataIndex:"created",key:"created"},{title:"Modified",dataIndex:"modified",key:"modified"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",key:"action",dataIndex:"action"}];return t=N.map((function(e,t){return x.filter((function(t){return console.log(String(e.key)==String(t.key),"i am here"),console.log(t.key,"i am here"),String(e.key)==String(t.key)})).length>0?{key:e.key,findings_Type:"",created:"",modified:"",status:"",permissions:"",action:""}:{key:e.key,findings_Type:e.findings_Type,created:"06-09-2022",modified:"07-09-2022",status:"active"==e.status?r.a.createElement("button",{style:{background:"#4ad411b8",border:"1px solid #4ad411b8",width:"70px",color:"white",fontWeight:"200"}},"active"):r.a.createElement("button",{style:{background:"#ff000096",border:"1px solid #ff000096",width:"70px",color:"white",fontWeight:"200"}},"Inactive"),permissions:e.permissions,action:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("i",{className:"icon icon-edit",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,onClick:function(e){var t={key:e.target.id,index:e.target.getAttribute("data-index")};O((function(e){return[].concat(Object(d.a)(e),[t])}))},"data-index":t}),r.a.createElement("i",{className:"icon icon-trash",style:{marginRight:"10px",color:"blue",fontWeight:"bold !importent"},id:e.key,"data-index":t,onClick:function(e){var t=N.filter((function(t){return t.key!=e.target.id}));t.map((function(e,t){x.map((function(a,n){if(e.key==a.key)if(a.index==t);else{var i=x;i[n].index="".concat(t),O(i)}}))}));F(t)}})))}})),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"15px",marginRight:"20px"}},r.a.createElement(f.a,{className:"gx-mb-0",type:"primary",htmlType:"submit",onClick:function(){return E(!0)}},"Add")),r.a.createElement(b.a,{className:"gx-card"},r.a.createElement(y.a,{className:"gx-table-responsive",pagination:{pageSize:4},columns:I,dataSource:t})),r.a.createElement(P,{setvisible:E,isvisible:m}))},V=l.a.TabPane;s.a.Option,s.a.OptGroup,c.a.Item,t.default=function(e){e.match;var t=Object(i.useState)(!1),a=Object(n.a)(t,2),s=a[0],c=a[1],d=Object(i.useState)("1"),p=Object(n.a)(d,2),f=p[0],b=p[1];return console.log("----"),r.a.createElement("div",null,r.a.createElement(u.a,null," ",r.a.createElement("i",{className:"icon icon-menu-right"})," ",r.a.createElement(o.a,{to:"/sample"},"Home"),r.a.createElement("i",{className:"icon icon-menu-right"})," ",r.a.createElement("span",{onClick:function(){return c(!0)}},"Settings"),r.a.createElement("i",{className:"icon icon-menu-right"}),r.a.createElement(o.a,{to:"/Audit"},"Audit"),"  "),r.a.createElement(l.a,{className:"customize_tab",activeKey:f,onChange:function(e){b(e)}},r.a.createElement(V,{tab:"Audit Standards",key:"1"},r.a.createElement(O,null)," "),r.a.createElement(V,{tab:"Audit Area",key:"2"},r.a.createElement(T,null)),r.a.createElement(V,{tab:"Audit Coordinators",key:"3"},r.a.createElement(w,null)),r.a.createElement(V,{tab:"Findings Type",key:"4"},r.a.createElement(R,null))),r.a.createElement(m.a,{setvisible:c,isvisible:s}))}}}]);
//# sourceMappingURL=9.b8a21d07.chunk.js.map