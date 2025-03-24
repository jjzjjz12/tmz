<template>
    <el-row :gutter="20">
        <el-col :span="17">
            <el-card>
                <template #header>
                    <div class="title">
                        <h3>今日设备运行状态</h3>
                        <p class="ml">2025年2月18日</p>
                        <el-icon color="#86909c" style="margin-left: 5px;">
                            <Refresh />
                        </el-icon>
                    </div>
                </template>
                <div class="equipment">
                    <div class="item">
                        <h4 class="mb mt">充电桩使用率</h4>
                        <img :src="flash" class="mb mt">
                        <h1 class="mb">26 / 90</h1>
                        <div class="statistic-card">
                            <el-statistic :value="9">
                                <template #title>
                                    <div style="display: inline-flex; align-items: center">
                                        异常设备 <el-tooltip effect="dark" content="当前有9台设备异常" placement="top">
                                            <el-icon style="margin-left: 4px" :size="12">
                                                <Warning />
                                            </el-icon>
                                        </el-tooltip>
                                    </div>
                                </template>
                            </el-statistic>
                            <div class="statistic-footer">
                                <div class="footer-item">
                                    <span>相较昨日</span>
                                    <span class="green mt">
                                        24%
                                        <el-icon>
                                            <CaretTop color="green" />
                                        </el-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h4 class="mb mt">充电柜使用率</h4>
                        <img :src="flash2" class="mb mt">
                        <h1 class="mb">100 / 258</h1>
                        <div class="statistic-card">
                            <el-statistic :value="22">
                                <template #title>
                                    <div style="display: inline-flex; align-items: center">
                                        异常设备 <el-tooltip effect="dark" content="当前有22台设备异常" placement="top">
                                            <el-icon style="margin-left: 4px" :size="12">
                                                <Warning />
                                            </el-icon>
                                        </el-tooltip>
                                    </div>
                                </template>
                            </el-statistic>
                            <div class="statistic-footer">
                                <div class="footer-item">
                                    <span>相较昨日</span>
                                    <span>
                                        24%
                                        <el-icon>
                                            <CaretTop color="red" />
                                        </el-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <h4 class="mb mt">充电站使用率</h4>
                        <img :src="flash3" class="mb mt">
                        <h1 class="mb">258 / 1990</h1>
                        <div class="statistic-card">
                            <el-statistic :value="12">
                                <template #title>
                                    <div style="display: inline-flex; align-items: center">
                                        异常设备 <el-tooltip effect="dark" content="当前有12台设备异常" placement="top">
                                            <el-icon style="margin-left: 4px" :size="12">
                                                <Warning />
                                            </el-icon>
                                        </el-tooltip>
                                    </div>
                                </template>
                            </el-statistic>
                            <div class="statistic-footer">
                                <div class="footer-item">
                                    <span>相较昨日</span>
                                    <span class="green">
                                        24%
                                        <el-icon>
                                            <CaretTop color="green" />
                                        </el-icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="mt">
                <template #header>
                    <div class="card-header">
                        <h1>常用功能</h1>
                    </div>
                </template>
                <div class="quick mt mb">
                    <el-row>
                        <el-col :span="4"><img :src="repair">
                            <p>设备维修</p>
                        </el-col>
                        <el-col :span="4"><img :src="progress">
                            <p>任务进度</p>
                        </el-col>
                        <el-col :span="4"><img :src="remain">
                            <p>每日任务</p>
                        </el-col>
                        <el-col :span="4"><img :src="total">
                            <p>营收占比</p>
                        </el-col>
                        <el-col :span="4"><img :src="money">
                            <p>营收统计</p>
                        </el-col>
                        <el-col :span="4"><img :src="daily">
                            <p>每日日报</p>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <el-card class="mt">
                <template #header>
                    <div class="card-header">
                        <h1>能源统计</h1>
                    </div>
                </template>
                <el-row>
                    <el-col :span="6">
                        <div ref="chartRef2" style="width: 100%;height: 400px;"></div>
                    </el-col>
                    <el-col :span="18">
                        <div ref="chartRef" style="width: 100%;height: 400px;"></div>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :span="7">
            <el-card>
                <template #header>
                    <div class="title">
                        <h1>今日设备运行状态</h1>
                    </div>
                </template>
                <div ref="chartRef3" style="width: 100%;height: 240px;"></div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang='ts'>
