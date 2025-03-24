<template>
    <el-card>
        <el-radio-group v-model="radio1" size="large" class="mt">
            <el-radio-button label="严重告警" :value="1" />
            <el-radio-button label="紧急告警" :value="2" />
            <el-radio-button label="重要告警" :value="3" />
            <el-radio-button label="一般告警" :value="4" />
        </el-radio-group>
    </el-card>
    <el-card class="mt" v-for="item in alarmList" :key="item.equNo">
        <el-alert :title="`${item.address}充电桩充电异常`" type="warning" show-icon />
        <el-descriptions :column="4" :border="true" direction="vertical" class="mt">
            <el-descriptions-item v-for="(val, key) in item" :label="getLabel(key)">
                <el-tag v-if="key == 'level'" :type="val == 1 ? 'danger' : (val == 2 ? 'warning' : 'info')">{{ val == 1
                    ? '严重' : (val == 2 ? '紧急' : '一般') }}</el-tag>
                <el-text type="danger" v-else-if="key == 'status'">{{ val == 1 ? '待指派' : (val
                    == 2 ?
                    '处理中' : '处理异常') }}</el-text>
                <span v-else>{{ val }}</span>
            </el-descriptions-item>

            <el-descriptions-item label="操作">
                <el-button @click="drawer = true, drawerTitle = item.equNo"
                    :type="item.status == 2 ? 'warning' : 'primary'">{{
                        item.status == 1
                            ?
                            '指派' : (item.status
                                == 2 ? '催办' : '查看') }}</el-button>
            </el-descriptions-item>
        </el-descriptions>
    </el-card>
    <!-- 抽屉 -->
    <el-drawer v-model="drawer" title="报警任务指派">
        <stepForm :steps="steps" :form1="form1" :form2="form2" :form3="form3" @handle-submit="handleSubmit">
            <template #step-1>
                <el-form :model="formData.basicInfo" :rules="rules" ref="form1">
                    <el-form-item label="姓名：" prop="name">
                        <el-input v-model="formData.basicInfo.name" />
                    </el-form-item>
                    <el-form-item label="电话：" prop="tel">
                        <el-input v-model="formData.basicInfo.tel" />
                    </el-form-item>
                    <el-form-item label="邮箱：" prop="email">
                        <el-input v-model="formData.basicInfo.email" />
                    </el-form-item>
                    <el-form-item label="工号：" prop="no">
                        <el-input v-model="formData.basicInfo.no" />
                    </el-form-item>
                    <el-form-item label="是否加急：">
                        <el-switch v-model="formData.basicInfo.urgent"></el-switch>
                    </el-form-item>
                    <el-form-item label="其他选项：">
                        <el-checkbox-group v-model="formData.basicInfo.other">
                            <el-checkbox label="更换设备" value="1" />
                            <el-checkbox label="仅维修" value="2" />
                            <el-checkbox label="需拍照片" value="3" />
                            <el-checkbox label="需报备" value="4" />
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="其他备注信息：">
                        <el-input type="textarea" v-model="formData.basicInfo.remarks" />
                    </el-form-item>

                </el-form>
            </template>
            <template #step-2>
                <el-form :model="formData.approvalInfo" :rules="rules" ref="form2">
                    <el-form-item label="审批部门：" prop="approvalDep">
                        <el-select v-model="formData.approvalInfo.approvalDep" placeholder="请选择审批部门">
                            <el-option label="总裁办" value="1"></el-option>
                            <el-option label="运营部" value="2"></el-option>
                            <el-option label="维修部" value="3"></el-option>
                            <el-option label="市场部" value="4"></el-option>
                            <el-option label="财务部" value="5"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="抄送部门：" prop="CCDep">
                        <el-select v-model="formData.approvalInfo.CCDep" placeholder="请选择抄送部门">
                            <el-option label="总裁办" value="1"></el-option>
                            <el-option label="运营部" value="2"></el-option>
                            <el-option label="维修部" value="3"></el-option>
                            <el-option label="市场部" value="4"></el-option>
                            <el-option label="财务部" value="5"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </template>
            <template #step-3>
                <el-form :model="formData.personInfo" :rules="rules" ref="form3">
                    <el-form-item label="负责人姓名：" prop="personName">
                        <el-input v-model="formData.personInfo.personName" placeholder="请输入负责人姓名"></el-input>
                    </el-form-item>
                    <el-form-item v-model="formData.personInfo.personTel" label="负责人电话：" prop="personTel">
                        <el-input v-model="formData.personInfo.personTel" placeholder="请输入负责人电话"></el-input>
                    </el-form-item>
                </el-form>
            </template>
        </stepForm>
        <el-result icon="warning" :title="`设备编号：${drawerTitle}`" sub-title="该任务已催促2次，请抓紧处理">
            <template #extra>
                <el-button type="primary" @click="drawer = false">我已知晓</el-button>
            </template>
        </el-result>
    </el-drawer>
</template>

<script setup lang='ts'>
import { alarmListApi } from '@/api/alarm';
import { ref, onMounted } from 'vue'
import { getLabel } from './fieldLabelMap';
import stepForm from '@/components/stepForm/StepForm.vue';
import { ElMessage, type FormInstance } from 'element-plus';

interface alarmListType {
    description: string,
    address: string,
    equNo: string,
    level: number,//1严重 2紧急 3一般
    time: string,
    code: number,//故障代码
    status: number,//1待指派 2处理中 处理异常
}

const radio1 = ref<number>(1)
const alarmList = ref<alarmListType[]>([])

onMounted(async () => {
    try {
        const { data } = await alarmListApi()
        alarmList.value = data

    } catch (error) {
    }
})

// 抽屉
const drawer = ref<boolean>(false)
const steps = [
    { title: '基本信息' },
    { title: '市场信息' },
    { title: '负责人信息' }
]
const formData = ref({
    basicInfo: {
        name: '',
        tel: '',
        email: '',
        no: '',
        urgent: true,
        other: [],
        remarks: ''
    },
    approvalInfo: {
        approvalDep: '',
        CCDep: ''
    },
    personInfo: {
        personName: '',
        personTel: ''
    }
})

const rules = {
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    tel: [
        { required: true, message: '请输入电话', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
    ],
    no: [
        { required: true, message: '请输入工号', trigger: 'blur' }
    ],
    approvalDep: [
        { required: true, message: '请输入审批部门', trigger: 'blur' }
    ],
    CCDep: [
        { required: true, message: '请输入抄送部门', trigger: 'blur' }
    ],
    personName: [
        { required: true, message: '请输入负责人姓名', trigger: 'blur' }
    ],
    personTel: [
        { required: true, message: '请输入负责人电话', trigger: 'blur' }
    ],

}

const form1 = ref<FormInstance>()
const form2 = ref<FormInstance>()
const form3 = ref<FormInstance>()

const handleSubmit = () => {
    console.log(formData.value)
    ElMessage({
        message: '指派成功',
        type: 'success'
    })
    drawer.value = false
}

const drawerTitle = ref<string>('')

</script>

<style scoped></style>