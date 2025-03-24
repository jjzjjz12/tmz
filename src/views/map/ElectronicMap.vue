<template>
    <el-row :gutter="20">
        <el-col :span="18">
            <el-card>
                <MapContainer />
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card class="des">
                <div>1.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
                <div>2.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
                <div>3.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
                <div>4.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
                <div>5.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
                <div>6.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
                <div>7.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
                <div>8.累计充电站数量：<el-text type="primary">34(个)</el-text></div>
            </el-card>
            <el-card class="mt">
                <template #header>
                    <div class="card-header">
                        <h3>新增站点地图</h3>
                    </div>
                </template>
                <el-form :model="form" style="max-width: 600px;" label-width="85px">
                    <el-form-item label="站点名称"><el-input placeholder="请输入站点名称" v-model="form.name" /></el-form-item>
                    <el-form-item label="站点地址"><el-input placeholder="请输入站点地址" v-model="form.region" /></el-form-item>
                    <el-form-item label="经度"><el-input placeholder="请输入经度" v-model="form.location1" /></el-form-item>
                    <el-form-item label="维度"><el-input placeholder="请输入维度" v-model="form.location2" /></el-form-item>
                    <el-form-item label="立即使用"> <el-switch v-model="form.now" /></el-form-item>
                    <el-form-item label="备注"><el-input placeholder="请输入备注" v-model="form.remarks" :rows="2"
                            type="textarea" /></el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="default" @click="">创建</el-button>
                        <el-button type="primary" size="default" @click="">清空</el-button>
                    </el-form-item>

                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang='ts'>
import MapContainer from '@/components/map/MapContainer.vue'
import { reactive } from 'vue';

const form = reactive({
    name: '',
    region: '',
    location1: '',
    location2: '',
    now: '',
    remarks: ''
})
</script>

<style scoped>
.des {
    line-height: 35px;
}
</style>