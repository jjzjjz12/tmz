<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <el-card>
                <el-input style="width: 80%;" placeholder="请输入关键词" v-model="filterText">
                    <template #append>
                        <el-button icon="Search" />
                    </template>
                </el-input>
                <el-tree style="max-width: 600px" :data="treeData" :props="defaultProps" class="mt" ref="treeRef"
                    :filter-node-method="filterNode" @node-click="handleNodeClick" />
            </el-card>
        </el-col>
        <el-col :span="18">
            <el-card>
                <template #header>
                    <div class="card-header">
                        <h3>{{ title }}:计费模板</h3>
                    </div>
                </template>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto">
                    <el-form-item label="模板名称：" prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入模板名称" style="max-width: 200px;" />
                    </el-form-item>
                    <el-form-item :label="'时间区间' + (index + 1) + '：'" v-for="(timeSlot, index) in ruleForm.date"
                        :key="index">
                        <el-col :span="8"> <!--date.0.date1 默认查找规则——> ruleForm.date[0].date1 -->
                            <el-form-item :prop="'date.' + index + '.date1'"
                                :rules="{ required: true, message: '时间不能为空', trigger: 'blur' }">
                                <el-time-picker value-format="hh:mm:ss" v-model="timeSlot.date1" placeholder="请选择开始时间"
                                    style="width: 100%;" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="1">
                            <span class="ml">--</span>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item :prop="'date.' + index + '.date2'"
                                :rules="{ required: true, message: '时间不能为空', trigger: 'blur' }">
                                <el-time-picker value-format="hh:mm:ss" v-model="timeSlot.date2" placeholder="请选择结束时间"
                                    style="width: 100%;" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="电费：" :prop="'date.' + index + '.electricity'"
                                :rules="{ required: true, message: '电费不能为空', trigger: 'blur' }">
                                <el-input v-model="timeSlot.electricity" placeholder="请输入电费" style="width: 80%" />
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-button type="primary" class="mb" @click="handleTimeSlot">添加时间</el-button>
                    <el-form-item label="服务费：" prop="service">
                        <el-input v-model="ruleForm.service" style="max-width: 200px;" />
                    </el-form-item>
                    <el-form-item label="停车费：" prop="parking">
                        <el-input v-model="ruleForm.parking" style="max-width: 200px;" />
                    </el-form-item>
                    <el-form-item label="特殊备注：" prop="remarks">
                        <el-input v-model="ruleForm.remarks" type="textarea" style="max-width: 600px;" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">创建</el-button>
                        <el-button @click="resetForm">重置</el-button>

                    </el-form-item>

                </el-form>
            </el-card>
        </el-col>
    </el-row>

</template>

<script setup lang='ts'>
import { cityListApi } from '@/api/operation'
import type { ElTree, FormInstance, FormRules } from 'element-plus'
import { ref, reactive, onMounted, watch } from 'vue'

const filterText = ref<string>("")
const treeRef = ref<InstanceType<typeof ElTree>>()

interface Tree {
    label: string
    children?: Tree[]
}

interface ruleFormType {
    name: string,
    service: string,
    parking: string,
    remarks: string,
    date: Array<{ date1: string, date2: string, electricity: string }>

}

const treeData = ref<Tree[]>([])

onMounted(() => {
    cityListApi().then((dataList) => {
        const { data } = dataList
        treeData.value = data
    })
})




const handleNodeClick = (data: Tree) => {
    if (!data.children) {
        title.value = data.label
        resetForm()
    }
}



const defaultProps = {
    children: 'children',
    label: 'label',
}

watch(filterText, (val) => {
    treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return data.label.includes(value)
}

// 计费模板
const title = ref<string>('东城区充电站01')
const ruleFormRef = ref<FormInstance>() // 用于表单校验
const rules = reactive<FormRules<ruleFormType>>({
    name: [
        { required: true, message: '请输入模板名称', trigger: 'blur' }
    ],
    service: [
        { required: true, message: '请输入服务费', trigger: 'blur' }
    ],
    parking: [
        { required: true, message: '请输入停车费', trigger: 'blur' }
    ],
    remarks: [
        { required: true, message: '请输入备注', trigger: 'blur' }
    ],

})
const ruleForm = ref<ruleFormType>({
    name: '',
    service: '',
    parking: '',
    remarks: '',
    date: [
        { date1: '', date2: '', electricity: '' }
    ]
})

const handleTimeSlot = () => {
    ruleForm.value.date.push({ date1: '', date2: '', electricity: '' })
}

const submitForm = () => {
    ruleFormRef.value?.validate((valid) => {
        if (valid) {
            console.log(ruleForm.value)
            // 将数据发送给后端接口
            resetForm()
        } else {
        }
    })
}

const resetForm = () => {
    ruleForm.value = {
        name: '',
        service: '',
        parking: '',
        remarks: '',
        date: [
            { date1: '', date2: '', electricity: '' }
        ]
    }
}


</script>

<style scoped></style>