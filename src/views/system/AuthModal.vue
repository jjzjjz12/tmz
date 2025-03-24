<template>
    <el-dialog :model-value="dialogTableVisible" title="权限设置" width="800" @open="handleOpen" @close="handleClose">
        <el-card>
            <template #header>
                <div class="card-header">
                    页面标题
                </div>
            </template>
            <el-tree style="max-width: 600px" :data="treeData" ref="treeRef" show-checkbox node-key="url" />
        </el-card>
        <el-card class="mt">
            <template #header>
                <div class="card-header">
                    按钮权限
                </div>
            </template>
            <el-checkbox-group v-model="initBtnAuth">
                <el-checkbox label="全部" value="all" />
                <el-checkbox label="添加" value="add" />
                <el-checkbox label="编辑" value="edit" />
                <el-checkbox label="删除" value="delete" />
            </el-checkbox-group>
        </el-card>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleConfirm">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang='ts'>
import { setAuthApi } from '@/api/system';
import { useUserStore } from '@/store/auth';
import { transformMenu } from '@/utils/transformMenu';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const prop = defineProps({
    dialogTableVisible: {
        type: Boolean,
        required: true
    },
    // 权限
    checkedKeys: {
        type: Array,
        required: true
    },
    checkBtn: {
        type: Array,
        required: true
    },
    account: {
        type: String,
        required: true
    }

})
const emit = defineEmits(['close', 'reload'])

const userStore = useUserStore()
const { menu } = storeToRefs(userStore)
const treeData = ref(transformMenu(menu.value))
const treeRef = ref()
// 要想设置string[]可以更改const prop = defineProps<{ dialogTableVisible: boolean, checkedKeys: string[], checkBtn: string[] }>()
// const initBtnAuth = ref<string[]>([])
const initBtnAuth = ref<any[]>([])
const handleOpen = () => {
    treeRef.value.setCheckedKeys(prop.checkedKeys)
    initBtnAuth.value = prop.checkBtn
}
const handleClose = () => {
    emit('close')
}

const handleConfirm = async () => {
    const res = await setAuthApi(initBtnAuth.value, treeRef.value.getCheckedKeys(true), prop.account)
    if (res.code === 200) {
        ElMessage({
            message: res.message,
            type: 'success'
        })
    }
    emit('close')
    emit('reload')
}




</script>

<style scoped></style>