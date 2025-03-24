<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="4">
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>今日总收入（元）</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(234567) }}</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>今日总收入（元）</h4>
                    </div>
                    <div class="total mt">
                        <h1>{{ formatNumberToThousands(1223.33) }}</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>今日总收入（元）</h4>
                    </div>
                    <div class="total mt">
                        <h1>234,413</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>今日总收入（元）</h4>
                    </div>
                    <div class="total mt">
                        <h1>2,567</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>今日总收入（元）</h4>
                    </div>
                    <div class="total mt">
                        <h1>5,067</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card>
                    <div class="title">
                        <div class="round">
                            <el-icon>
                                <Document />
                            </el-icon>
                        </div>
                        <h4>今日总收入（元）</h4>
                    </div>
                    <div class="total mt">
                        <h1>1,234,567</h1>
                        <div class="percent">-21%</div>
                    </div>
                </el-card>
            </el-col>

        </el-row>
        <el-card class="mt">
            <div ref="chartRef" style="width: 100%;height: 300px;"></div>
        </el-card>
        <el-card class="mt">
            <el-input v-model.trim="name" placeholder="请输入站点名称" style="width: 400px;">
                <template #append>
                    <el-button icon="Search" @click="loadData"></el-button>
                </template>
            </el-input>

            <el-table :data="tableData" v-loading="loading">
                <el-table-column type="index" width="70" label="序号" />
                <el-table-column prop="name" label="站点名称" />
                <el-table-column prop="id" label="站点ID" />
                <el-table-column prop="city" label="所属城市" />
                <el-table-column prop="count" label="充电桩总量（个）" />
                <el-table-column prop="day" label="单日总收入（元）" sortable>
                    <template #default="scope">
                        <span>{{ scope.row.day }}</span>
                        <el-tag class="ml" :type="scope.row.percent > 0 ? 'success' : 'danger'">
                            {{ scope.row.percent > 0 ? '+' + scope.row.percent : scope.row.percent }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="month" label="月度总收入（万元）">
                    <template #default="scope">
                        <span>{{ scope.row.month }}</span>
                        <el-tag class="ml" :type="scope.row.mpercent > 0 ? 'success' : 'danger'">
                            {{ scope.row.mpercent > 0 ? '+' + scope.row.mpercent : scope.row.mpercent }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="electricity" label="电费营收（元）" />
                <el-table-column prop="parkingFee" label="停车费营收（元）" />
                <el-table-column prop="serviceFee" label="服务费营收（元）" />
                <el-table-column prop="member" label="会员储值金（元）" />
            </el-table>
            <el-pagination class="fr mb mt" v-model:current-page="pageInfo.page" v-model:page-size="pageInfo.pageSize"
                :page-sizes="[10, 20, 30, 40]" layout="sizes, prev, pager, next, jumper,total " :total="totals"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { revenueChartApi, revenueListApi } from '@/api/chargingstation';
import { useChart } from '@/hooks/useChart';
import { usePagination } from '@/hooks/usePagination';
import type { RowType } from '@/type/station';
import formatNumberToThousands from '@/utils/toThousands';
import { onMounted, reactive, ref } from 'vue';

const setChartData = async () => {
    const chartOption = reactive({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: []
        },
        xAxis: [
            {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                min: 0,
                max: 250,
                interval: 50,
            },
            {
                type: 'value',
                name: '',
                min: 0,
                max: 1000,
                interval: 100
            }
        ],
        series: [
            {
                name: '',
                type: 'bar',
                data: []
            },
            {
                name: '',
                type: 'line',
                yAxisIndex: 1,
                data: []
            }
        ]
    })
    const res = await revenueChartApi()
    chartOption.legend.data = res.data.list.map((item: any) => item.name)
    for (let i = 0; i < res.data.list.length; i++) {
        chartOption.yAxis[i].name = res.data.list[i].name
        chartOption.series[i].name = res.data.list[i].name
        chartOption.series[i].data = res.data.list[i].data
    }
    return chartOption
}

const chartRef = ref(null)
const loading = ref<boolean>(false)
const tableData = ref<RowType[]>([])
const name = ref<string>('')

useChart(chartRef, setChartData)

const loadData = async () => {
    loading.value = true
    const { data: { list, total } } = await revenueListApi({ page: pageInfo.page, pageSize: pageInfo.pageSize, name: name.value })
    setTotal(total)
    tableData.value = list
    loading.value = false
    tableData.value = list.map((item: any) => ({
        ...item,
        day: item.electricity + item.parkingFee + item.serviceFee + item.member
    }))
}
onMounted(() => {
    loadData()
})

const { totals, pageInfo, handleCurrentChange, handleSizeChange, setTotal } = usePagination(loadData)




</script>

<style scoped lang="less">
.title {
    display: flex;
    align-items: center;

    .round {
        width: 30px;
        height: 30px;
        background-color: rgb(235, 236, 245);
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        margin-right: 20px;
    }

    h4 {
        color: #666;
    }
}

.total {
    display: flex;
    align-items: center;

    h1 {
        font-size: 30px;
        margin-right: 20px;
    }

    .percent {
        display: inline-block;
        padding: 3px 5px;
        height: 20px;
        font-size: 12px;
        background-color: rgb(235, 247, 239);
        border-radius: 2px;
        line-height: 20px;
        color: green;
    }
}
</style>