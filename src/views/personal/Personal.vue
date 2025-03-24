<template>
    <el-row>
        <el-col :span="12">
            <el-card>
                <el-descriptions direction="vertical" border style="margin-top: 20px">
                    <el-descriptions-item :rowspan="2" :width="140" label="头像" align="center">
                        <el-image style="width: 100px; height: 100px" :src='userInfo.photo' />
                    </el-descriptions-item>
                    <el-descriptions-item label="名称">{{ userInfo.username }}</el-descriptions-item>
                    <el-descriptions-item label="身份">{{ userInfo.roles[0] }}</el-descriptions-item>
                    <el-descriptions-item label="住址">{{ userInfo.address }}</el-descriptions-item>
                    <el-descriptions-item label="标签">
                        <el-tag type="danger" size="small" class="mr">超高颜值</el-tag>
                        <el-tag type="warning" size="small" class="mr">努力</el-tag>
                        <el-tag size="small" class="mr">忙内</el-tag>
                        <el-tag type="success" size="small" class="mr">搞笑</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="简介">
                        是人气偶像天团EXO的忙内成员，参加过韩综“犯人就是你”、showtime……
                    </el-descriptions-item>
                </el-descriptions>
            </el-card>
            <el-card class="mt">
                <el-calendar v-model="value" />
            </el-card>
            <el-card class="mt">
                <template #header>
                    <div class="card-header">
                        <span>完善个人资料</span>
                    </div>
                </template>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <stepForm :steps="steps" :form1="form1">
                            <template #step-1>
                                <el-form :model="formData.basicInfo" ref="form1">
                                    <el-form-item lable="姓名"><el-input></el-input></el-form-item>
                                </el-form>
                            </template>
                        </stepForm>
                    </el-col>
                    <el-col :span="8"></el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="12"></el-col>
    </el-row>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import stepForm from '@/components/stepForm/StepForm.vue';
import type { FormInstance } from 'element-plus';

const userStore = useUserStore()
const { username, roles, photo, address } = storeToRefs(userStore)
const userInfo = {
    username: username.value,
    roles: roles.value,
    photo: photo.value,
    address: address.value
}

const value = ref(new Date())
const steps = [
    { title: '基本信息' },
    { title: '在职信息' },
]

const form1 = ref<FormInstance>()
// const form2 = ref<FormInstance>()

const formData = {
    basicInfo: {
        name: '',
        address: '',
        tel: ''
    },
    workInfo: {
        status: ''
    }
}



</script>

<style scoped></style>