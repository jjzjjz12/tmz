import{H as G,G as E,d as V,j as F,z as H,I as O,b as S,o as _,_ as P,q as X,c as j,a as p,r as g,f as a,g as w,k as A}from"./index-Bwi5gLBw.js";var k={exports:{}},R=k.exports,C;function T(){return C||(C=1,function(x,r){(function(c,e){x.exports=e()})(R,function(){function c(o){var f=[];return o.AMapUI&&f.push(e(o.AMapUI)),o.Loca&&f.push(U(o.Loca)),Promise.all(f)}function e(o){return new Promise(function(f,n){var d=[];if(o.plugins)for(var u=0;u<o.plugins.length;u+=1)t.AMapUI.plugins.indexOf(o.plugins[u])==-1&&d.push(o.plugins[u]);if(i.AMapUI===l.failed)n("前次请求 AMapUI 失败");else if(i.AMapUI===l.notload){i.AMapUI=l.loading,t.AMapUI.version=o.version||t.AMapUI.version,u=t.AMapUI.version;var M=document.body||document.head,v=document.createElement("script");v.type="text/javascript",v.src="https://webapi.amap.com/ui/"+u+"/main.js",v.onerror=function(s){i.AMapUI=l.failed,n("请求 AMapUI 失败")},v.onload=function(){if(i.AMapUI=l.loaded,d.length)window.AMapUI.loadUI(d,function(){for(var s=0,y=d.length;s<y;s++){var I=d[s].split("/").slice(-1)[0];window.AMapUI[I]=arguments[s]}for(f();m.AMapUI.length;)m.AMapUI.splice(0,1)[0]()});else for(f();m.AMapUI.length;)m.AMapUI.splice(0,1)[0]()},M.appendChild(v)}else i.AMapUI===l.loaded?o.version&&o.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):d.length?window.AMapUI.loadUI(d,function(){for(var s=0,y=d.length;s<y;s++){var I=d[s].split("/").slice(-1)[0];window.AMapUI[I]=arguments[s]}f()}):f():o.version&&o.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):m.AMapUI.push(function(s){s?n(s):d.length?window.AMapUI.loadUI(d,function(){for(var y=0,I=d.length;y<I;y++){var B=d[y].split("/").slice(-1)[0];window.AMapUI[B]=arguments[y]}f()}):f()})})}function U(o){return new Promise(function(f,n){if(i.Loca===l.failed)n("前次请求 Loca 失败");else if(i.Loca===l.notload){i.Loca=l.loading,t.Loca.version=o.version||t.Loca.version;var d=t.Loca.version,u=t.AMap.version.startsWith("2"),M=d.startsWith("2");if(u&&!M||!u&&M)n("JSAPI 与 Loca 版本不对应！！");else{u=t.key,M=document.body||document.head;var v=document.createElement("script");v.type="text/javascript",v.src="https://webapi.amap.com/loca?v="+d+"&key="+u,v.onerror=function(s){i.Loca=l.failed,n("请求 AMapUI 失败")},v.onload=function(){for(i.Loca=l.loaded,f();m.Loca.length;)m.Loca.splice(0,1)[0]()},M.appendChild(v)}}else i.Loca===l.loaded?o.version&&o.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):f():o.version&&o.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):m.Loca.push(function(s){s?n(s):n()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var l;(function(o){o.notload="notload",o.loading="loading",o.loaded="loaded",o.failed="failed"})(l||(l={}));var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:l.notload,AMapUI:l.notload,Loca:l.notload},m={AMapUI:[],Loca:[]},b=[],L=function(o){typeof o=="function"&&(i.AMap===l.loaded?o(window.AMap):b.push(o))};return{load:function(o){return new Promise(function(f,n){if(i.AMap==l.failed)n("");else if(i.AMap==l.notload){var d=o.key,u=o.version,M=o.plugins;d?(window.AMap&&location.host!=="lbs.amap.com"&&n("禁止多种API加载方式混用"),t.key=d,t.AMap.version=u||t.AMap.version,t.AMap.plugins=M||t.AMap.plugins,i.AMap=l.loading,u=document.body||document.head,window.___onAPILoaded=function(s){if(delete window.___onAPILoaded,s)i.AMap=l.failed,n(s);else for(i.AMap=l.loaded,c(o).then(function(){f(window.AMap)}).catch(n);b.length;)b.splice(0,1)[0]()},M=document.createElement("script"),M.type="text/javascript",M.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+d+"&plugin="+t.AMap.plugins.join(","),M.onerror=function(s){i.AMap=l.failed,n(s)},u.appendChild(M)):n("请填写key")}else if(i.AMap==l.loaded)if(o.key&&o.key!==t.key)n("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)n("不允许多个版本 JSAPI 混用");else{if(d=[],o.plugins)for(u=0;u<o.plugins.length;u+=1)t.AMap.plugins.indexOf(o.plugins[u])==-1&&d.push(o.plugins[u]);d.length?window.AMap.plugin(d,function(){c(o).then(function(){f(window.AMap)}).catch(n)}):c(o).then(function(){f(window.AMap)}).catch(n)}else if(o.key&&o.key!==t.key)n("多个不一致的 key");else if(o.version&&o.version!==t.AMap.version)n("不允许多个版本 JSAPI 混用");else{var v=[];if(o.plugins)for(u=0;u<o.plugins.length;u+=1)t.AMap.plugins.indexOf(o.plugins[u])==-1&&v.push(o.plugins[u]);L(function(){v.length?window.AMap.plugin(v,function(){c(o).then(function(){f(window.AMap)}).catch(n)}):c(o).then(function(){f(window.AMap)}).catch(n)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:l.notload,AMapUI:l.notload,Loca:l.notload},m={AMap:[],AMapUI:[],Loca:[]}}}})}(k)),k.exports}var z=T();const N=G(z);function h(){return E("/mapList")}const q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA3RJREFUWEfFl29olWUUwH8HTCapmwnOmqVzNcG5P+Fok8Yy7EOytU/VwsAyZfviUr9FCRpRgV8c6ZdFklnGxvowZGJi4B8GaUxo2u1DaneMTbZJbVdmrD9w8tz7Xvfee9/7vu/G5D7wwoV7nnN+5zznnOc8Qsilqk8AjUA9UA48BRQ42yeBIeA6cAnoFZHbYVRLkJCq1gJ7gWaTvTAG50aVsWkYnU7sXpkHhXnQtEqoWf5AY9d9wHYRuexnIyuAqi4ADgO7o1NwIgrdQ0ok5o+88TF4pUjYXgzFi+OyR4F9IvKf105PAFWtAE5EYlR23FC+isLdf4Nilfr/0kfgrWJofUYoy2cA2C4i19K1ZACoap2dYSRGfnNfsMdBWGX50FUXh7DYNYpIn3tPCoDj+aX5Mp40lAZR747EAwDnzPst7EGer3kU7HOvwXtgX7blgrDjqE7mhBvgSCTG7iDjBQth4lXv3F32nTL5TyiIoyLSZpJxTU6p/fhuv3LkN28FjUWJ7C5dApsLvWW6rROQqJbk73TJtlL4rDpudpOVaBKgMzpFc9UZ9cz2zSvg/EuBLSPF1os/KBfGM0GtOn7eKlaiXSLyhjgdbuTD+z3s4HX1dK3jOaHlaaj+Xrn6Z3Af6H9Z+PwmtP7kre9guXDAeikUGUAL0OGn3Ly3KMi33grTkXSbxL23KHgtS8hfGuIRbTWAb678wZu1Z7Mrn28As3x+i1gunTSAgQ8GtOKTSPbQ+gFYk/k6qvSOzOwPioBJvl8GH1fKNQOY2HVFC47dmj3AsRrhnRJ4vS8168MA7CyBL2pk0gC08aJy2uVBOopXBNo3CnvWJSSf7FGG/5pdBBqKoPcFYU4AH1UI+zfMGLQKisRmohAmAm6AWR/Bl7XCmsXEKyO5rPHYUdgKA+A+gjklYfNq6Hw+0ZzcxsMCuJNwTmX4aZXw3vpM42EB3GU4p0ZkiXlneibs7sQNOoL0RmTDpm8r9qqCplVwati7dIMAUlpxPGSqvpfRfHbCjMvIAbDJN+t1/PZasMzfcVkZnPK/jKw6krLHf8+U9byOHYisA4lNP4eeFV6zl0CI1TMM+65qxoTkmopSBxIHwMZw35Hs8UWwbok/wfjf8KvH6B44kjkQNo7nZihN+pXTsdwFkbuHiQsid0+zlK6Wq8dpeq4/rOf5/1pBL+HGxGXSAAAAAElFTkSuQmCC",J="/assets/station-Cf77LQol.jpg",W={id:"container"},Z=V({__name:"MapContainer",setup(x){let r=null;const c=F([]);return H(()=>{N.load({key:"d59f66e20f59f7c0e1b43a21af875d1b",version:"1.4.15",plugins:["AMap.Marker","AMap.Map"]}).then(e=>{r=new e.Map("container",{viewMode:"3D",zoom:5,center:[116.397428,39.90923]}),h().then(({data:U})=>{c.value=U,c.value.forEach(l=>{const t=new e.InfoWindow({offset:new e.Pixel(0,-30)}),i=new e.Marker({position:l.position,icon:q,title:"北京"});i.on("click",function(){t.setContent(`<div style="display:flex;padding:10px;align-items:center">
                        <div>
                        <img src=${J} width="200px"/>
                        </div>
                        <div style="width:180px;line-height:30px;margin-left:20px">
                        <h3>${l.title}</h3>
                        <p>充电桩数量：${l.count}</p>
                        <p>充电桩状态：<span style="color:blue">${l.status===1?"使用中":"维修中"}</span></p>
                        </div>
                        </div>`),t.open(r,i.getPosition())}),r.add(i)})})}).catch(e=>{console.log(e)})}),O(()=>{r==null||r.destroy()}),(e,U)=>(_(),S("div",W))}}),K=P(Z,[["__scopeId","data-v-1913a07b"]]),Y=V({__name:"ElectronicMap",setup(x){const r=X({name:"",region:"",location1:"",location2:"",now:"",remarks:""});return(c,e)=>{const U=g("el-card"),l=g("el-col"),t=g("el-text"),i=g("el-input"),m=g("el-form-item"),b=g("el-switch"),L=g("el-button"),o=g("el-form"),f=g("el-row");return _(),j(f,{gutter:20},{default:p(()=>[a(l,{span:18},{default:p(()=>[a(U,null,{default:p(()=>[a(K)]),_:1})]),_:1}),a(l,{span:6},{default:p(()=>[a(U,{class:"des"},{default:p(()=>[w("div",null,[e[9]||(e[9]=A("1.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[8]||(e[8]=[A("34(个)")])),_:1})]),w("div",null,[e[11]||(e[11]=A("2.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[10]||(e[10]=[A("34(个)")])),_:1})]),w("div",null,[e[13]||(e[13]=A("3.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[12]||(e[12]=[A("34(个)")])),_:1})]),w("div",null,[e[15]||(e[15]=A("4.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[14]||(e[14]=[A("34(个)")])),_:1})]),w("div",null,[e[17]||(e[17]=A("5.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[16]||(e[16]=[A("34(个)")])),_:1})]),w("div",null,[e[19]||(e[19]=A("6.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[18]||(e[18]=[A("34(个)")])),_:1})]),w("div",null,[e[21]||(e[21]=A("7.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[20]||(e[20]=[A("34(个)")])),_:1})]),w("div",null,[e[23]||(e[23]=A("8.累计充电站数量：")),a(t,{type:"primary"},{default:p(()=>e[22]||(e[22]=[A("34(个)")])),_:1})])]),_:1}),a(U,{class:"mt"},{header:p(()=>e[24]||(e[24]=[w("div",{class:"card-header"},[w("h3",null,"新增站点地图")],-1)])),default:p(()=>[a(o,{model:r,style:{"max-width":"600px"},"label-width":"85px"},{default:p(()=>[a(m,{label:"站点名称"},{default:p(()=>[a(i,{placeholder:"请输入站点名称",modelValue:r.name,"onUpdate:modelValue":e[0]||(e[0]=n=>r.name=n)},null,8,["modelValue"])]),_:1}),a(m,{label:"站点地址"},{default:p(()=>[a(i,{placeholder:"请输入站点地址",modelValue:r.region,"onUpdate:modelValue":e[1]||(e[1]=n=>r.region=n)},null,8,["modelValue"])]),_:1}),a(m,{label:"经度"},{default:p(()=>[a(i,{placeholder:"请输入经度",modelValue:r.location1,"onUpdate:modelValue":e[2]||(e[2]=n=>r.location1=n)},null,8,["modelValue"])]),_:1}),a(m,{label:"维度"},{default:p(()=>[a(i,{placeholder:"请输入维度",modelValue:r.location2,"onUpdate:modelValue":e[3]||(e[3]=n=>r.location2=n)},null,8,["modelValue"])]),_:1}),a(m,{label:"立即使用"},{default:p(()=>[a(b,{modelValue:r.now,"onUpdate:modelValue":e[4]||(e[4]=n=>r.now=n)},null,8,["modelValue"])]),_:1}),a(m,{label:"备注"},{default:p(()=>[a(i,{placeholder:"请输入备注",modelValue:r.remarks,"onUpdate:modelValue":e[5]||(e[5]=n=>r.remarks=n),rows:2,type:"textarea"},null,8,["modelValue"])]),_:1}),a(m,null,{default:p(()=>[a(L,{type:"primary",size:"default",onClick:e[6]||(e[6]=()=>{})},{default:p(()=>e[25]||(e[25]=[A("创建")])),_:1}),a(L,{type:"primary",size:"default",onClick:e[7]||(e[7]=()=>{})},{default:p(()=>e[26]||(e[26]=[A("清空")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}}),Q=P(Y,[["__scopeId","data-v-a1cb4e08"]]);export{Q as default};
