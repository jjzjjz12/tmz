// 全局类型声明文件
/// <reference types="vite/client" />

declare module "mockjs"

// 避免引入.vue文件报错
declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const ComponentOptions: ComponentOptions
    export default ComponentOptions
}