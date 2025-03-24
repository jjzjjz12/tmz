<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input v-model="searchParams.name" placeholder="请输入姓名" />
            </el-col>
            <el-col :span="6">
                <el-select v-model="searchParams.dep" placeholder="请选择部门">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="技术部" value="技术部"></el-option>
                    <el-option label="市场部" value="市场部"></el-option>
                    <el-option label="维修部" value="维修部"></el-option>
                    <el-option label="运营部" value="运营部"></el-option>
                    <el-option label="客服部" value="客服部"></el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" size="default" @click="loadData">查询</el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-col>
        </el-row>
    </el-card>
    <el-card class="mt">
        <el-table :data="dataList" :loading="loading">
            <el-table-column type="index" width="70" label="序号" />
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="账号" prop="account"></el-table-column>
            <el-table-column label="电话" prop="phone"></el-table-column>
            <el-table-column label="身份证号" prop="idNo"></el-table-column>
            <el-table-column label="职位" prop="position">
                <template #default="scope">
                    <el-tag type="primary">{{ scope.row.position }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="所属部门" prop="department"></el-table-column>
            <el-table-column label="页面权限" prop="pageAuthority">
                <template #default="scope">
                    <el-tag type="success">{{ scope.row.pageAuthority }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="按钮权限" prop="btnAuthority">
                <template #default="scope">
                    <el-tag type="info">{{ scope.row.position }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="primary" size="small"
                        @click="settingAuth(scope.row.pageAuthority, scope.row.account)">权限设置</el-button>
                    <el-button type="danger" size="small" @click="">删除</el-button>
                    <el-button type="danger" size="small" @click="">禁用</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="fr mb mt" v-model:current-page="pageInfo.page" v-model:page-size="pageInfo.pageSize"
            :page-sizes="[10, 20, 30, 40]" layout="sizes, prev, pager, next, jumper,total " :total="totals"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </el-card>
    <AuthModal :dialogTableVisible="visible" :checked-keys="checkedKeys" @close="visible = false" :check-btn="checkBtn"
        :account="account" @reload="loadData" />
</template>

<script setup lang='ts'>
import { useHttp } from '@/hooks/useHttp';
import { ref } from 'vue'
import AuthModal from './AuthModal.vue';
import { userAuthApi } from '@/api/system';
import type { MenuItem } from '@/type/user';

interface searchType {
    name: string,
    dep: string
}
const searchParams = ref<searchType>({
    name: '',
    dep: ''
})

const {
    dataList,
    loading,
    totals,
    pageInfo,
    loadData,
    handleSizeChange,
    handleCurrentChange,
    resetPagination
} = useHttp('/permissionList', searchParams)

const visible = ref<boolean>(false)

// 用来扁平化数组，获取最低级url数组——把多维数组转换成一维数组
// 参数：传入获取的菜单项
function collectUrls(tree: MenuItem[]) {
    const urls: string[] = [] // 我们需要的一维数组

    // 获取单条菜单的url
    function traverse(node: MenuItem) {
        if (node.url && !node.children) {
            urls.push(node.url)
        }
        if (node.url && node.children) {
            node.children.forEach((child: MenuItem) => { traverse(child) })
        }
    }
    tree.forEach((t: MenuItem) => {
        traverse(t)
    })
    return urls
}

const checkedKeys = ref<string[]>([])
const checkBtn = ref<string[]>([])
const account = ref<string>('')

function settingAuth(pageAuthority: string, accountNo: string) {
    userAuthApi(pageAuthority).then(
        (result) => {
            account.value = accountNo
            const { data: { list, btn } } = result
            // 这里的list里的url是一个多维数组，我们只需要最底层的url。
            checkedKeys.value = collectUrls(list)
            checkBtn.value = btn
            visible.value = true
        }
    )
}

const handleReset = () => {
    searchParams.value = {
        name: '',
        dep: ''
    }
    resetPagination()
}



</script>

<style scoped></style>