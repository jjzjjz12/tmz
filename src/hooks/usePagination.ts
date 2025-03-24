import { reactive, ref } from "vue";

export function usePagination(loadData: () => Promise<any>, initialPageSize = 10) {
    const totals = ref<number>(0)
    const pageInfo = reactive({
        page: 1,
        pageSize: initialPageSize
    })

    const handleSizeChange = (size: number) => {
        pageInfo.pageSize = size
        loadData()
    }
    const handleCurrentChange = (number: number) => {
        pageInfo.page = number
        loadData()
    }
    const resetPagination = () => {
        pageInfo.page = 1
        pageInfo.pageSize = initialPageSize
    }
    const setTotal = (total: number) => {
        totals.value = total
    }

    return { totals, pageInfo, handleCurrentChange, handleSizeChange, resetPagination, setTotal }
}