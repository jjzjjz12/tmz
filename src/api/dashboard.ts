import { get } from "@/utils/http";

enum Api {
    dashboard = '/chartData',
    dashboard2 = '/chartData2',
    dashboard3 = '/chartData3'
}

function chartDataApi() {
    return get(Api.dashboard)
}

function chartData2Api() {
    return get(Api.dashboard2)
}
function chartData3Api() {
    return get(Api.dashboard3)
}

export { chartDataApi, chartData2Api, chartData3Api }