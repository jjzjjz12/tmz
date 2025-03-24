import { get } from "@/utils/http";

enum Api {
    alarmList = '/alarmList'
}

function alarmListApi() {
    return get(Api.alarmList)
}

export { alarmListApi }