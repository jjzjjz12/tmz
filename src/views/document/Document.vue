<template>
    <el-card>
        <div class="mt">
            <span class="title">文章类别：</span>
            <el-tag :type="currentIndex[0] == -1 ? 'primary' : 'info'" @click="handleSelect(-1, 0)">全部</el-tag>
            <el-tag :type="currentIndex[0] == index ? 'primary' : 'info'" class="ml"
                v-for="(item, index) in typeList.type" :key="item" @click="handleSelect(index, 0)">{{ item }}</el-tag>
        </div>
        <div class="mt">
            <span class="title">重要程度：</span>
            <el-tag :type="currentIndex[1] == -1 ? 'primary' : 'info'" @click="handleSelect(-1, 1)">全部</el-tag>
            <el-tag :type="currentIndex[1] == index ? 'primary' : 'info'" class="ml"
                v-for="(item, index) in typeList.important" :key="item" @click="handleSelect(index, 1)">{{ item
                }}</el-tag>
        </div>
        <div class="mt">
            <span class="title">发布渠道：</span>
            <el-tag :type="currentIndex[2] == -1 ? 'primary' : 'info'" @click="handleSelect(-1, 2)">全部</el-tag>
            <el-tag :type="currentIndex[2] == index ? 'primary' : 'info'" class="ml"
                v-for="(item, index) in typeList.publish" :key="item" @click="handleSelect(index, 2)">{{ item
                }}</el-tag>
        </div>
        <el-divider />
        <div class="mt">
            <span class="title">已选：</span>
        </div>
    </el-card>
    <el-button type="primary" class="mt mb" @click="exportToHTML">导出富文本到HTML文件</el-button>

    <Editor v-model="editorContent" api-key="ii7f06e314pnffkrkgsctss61mqyjyas0wkr53m4y6v2o8k5" :init="{
        language: 'zh_CN',
        plugins: 'lists link image table code help wordcount'
    }" />
</template>

<script setup lang='ts'>
import { documentApi } from '@/api/document';
import { ref, onMounted } from 'vue'
import Editor from '@tinymce/tinymce-vue'

interface typeListType {
    important: Array<string>,
    publish: Array<string>,
    type: Array<string>
}

const typeList = ref<typeListType>({
    important: [],
    publish: [],
    type: []
})

const currentIndex = ref([-1, -1, -1])

const handleSelect = (index: number, num: number) => {
    currentIndex.value[num] = index
}

onMounted(async () => {
    const { data: { important, publish, type } } = await documentApi()
    typeList.value.important = important
    typeList.value.publish = publish
    typeList.value.type = type
})

const editorContent = ref('')
const exportToHTML = () => {
    // blob存储大块的二进制数据内容，转换为type为html格式的数据
    const blob = new Blob([editorContent.value], { type: 'type/html' })
    // 创建一个链接元素
    const link = document.createElement('a')
    // 将blob的URL设置为链接地址
    link.href = URL.createObjectURL(blob)
    // 下载的名称
    link.download = 'document.tml'
    // 点击链接下载文件
    link.click()
    // 释放URL
    URL.revokeObjectURL(link.href)
}


</script>

<style scoped lang="less">
.title {
    display: inline-block;
    width: 80px;
    font-size: 14px;
}
</style>