import flash from '@/assets/flash.png'
import flash2 from '@/assets/flash2.png'
import flash3 from '@/assets/flash3.png'
import repair from "@/assets/repair.png"
import progress from "@/assets/progress.png"
import remain from "@/assets/remain.png"
import total from "@/assets/total.png"
import money from "@/assets/money.png"
import daily from "@/assets/daily.png"

import { reactive, ref } from 'vue'
import { useChart } from '@/hooks/useChart'
import { chartDataApi, chartData2Api, chartData3Api } from '@/api/dashboard'


const chartRef = ref(null)
const chartRef2 = ref(null)
const chartRef3 = ref(null)



const setChartData = async () => {
    const chartOption: any = reactive({
        title: {
            text: '电量统计'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: []
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',]
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}kw'
            }
        },
        series: [
            {
                name: '',
                type: 'line',
                data: [],
                smooth: true
            },
            {
                name: '',
                type: 'line',
                data: [],
                smooth: true
            },
            {
                name: '',
                type: 'line',
                data: [],
                smooth: true
            },


        ]
    });
    const res = await chartDataApi()
    console.log('DB', res)
    chartOption.legend.data = res.data.list.map((item: any) => item.name)
    for (let i = 0; i < res.data.list.length; i++) {
        chartOption.series[i].name = chartOption.legend.data[i]
        chartOption.series[i].data = res.data.list[i].data
    }
    return chartOption
}

// 有异步问题且组合式函数不能在函数内部调用
// 传入函数，在函数内拿数据执行
useChart(chartRef, setChartData)

const setChartData2 = async () => {
    const chartOption: any = reactive({
        legend: {
            top: 'bottom'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c}'
        },
        series: [
            {
                name: '营收占比',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['50%', '50%'],
                roseType: 'area',
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
                itemStyle: {
                    borderRadius: 8
                },
                data: []
            }
        ],
        graphic: {
            type: 'text', // 指定图形类型为文本
            left: 'center', // 水平居中
            top: 'center', // 垂直居中
            style: {
                text: '营收占比', // 显示的文本内容
                fontSize: 18, // 字体大小
                fontWeight: 'bold', // 字体加粗
                fill: '#333' // 字体颜色
            }
        }
    });
    const res = await chartData2Api()
    chartOption.series[0].data = res.data.list
    console.log('qqq', chartOption.series[0].data)
    return chartOption
}

useChart(chartRef2, setChartData2)

const setChartData3 = async () => {
    const chartOption = reactive({
        title: {
            text: '设备总览'
        },
        legend: {
            data: []
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '闲置数', max: 100 },
                { name: '使用数', max: 100 },
                { name: '故障数', max: 100 },
                { name: '更换数', max: 100 },
                { name: '维修数', max: 100 },
                { name: '报废数', max: 100 }
            ]
        },
        series: [
            {
                name: '设备总览',
                type: 'radar',
                data: []
            }
        ]
    });
    const res = await chartData3Api()
    chartOption.legend.data = res.data.list.map((item: any) => item.name)
    chartOption.legend.data = res.data.list.map((item: any) => item.name);

    // 动态填充 series.data
    chartOption.series[0].data = res.data.list.map((item: any) => ({
        name: item.name,
        value: item.data
    }));
    return chartOption
}
useChart(chartRef3, setChartData3)
</script>

<style scoped lang="less">
.title {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    align-items: flex-end;

    p {
        color: #86909c;
    }


}

.equipment {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;

    .item {
        h1 {
            font-size: 36px;
        }

        :v-deep(.el-statistic__content) {
            margin-top: 10px !important;
            margin-bottom: 10px !important;
        }
    }
}

.quick {
    margin-top: 30px;
    text-align: center;

    p {
        margin-top: 10px;
        color: #333;
    }
}
</style>