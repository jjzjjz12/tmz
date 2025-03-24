import { get } from "@/utils/http";

enum Api {
    Document = '/document'
}

function documentApi() {
    return get(Api.Document)
}

export { documentApi }