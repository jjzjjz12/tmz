import { useUserStore } from '@/store/auth'
import router from './index'

router.beforeEach((to) => {
    const userStore = useUserStore()
    const isLogin = userStore.token
    if (!isLogin) {
        // 未登录
        if (to.path !== '/login') {
            return { path: '/login' }
        }
    } else {
        // 登录
        if (to.path === '/login') {
            return { path: '/' }
        }

        if (to.meta?.needAuth && !userStore.roles.some((role: string) => (to.meta.needAuth as string[]).includes(role))) {
            return { path: '/' }
        }


    }
})