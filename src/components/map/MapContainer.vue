<template>
    <div id="container"></div>
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { mapListApi } from "@/api/map";
import icon from '@/assets/flashIcon.png'
import station from '@/assets/station.jpg'

let map: any = null;
const markData = ref < any > ([])

onMounted(() => {
    AMapLoader.load({
        key: "d59f66e20f59f7c0e1b43a21af875d1b", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Marker', 'AMap.Map'], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    }).then((AMap) => {
        map = new AMap.Map("container", {
            // 设置地图容器id
            viewMode: "3D", // 是否为3D地图模式
            zoom: 5, // 初始化地图级别
            center: [116.397428, 39.90923], // 初始化地图中心点位置
        });
        mapListApi().then(({ data }) => {
            markData.value = data
            // 添加标记
            markData.value.forEach((markData: any) => {

                // 信息窗体
                const infoWindow = new AMap.InfoWindow({
                    offset: new AMap.Pixel(0, -30),
                });


                const marker = new AMap.Marker({
                    position: markData.position,
                    icon: icon, //添加 icon 图标 URL
                    title: "北京",
                });

                //创建点标记的点击事件
                marker.on("click", function () {
                    infoWindow.setContent(
                        `<div style="display:flex;padding:10px;align-items:center">
                        <div>
                        <img src=${station} width="200px"/>
                        </div>
                        <div style="width:180px;line-height:30px;margin-left:20px">
                        <h3>${markData.title}</h3>
                        <p>充电桩数量：${markData.count}</p>
                        <p>充电桩状态：<span style="color:blue">${markData.status === 1 ? '使用中' : '维修中'}</span></p>
                        </div>
                        </div>`
                    )
                    //打开信息窗体
                    infoWindow.open(map, marker.getPosition()); //map 为当前地图的实例，marker.getPosition() 用于获取点坐标。
                });
                map.add(marker);
            })


        })

    }).catch((e) => {
        console.log(e);
    });



});

onUnmounted(() => {
    map?.destroy();
});
</script>

<style scoped>
#container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 80vh;
}
</style>
