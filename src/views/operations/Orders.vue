<template>
    <el-card>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input placeholder="请输入订单号" v-model="searchParams.orderNo" />
            </el-col>
            <el-col :span="6">
                <el-select placeholder="订单状态" v-model="searchParams.status">
                    <el-option label="全部" :value="1"></el-option>
                    <el-option label="进行中" :value="2"></el-option>
                    <el-option label="已完成" :value="3"></el-option>
                    <el-option label="异常" :value="4"></el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-input placeholder="设备编号" v-model="searchParams.no" />
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="loadData">查询</el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-col>
            <el-col :span="6" class="mt">
                <el-input placeholder="请输入站点名称" v-model="searchParams.name" />
            </el-col>
            <el-col :span="6" class="mt">
                <div class="block">
                    <el-date-picker value-format="YYYY-MM-DD" v-model="date" type="datetimerange" range-separator="/"
                        start-placeholder="开始时间" end-placeholder="结束时间" @change="handleChange" />
                </div>
            </el-col>
        </el-row>
    </el-card>
    <el-card class="mt">
        <el-button type="danger" @click="handleBatchDelete" :disabled="!selectList.length">批量删除</el-button>
        <el-button type="success" icon="Download" :disabled="!selectList.length"
            @click="exportToExcel">导出数据到excel</el-button>
    </el-card>
    <el-card class="mt">
        <el-table :data="dataList" :loading="loading" @selection-change="handleSelectChange">
            <el-table-column type="selection"></el-table-column>

            <el-table-column type="index" label="序号" width="70">
            </el-table-column>
            <el-table-column prop="orderNo" label="订单号"></el-table-column>
            <el-table-column prop="date" label="订单日期"></el-table-column>
            <el-table-column prop="startTime" label="开始时间"></el-table-column>
            <el-table-column prop="endTime" label="结束时间"></el-table-column>
            <el-table-column prop="equipmentNo" label="设备编号"></el-table-column>
            <el-table-column prop="money" label="金额"></el-table-column>
            <el-table-column prop="pay" label="支付方式"></el-table-column>
            <el-table-column prop="status" label="订单状态">
                <template #default="scope">
                    <el-tag type="success" v-if="scope.row.status == 2">进行中</el-tag>
                    <el-tag type="primary" v-else-if="scope.row.status == 3">已完成</el-tag>
                    <el-tag type="warning" v-else="scope.row.status==4">异常</el-tag>

                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="handleDetail(scope.row.orderNo)">详情</el-button>
                    <el-button type="danger" size="small" @click="">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="fr mb mt" v-model:current-page="pageInfo.page" v-model:page-size="pageInfo.pageSize"
            :page-sizes="[10, 20, 30, 40]" layout="sizes, prev, pager, next, jumper,total " :total="totals"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </el-card>

</template>

<script setup lang='ts'>
import { batchDeleteApi } from '@/api/operation'
import { useHttp } from '@/hooks/useHttp'
import { useTabsStore } from '@/store/tabs'
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as XSLX from 'xlsx' // 导出excel核心库
import { saveAs } from 'file-saver' // 保存到本地

interface selectionListType {
    orderNo: string,
    date: string,
    status: number,
    startDate: string,
    endDate: string,
    equipmentNo: string,
    money: string,
    pay: string
}

interface searchType {
    orderNo: string,
    status: number,
    no: string,
    name: string,
    startDate: string,
    endDate: string,
}

const date = ref()
const searchParams = ref<searchType>({
    orderNo: '',
    status: 1,
    no: '',
    name: '',
    startDate: '',
    endDate: '',
})

const handleChange = (val: string[]) => {
    searchParams.value.startDate = val[0]
    searchParams.value.endDate = val[1]
}

const handleReset = () => {
    date.value = ''
    searchParams.value = {
        orderNo: '',
        status: 1,
        no: '',
        name: '',
        startDate: '',
        endDate: '',
    }
    resetPagination()
}



const { dataList,
    loading,
    totals,
    pageInfo,
    loadData,
    handleSizeChange,
    handleCurrentChange,
    resetPagination } = useHttp<selectionListType>('/orderList', searchParams)

const selectList = ref<selectionListType[]>([])
const handleSelectChange = (select: selectionListType[]) => {
    selectList.value = select
    console.log('hhh', select)
}

// 批量删除
const handleBatchDelete = async () => {

    try {
        const res = await batchDeleteApi(selectList.value.map((item: selectionListType) => item.orderNo))
        if (res.code == 200) {
            ElMessage({
                message: res.data,
                type: 'success'
            })
        }
        loadData()
    } catch (error) {
        console.log(error)
    }
}

const router = useRouter()
const tabsStore = useTabsStore()
const { addTab, setCurrentTab } = tabsStore
const handleDetail = (orderNo: string) => {
    addTab('订单详情', '/operations/detail', 'Share')
    setCurrentTab('订单详情', '/operations/detail')
    router.push('/operations/detail?orderNo=' + orderNo)
}

const route = useRoute()
watch(() => route.name, (to, from) => {
    if (to == 'orders' && from != 'detail') {
        loadData()
    }
})

const exportToExcel = () => {
    const ws = XSLX.utils.json_to_sheet(selectList.value) // 把所选定的内容转为excel格式
    const wb = XSLX.utils.book_new() // 创建新的工作簿
    XSLX.utils.book_append_sheet(wb, ws, 'Sheet1') //将工作部添加到工作表
    const wbout = XSLX.write(wb, { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([wbout], { type: 'application/octet-stream' })
    saveAs(blob, '导入的数据.xlsx')
}

</script>

<style scoped></style>