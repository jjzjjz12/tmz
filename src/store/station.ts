import { defineStore } from "pinia";
import { ref } from "vue";
import type { RowType } from '@/type/station';

export const useStationStore = defineStore('station', () => {
    const defaultRowData: RowType = {
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
    }

    const rowData = ref<RowType>(defaultRowData)

    const setRowData = (row: RowType) => {
        rowData.value = row
    }

    const resetRowData = () => {
        rowData.value = defaultRowData
    }

    return { rowData, setRowData, resetRowData }
})