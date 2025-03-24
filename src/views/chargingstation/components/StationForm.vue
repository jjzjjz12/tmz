<template>
    <el-dialog :model-value="dialogVisible" title="新增充电站" @close="handleCancer" destroy-on-close>
        <el-form label-width="120" :rules="rules" :model="ruleForm" ref="formRef">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="站点名称：" prop="name"><el-input v-model="ruleForm.name" /></el-form-item>
                    <el-form-item label="站点ID：" prop="id"><el-input v-model="ruleForm.id"
                            :disabled="disabled" /></el-form-item>
                    <el-form-item label="所属城市：" prop="city"><el-input v-model="ruleForm.city" /></el-form-item>
                    <el-form-item label="站点负责人：" prop="person"><el-input v-model="ruleForm.person" /></el-form-item>
                    <el-form-item label="负责人电话：" prop="tel"><el-input v-model="ruleForm.tel" /></el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="快充数：" prop="fast"><el-input v-model="ruleForm.fast" /></el-form-item>
                    <el-form-item label="慢充数：" prop="slow"><el-input v-model="ruleForm.slow" /></el-form-item>
                    <el-form-item label="充电站状态：" prop="status">
                        <el-select placeholder="充电站状态" v-model="ruleForm.status" :disabled="disabled">
                            <el-option label="全部" :value="1"></el-option>
                            <el-option label="使用中" :value="2"></el-option>
                            <el-option label="空闲中" :value="3"></el-option>
                            <el-option label="维护中" :value="4"></el-option>
                            <el-option label="待维修" :value="5"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="正在充电：" prop="now"><el-input v-model="ruleForm.now"
                            :disabled="disabled" /></el-form-item>
                    <el-form-item label="故障数：" prop="fault"><el-input v-model="ruleForm.fault"
                            :disabled="disabled" /></el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancer">取消</el-button>
                <el-button type="primary" @click="handleConfirm">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang='ts'>
import { editApi } from '@/api/chargingstation';
import { useStationStore } from '@/store/station';
import type { RowType } from '@/type/station';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { storeToRefs } from 'pinia';
import { ref, reactive, watch } from 'vue'

const props = defineProps({
    dialogVisible: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['close', 'reload'])

const ruleForm = ref<RowType>({
    name: '',
    id: '',
    city: '',
    person: '',
    tel: '',
    fast: '',
    slow: '',
    status: 1,
    now: '',
    fault: ''
})

const rules = reactive<FormRules<RowType>>({
    name: [
        { required: true, message: "站点名称不能为空", trigger: "blur" }
    ],
    id: [
        { required: true, message: '站点id不能为空', trigger: 'blur' },
    ],
    city: [
        { required: true, message: '所属城市不能为空', trigger: 'blur' },
    ],
    person: [
        { required: true, message: '站点负责人不能为空', trigger: 'blur' },
    ],
    tel: [
        { required: true, message: '负责人电话不能为空', trigger: 'blur' },
    ],
    fast: [
        { required: true, message: '快充数不能为空', trigger: 'blur' },
    ],
    slow: [
        { required: true, message: '慢充数不能为空', trigger: 'blur' },
    ],
    status: [
        { required: true, message: '充电站状态不能为空', trigger: 'blur' },
    ],
    now: [
        { required: true, message: '正在充电数不能为空', trigger: 'blur' },
    ],
    fault: [
        { required: true, message: '故障数量不能为空', trigger: 'blur' },
    ]
})

const handleCancer = () => {
    emit('close')
}

const stationStore = useStationStore()
const { rowData } = storeToRefs(stationStore)
const disabled = ref<boolean>(false)
watch(() => props.dialogVisible, () => {
    if (rowData.value.name) {
        disabled.value = true
    } else {
        disabled.value = false

    }
    ruleForm.value = rowData.value

})

const formRef = ref<FormInstance>()
const handleConfirm = () => {
    formRef.value?.validate(async (valid: boolean) => {
        if (valid) {
            const res = await editApi(ruleForm.value)
            if (res.code === 200) {
                ElMessage({
                    message: res.data,
                    type: 'success'
                })
                handleCancer()
                emit('reload')
            }
        }
    })
}

</script>

<style scoped></style>