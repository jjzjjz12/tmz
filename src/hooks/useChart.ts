import { onBeforeUnmount, onMounted, ref, type Ref, markRaw } from "vue";
import * as echarts from 'echarts';

export function useChart(chartRef: Ref<HTMLElement | null>, setChartData: any) {
    const chartInstance = ref<echarts.ECharts | null>(null)

    const initCharts = async () => {
        // chartInstance和echarts.init()都是响应式，避免冲突用markRaw
        chartInstance.value = markRaw(echarts.init(chartRef.value)) //取消vue响应式
        // 获取数据
        const options = await setChartData()
        chartInstance.value.setOption(options)
    }

    // 根据窗口调节大小
    const resizeChart = () => {
        chartInstance.value?.resize()
    }

    onMounted(() => {
        initCharts()
        window.addEventListener('resize', resizeChart)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', resizeChart)
        if (chartInstance.value) {
            // 销毁图表，清空图表占用的资源
            chartInstance.value.dispose()
        }
    })

}