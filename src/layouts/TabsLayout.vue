<template>
    <el-tabs v-model="currentTab.name" type="card" closable class="demo-tabs" @tab-click="handleClick"
        @tab-remove="remove">
        <el-tab-pane v-for="tab in tabs" :key="tab.url" :label="tab.name" :name="tab.name">
            <template #label>
                <span class="custom-tabs-label">
                    <el-icon>
                        <component :is="tab.icon"></component>
                    </el-icon>
                    <span>&nbsp;{{ tab.name }}</span>
                </span>
            </template>
        </el-tab-pane>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"></component>
            </keep-alive>
            <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"></component>
        </router-view>
    </el-tabs>
</template>

<script setup lang='ts'>
import { useUserStore } from '@/store/auth';
import { useTabsStore } from '@/store/tabs';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';



const router = useRouter()

const tabsStore = useTabsStore()
const { tabs, currentTab } = storeToRefs(tabsStore)
const { setCurrentTab, addTab, removeTab } = tabsStore

const route = useRoute()
const userStore = useUserStore()
const { menu } = storeToRefs(userStore)


const handleClick = ({ index }: { index: number }) => {
    router.push(tabs.value[index].url)
    setCurrentTab(tabs.value[index].name, tabs.value[index].url) // 设置当前高亮
}

// 刷新后当前路径高亮
function findObjectByUrl(arr: any[], url: string) {
    for (const item of arr) {
        if (item.url === url) {
            return item
        }
        if (item.children) {
            const found: any[] = findObjectByUrl(item.children, url)
            if (found) {
                return found
            }
        }
    }
    return null
}
const { name, url, icon } = findObjectByUrl(menu.value, route.path)
addTab(name, url, icon)
setCurrentTab(name, url)


const remove = (targetName: string) => {
    removeTab(targetName)
    router.push(currentTab.value.url)
}




</script>

<style scoped lang="less">
.demo-tabs {
    ::v-deep .is-active {
        background-color: #ffaab8 !important;
        color: #fff !important;
    }
}
</style>