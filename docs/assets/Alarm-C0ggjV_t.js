import{p as Q,d as R,j as p,z as W,b,f as e,a,r as n,F as U,e as M,k as v,E as X,o as d,c,i as Y,t as g}from"./index-Drjb2kZB.js";import{_ as Z}from"./StepForm.vue_vue_type_script_setup_true_lang-DnvwQWKN.js";function h(){return Q("/alarmList")}const ee={description:"故障描述",address:"设备地址",equNo:"设备号",level:"告警级别",time:"故障时间",code:"故障代码",status:"当前状态"},le=V=>ee[V]||V,oe={key:2},ne=R({__name:"Alarm",setup(V){const w=p(1),x=p([]);W(async()=>{try{const{data:k}=await h();x.value=k}catch{}});const i=p(!1),S=[{title:"基本信息"},{title:"市场信息"},{title:"负责人信息"}],t=p({basicInfo:{name:"",tel:"",email:"",no:"",urgent:!0,other:[],remarks:""},approvalInfo:{approvalDep:"",CCDep:""},personInfo:{personName:"",personTel:""}}),I={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],tel:[{required:!0,message:"请输入电话",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],no:[{required:!0,message:"请输入工号",trigger:"blur"}],approvalDep:[{required:!0,message:"请输入审批部门",trigger:"blur"}],CCDep:[{required:!0,message:"请输入抄送部门",trigger:"blur"}],personName:[{required:!0,message:"请输入负责人姓名",trigger:"blur"}],personTel:[{required:!0,message:"请输入负责人电话",trigger:"blur"}]},D=p(),q=p(),N=p(),z=()=>{console.log(t.value),X({message:"指派成功",type:"success"}),i.value=!1},T=p("");return(k,o)=>{const f=n("el-radio-button"),A=n("el-radio-group"),L=n("el-card"),F=n("el-alert"),j=n("el-tag"),H=n("el-text"),$=n("el-descriptions-item"),B=n("el-button"),G=n("el-descriptions"),m=n("el-input"),r=n("el-form-item"),J=n("el-switch"),_=n("el-checkbox"),K=n("el-checkbox-group"),y=n("el-form"),u=n("el-option"),E=n("el-select"),O=n("el-result"),P=n("el-drawer");return d(),b(U,null,[e(L,null,{default:a(()=>[e(A,{modelValue:w.value,"onUpdate:modelValue":o[0]||(o[0]=l=>w.value=l),size:"large",class:"mt"},{default:a(()=>[e(f,{label:"严重告警",value:1}),e(f,{label:"紧急告警",value:2}),e(f,{label:"重要告警",value:3}),e(f,{label:"一般告警",value:4})]),_:1},8,["modelValue"])]),_:1}),(d(!0),b(U,null,M(x.value,l=>(d(),c(L,{class:"mt",key:l.equNo},{default:a(()=>[e(F,{title:`${l.address}充电桩充电异常`,type:"warning","show-icon":""},null,8,["title"]),e(G,{column:4,border:!0,direction:"vertical",class:"mt"},{default:a(()=>[(d(!0),b(U,null,M(l,(s,C)=>(d(),c($,{label:Y(le)(C)},{default:a(()=>[C=="level"?(d(),c(j,{key:0,type:s==1?"danger":s==2?"warning":"info"},{default:a(()=>[v(g(s==1?"严重":s==2?"紧急":"一般"),1)]),_:2},1032,["type"])):C=="status"?(d(),c(H,{key:1,type:"danger"},{default:a(()=>[v(g(s==1?"待指派":s==2?"处理中":"处理异常"),1)]),_:2},1024)):(d(),b("span",oe,g(s),1))]),_:2},1032,["label"]))),256)),e($,{label:"操作"},{default:a(()=>[e(B,{onClick:s=>(i.value=!0,T.value=l.equNo),type:l.status==2?"warning":"primary"},{default:a(()=>[v(g(l.status==1?"指派":l.status==2?"催办":"查看"),1)]),_:2},1032,["onClick","type"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(P,{modelValue:i.value,"onUpdate:modelValue":o[14]||(o[14]=l=>i.value=l),title:"报警任务指派"},{default:a(()=>[e(Z,{steps:S,form1:D.value,form2:q.value,form3:N.value,onHandleSubmit:z},{"step-1":a(()=>[e(y,{model:t.value.basicInfo,rules:I,ref_key:"form1",ref:D},{default:a(()=>[e(r,{label:"姓名：",prop:"name"},{default:a(()=>[e(m,{modelValue:t.value.basicInfo.name,"onUpdate:modelValue":o[1]||(o[1]=l=>t.value.basicInfo.name=l)},null,8,["modelValue"])]),_:1}),e(r,{label:"电话：",prop:"tel"},{default:a(()=>[e(m,{modelValue:t.value.basicInfo.tel,"onUpdate:modelValue":o[2]||(o[2]=l=>t.value.basicInfo.tel=l)},null,8,["modelValue"])]),_:1}),e(r,{label:"邮箱：",prop:"email"},{default:a(()=>[e(m,{modelValue:t.value.basicInfo.email,"onUpdate:modelValue":o[3]||(o[3]=l=>t.value.basicInfo.email=l)},null,8,["modelValue"])]),_:1}),e(r,{label:"工号：",prop:"no"},{default:a(()=>[e(m,{modelValue:t.value.basicInfo.no,"onUpdate:modelValue":o[4]||(o[4]=l=>t.value.basicInfo.no=l)},null,8,["modelValue"])]),_:1}),e(r,{label:"是否加急："},{default:a(()=>[e(J,{modelValue:t.value.basicInfo.urgent,"onUpdate:modelValue":o[5]||(o[5]=l=>t.value.basicInfo.urgent=l)},null,8,["modelValue"])]),_:1}),e(r,{label:"其他选项："},{default:a(()=>[e(K,{modelValue:t.value.basicInfo.other,"onUpdate:modelValue":o[6]||(o[6]=l=>t.value.basicInfo.other=l)},{default:a(()=>[e(_,{label:"更换设备",value:"1"}),e(_,{label:"仅维修",value:"2"}),e(_,{label:"需拍照片",value:"3"}),e(_,{label:"需报备",value:"4"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"其他备注信息："},{default:a(()=>[e(m,{type:"textarea",modelValue:t.value.basicInfo.remarks,"onUpdate:modelValue":o[7]||(o[7]=l=>t.value.basicInfo.remarks=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),"step-2":a(()=>[e(y,{model:t.value.approvalInfo,rules:I,ref_key:"form2",ref:q},{default:a(()=>[e(r,{label:"审批部门：",prop:"approvalDep"},{default:a(()=>[e(E,{modelValue:t.value.approvalInfo.approvalDep,"onUpdate:modelValue":o[8]||(o[8]=l=>t.value.approvalInfo.approvalDep=l),placeholder:"请选择审批部门"},{default:a(()=>[e(u,{label:"总裁办",value:"1"}),e(u,{label:"运营部",value:"2"}),e(u,{label:"维修部",value:"3"}),e(u,{label:"市场部",value:"4"}),e(u,{label:"财务部",value:"5"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"抄送部门：",prop:"CCDep"},{default:a(()=>[e(E,{modelValue:t.value.approvalInfo.CCDep,"onUpdate:modelValue":o[9]||(o[9]=l=>t.value.approvalInfo.CCDep=l),placeholder:"请选择抄送部门"},{default:a(()=>[e(u,{label:"总裁办",value:"1"}),e(u,{label:"运营部",value:"2"}),e(u,{label:"维修部",value:"3"}),e(u,{label:"市场部",value:"4"}),e(u,{label:"财务部",value:"5"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),"step-3":a(()=>[e(y,{model:t.value.personInfo,rules:I,ref_key:"form3",ref:N},{default:a(()=>[e(r,{label:"负责人姓名：",prop:"personName"},{default:a(()=>[e(m,{modelValue:t.value.personInfo.personName,"onUpdate:modelValue":o[10]||(o[10]=l=>t.value.personInfo.personName=l),placeholder:"请输入负责人姓名"},null,8,["modelValue"])]),_:1}),e(r,{modelValue:t.value.personInfo.personTel,"onUpdate:modelValue":o[12]||(o[12]=l=>t.value.personInfo.personTel=l),label:"负责人电话：",prop:"personTel"},{default:a(()=>[e(m,{modelValue:t.value.personInfo.personTel,"onUpdate:modelValue":o[11]||(o[11]=l=>t.value.personInfo.personTel=l),placeholder:"请输入负责人电话"},null,8,["modelValue"])]),_:1},8,["modelValue"])]),_:1},8,["model"])]),_:1},8,["form1","form2","form3"]),e(O,{icon:"warning",title:`设备编号：${T.value}`,"sub-title":"该任务已催促2次，请抓紧处理"},{extra:a(()=>[e(B,{type:"primary",onClick:o[13]||(o[13]=l=>i.value=!1)},{default:a(()=>o[15]||(o[15]=[v("我已知晓")])),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])],64)}}});export{ne as default};
