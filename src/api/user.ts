import { post } from '@/utils/http'

// 所有的接口放到枚举类型Api
enum Api {
    login = '/login'
}

interface loginParams {
    username: string,
    password: string
}

function loginApi(data: loginParams): Promise<any> {
    return post(Api.login, data)
}

export { loginApi }