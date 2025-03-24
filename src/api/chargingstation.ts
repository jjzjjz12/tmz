import type { RowType } from "@/type/station";
import { get, post } from "@/utils/http";

interface ListType {
    id?: string,
    name?: string,
    status: number,
    pageSize: number,
    page: number
}

interface revenueListType {
    pageSize: number,
    page: number,
    name: string
}


enum Api {
    List = '/stationList',
    Edit = '/station/edit',
    Delete = '/station/delete',
    RevenueChart = '/revenueChart',
    RevenueList = '/revenueList',
    CurrentList = '/currentList'
}

function listApi(data: ListType) {
    return post(Api.List, data)
}

function editApi(data: RowType) {
    return post(Api.Edit, data)
}

function deleteApi(id: string) {
    return post(Api.Delete, { id })
}

function revenueChartApi() {
    return get(Api.RevenueChart)
}

function revenueListApi(data: revenueListType) {
    return post(Api.RevenueList, data)
}

function currentListApi() {
    return post(Api.CurrentList)
}

export { listApi, editApi, deleteApi, revenueChartApi, revenueListApi, currentListApi }