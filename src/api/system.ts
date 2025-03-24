import { post } from "@/utils/http";

enum Api {
    UserAuth = '/userAuth',
    SetAuth = '/setAuth'
}

function userAuthApi(pageAuthority: string) {
    return post(Api.UserAuth, { pageAuthority: pageAuthority })
}

function setAuthApi(btnList: string[], pageList: string[], account: string) {
    return post(Api.SetAuth, { btnList, pageList, account })
}

export { userAuthApi, setAuthApi }