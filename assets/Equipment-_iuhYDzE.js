import{u as E}from"./useHttp-CkYIrU_R.js";import{d as F,j as L,b as f,f as e,a as l,r as n,F as b,i as o,k as _,w as q,A as H,c as C,e as I,g as v,t as z,o as u}from"./index-Bwi5gLBw.js";const O=F({__name:"Equipment",setup(G){const s=L({no:"",tel:"",name:""}),{dataList:V,loading:h,totals:k,pageInfo:p,loadData:w,handleSizeChange:x,handleCurrentChange:y,resetPagination:S}=E("/member",s),D=()=>{s.value={no:"",tel:"",name:""},S()};return(J,t)=>{const d=n("el-input"),i=n("el-col"),m=n("el-button"),U=n("el-row"),g=n("el-card"),r=n("el-table-column"),B=n("el-timeline-item"),N=n("el-timeline"),P=n("el-popover"),R=n("el-table"),T=n("el-pagination"),j=H("loading");return u(),f(b,null,[e(g,null,{default:l(()=>[e(U,{gutter:20},{default:l(()=>[e(i,{span:6},{default:l(()=>[e(d,{modelValue:s.value.no,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value.no=a),placeholder:"请输入会员卡号",size:"normal",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{span:6},{default:l(()=>[e(d,{modelValue:s.value.tel,"onUpdate:modelValue":t[1]||(t[1]=a=>s.value.tel=a),placeholder:"请输入手机号",size:"normal",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{span:6},{default:l(()=>[e(d,{modelValue:s.value.name,"onUpdate:modelValue":t[2]||(t[2]=a=>s.value.name=a),placeholder:"请输入姓名",size:"normal",clearable:""},null,8,["modelValue"])]),_:1}),e(i,{span:6},{default:l(()=>[e(m,{type:"primary",size:"default",onClick:o(w)},{default:l(()=>t[5]||(t[5]=[_("查询")])),_:1},8,["onClick"]),e(m,{onClick:D},{default:l(()=>t[6]||(t[6]=[_("重置")])),_:1})]),_:1})]),_:1})]),_:1}),e(g,{class:"mt"},{default:l(()=>[q((u(),C(R,{data:o(V)},{default:l(()=>[e(r,{type:"index",label:"序号",width:"80"}),e(r,{prop:"memberCardNumber",label:"会员卡号"}),e(r,{prop:"cardType",label:"卡类型"}),e(r,{prop:"issueDate",label:"开卡日期"}),e(r,{prop:"holderName",label:"持有人姓名"}),e(r,{prop:"holderPhone",label:"持有人电话"}),e(r,{prop:"cardBalance",label:"卡余额"}),e(r,{prop:"transactionRecords",label:"消费记录"},{default:l(a=>[e(P,{placement:"top-start",title:"消费记录",width:200,trigger:"hover",content:"this is content, this is content, this is content"},{reference:l(()=>[e(m,{class:"m-2"},{default:l(()=>t[7]||(t[7]=[_("消费记录")])),_:1})]),default:l(()=>[e(N,{style:{"max-width":"600px"}},{default:l(()=>[(u(!0),f(b,null,I(a.row.transactionRecords,(c,A)=>(u(),C(B,{color:"pink",key:A,timestamp:c.transactionDate},{default:l(()=>[v("p",null,"消费金额："+z(c.transactionAmount),1),v("p",null,"消费类型："+z(c.transactionType),1)]),_:2},1032,["timestamp"]))),128))]),_:2},1024)]),_:2},1024)]),_:1}),e(r,{prop:"validUntil",label:"有效期至"})]),_:1},8,["data"])),[[j,o(h)]]),e(T,{class:"fr mt mb","current-page":o(p).page,"onUpdate:currentPage":t[3]||(t[3]=a=>o(p).page=a),"page-size":o(p).pageSize,"onUpdate:pageSize":t[4]||(t[4]=a=>o(p).pageSize=a),"page-sizes":[10,20,30,40],layout:"sizes, prev, pager, next, jumper,total",total:o(k),onSizeChange:o(x),onCurrentChange:o(y),background:""},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])]),_:1})],64)}}});export{O as default};
