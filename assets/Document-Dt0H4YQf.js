import{p as G,y as A,d as T,L as q,j as B,z,B as W,M as J,N as Q,O as I,P,b as D,f as C,a as m,r as V,i as X,F as h,g as y,k as b,e as M,c as O,t as U,o as S,_ as Y}from"./index-Bwi5gLBw.js";function Z(){return G("/document")}var nn=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],en=function(n){return nn.map(function(o){return o.toLowerCase()}).indexOf(n.toLowerCase())!==-1},tn=function(n,o,t){Object.keys(o).filter(en).forEach(function(r){var a=o[r];typeof a=="function"&&(r==="onInit"?a(n,t):t.on(r.substring(2),function(l){return a(l,t)}))})},on=function(n,o,t,r){var a=n.modelEvents?n.modelEvents:null,l=Array.isArray(a)?a.join(" "):a;A(r,function(u,e){t&&typeof u=="string"&&u!==e&&u!==t.getContent({format:n.outputFormat})&&t.setContent(u)}),t.on(l||"change input undo redo",function(){o.emit("update:modelValue",t.getContent({format:n.outputFormat}))})},rn=function(n,o,t,r,a,l){r.setContent(l()),t.attrs["onUpdate:modelValue"]&&on(o,t,r,a),tn(n,t.attrs,r)},R=0,F=function(n){var o=Date.now(),t=Math.floor(Math.random()*1e9);return R++,n+"_"+t+R+String(o)},an=function(n){return n!==null&&n.tagName.toLowerCase()==="textarea"},N=function(n){return typeof n>"u"||n===""?[]:Array.isArray(n)?n:n.split(" ")},ln=function(n,o){return N(n).concat(N(o))},un=function(n){return n==null},x=function(){return{listeners:[],scriptId:F("tiny-script"),scriptLoaded:!1}},sn=function(){var n=x(),o=function(a,l,u,e){var i=l.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=a,i.src=u;var p=function(){i.removeEventListener("load",p),e()};i.addEventListener("load",p),l.head&&l.head.appendChild(i)},t=function(a,l,u){n.scriptLoaded?u():(n.listeners.push(u),a.getElementById(n.scriptId)||o(n.scriptId,a,l,function(){n.listeners.forEach(function(e){return e()}),n.scriptLoaded=!0}))},r=function(){n=x()};return{load:t,reinitialize:r}},dn=sn(),cn=function(){return typeof window<"u"?window:global},k=function(){var n=cn();return n&&n.tinymce?n.tinymce:null},fn={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(n){return n==="html"||n==="text"}}},v=function(){return v=Object.assign||function(n){for(var o,t=1,r=arguments.length;t<r;t++){o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},v.apply(this,arguments)},vn=function(n,o,t,r){return n(r||"div",{id:o,ref:t})},mn=function(n,o,t){return n("textarea",{id:o,visibility:"hidden",ref:t})},j={selector:void 0,target:void 0},yn=T({props:fn,setup:function(n,o){var t=n.init?v(v({},n.init),j):v({},j),r=q(n),a=r.disabled,l=r.modelValue,u=r.tagName,e=B(null),i=null,p=n.id||F("tiny-vue"),E=n.init&&n.init.inline||n.inline,w=!!o.attrs["onUpdate:modelValue"],s=!0,f=n.initialValue?n.initialValue:"",g="",K=function(d){return w?function(){return l!=null&&l.value?l.value:""}:function(){return d?f:g}},L=function(){var d=K(s),c=v(v({},t),{readonly:n.disabled,target:e.value,plugins:ln(t.plugins,n.plugins),toolbar:n.toolbar||t.toolbar,inline:E,setup:function(_){i=_,_.on("init",function(H){return rn(H,n,o,_,l,d)}),typeof t.setup=="function"&&t.setup(_)}});an(e.value)&&(e.value.style.visibility=""),k().init(c),s=!1};A(a,function(d){var c;i!==null&&(typeof((c=i.mode)===null||c===void 0?void 0:c.set)=="function"?i.mode.set(d?"readonly":"design"):i.setMode(d?"readonly":"design"))}),A(u,function(d){var c;w||(g=i.getContent()),(c=k())===null||c===void 0||c.remove(i),P(function(){return L()})}),z(function(){if(k()!==null)L();else if(e.value&&e.value.ownerDocument){var d=n.cloudChannel?n.cloudChannel:"6",c=n.apiKey?n.apiKey:"no-api-key",_=un(n.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(c,"/tinymce/").concat(d,"/tinymce.min.js"):n.tinymceScriptSrc;dn.load(e.value.ownerDocument,_,L)}}),W(function(){k()!==null&&k().remove(i)}),E||(J(function(){s||L()}),Q(function(){var d;w||(g=i.getContent()),(d=k())===null||d===void 0||d.remove(i)}));var $=function(d){var c;g=i.getContent(),(c=k())===null||c===void 0||c.remove(i),t=v(v(v({},t),d),j),P(function(){return L()})};return o.expose({rerender:$,getEditor:function(){return i}}),function(){return E?vn(I,p,e,n.tagName):mn(I,p,e)}}});const pn={class:"mt"},gn={class:"mt"},Cn={class:"mt"},bn=T({__name:"Document",setup(n){const o=B({important:[],publish:[],type:[]}),t=B([-1,-1,-1]),r=(u,e)=>{t.value[e]=u};z(async()=>{const{data:{important:u,publish:e,type:i}}=await Z();o.value.important=u,o.value.publish=e,o.value.type=i});const a=B(""),l=()=>{const u=new Blob([a.value],{type:"type/html"}),e=document.createElement("a");e.href=URL.createObjectURL(u),e.download="document.tml",e.click(),URL.revokeObjectURL(e.href)};return(u,e)=>{const i=V("el-tag"),p=V("el-divider"),E=V("el-card"),w=V("el-button");return S(),D(h,null,[C(E,null,{default:m(()=>[y("div",pn,[e[5]||(e[5]=y("span",{class:"title"},"文章类别：",-1)),C(i,{type:t.value[0]==-1?"primary":"info",onClick:e[0]||(e[0]=s=>r(-1,0))},{default:m(()=>e[4]||(e[4]=[b("全部")])),_:1},8,["type"]),(S(!0),D(h,null,M(o.value.type,(s,f)=>(S(),O(i,{type:t.value[0]==f?"primary":"info",class:"ml",key:s,onClick:g=>r(f,0)},{default:m(()=>[b(U(s),1)]),_:2},1032,["type","onClick"]))),128))]),y("div",gn,[e[7]||(e[7]=y("span",{class:"title"},"重要程度：",-1)),C(i,{type:t.value[1]==-1?"primary":"info",onClick:e[1]||(e[1]=s=>r(-1,1))},{default:m(()=>e[6]||(e[6]=[b("全部")])),_:1},8,["type"]),(S(!0),D(h,null,M(o.value.important,(s,f)=>(S(),O(i,{type:t.value[1]==f?"primary":"info",class:"ml",key:s,onClick:g=>r(f,1)},{default:m(()=>[b(U(s),1)]),_:2},1032,["type","onClick"]))),128))]),y("div",Cn,[e[9]||(e[9]=y("span",{class:"title"},"发布渠道：",-1)),C(i,{type:t.value[2]==-1?"primary":"info",onClick:e[2]||(e[2]=s=>r(-1,2))},{default:m(()=>e[8]||(e[8]=[b("全部")])),_:1},8,["type"]),(S(!0),D(h,null,M(o.value.publish,(s,f)=>(S(),O(i,{type:t.value[2]==f?"primary":"info",class:"ml",key:s,onClick:g=>r(f,2)},{default:m(()=>[b(U(s),1)]),_:2},1032,["type","onClick"]))),128))]),C(p),e[10]||(e[10]=y("div",{class:"mt"},[y("span",{class:"title"},"已选：")],-1))]),_:1}),C(w,{type:"primary",class:"mt mb",onClick:l},{default:m(()=>e[11]||(e[11]=[b("导出富文本到HTML文件")])),_:1}),C(X(yn),{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=s=>a.value=s),"api-key":"ii7f06e314pnffkrkgsctss61mqyjyas0wkr53m4y6v2o8k5",init:{language:"zh_CN",plugins:"lists link image table code help wordcount"}},null,8,["modelValue"])],64)}}}),kn=Y(bn,[["__scopeId","data-v-ef048a46"]]);export{kn as default};
