import { loginApi } from "@/api/user";
import { defineStore } from "pinia";

interface loginParams {
    username: string,
    password: string
}

export const useUserStore = defineStore("user", {
    state: () => ({
        token: sessionStorage.getItem('token') || "",
        roles: sessionStorage.getItem('roles') ? JSON.parse(sessionStorage.getItem('roles')!) : [],
        username: sessionStorage.getItem('username') || "",
        menu: sessionStorage.getItem('menu') ? JSON.parse(sessionStorage.getItem('menu')!) : [],
        photo: sessionStorage.getItem('photo') || "",
        address: sessionStorage.getItem('address') || ""
    }),
    actions: {
        async login(data: loginParams) {
            try {
                const { data: { token, menulist, user: { username, roles, photo, address } } } = await loginApi(data)
                this.token = token
                this.roles = roles
                this.username = username
                this.menu = menulist
                this.photo = photo
                this.address = address
                // 防止一刷新页面丢失数据
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('roles', JSON.stringify(roles))
                sessionStorage.setItem('username', username)
                sessionStorage.setItem('menu', JSON.stringify(menulist))
                sessionStorage.setItem('photo', photo)
                sessionStorage.setItem('address', this.address)

            } catch (error) {
                console.log('auth.ts--', error)
            }

        },

        logout() {
            this.token = '',
                this.roles = [],
                this.username = '',
                this.menu = [],
                this.photo = '',
                this.address = ''
            sessionStorage.clear()
        }
    }
})