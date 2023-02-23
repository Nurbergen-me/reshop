import { createStore } from 'vuex'
import axios from 'axios'


export const state = () => ({
    loader: 'finish',
    user_token: '',
    user: {
        name: '',
        email: '',
        password: ''
    },
})

export const getters = {
    loader:(state) => state.loader,
    userToken:(state) => state.user_token,
    user:(state) => state.user,
}   

export const mutations = {
    loader(state, data) {
        console.log('store commit')
    },
    setUserToken( state, token ) {
        localStorage.setItem('user_token', token)
        state.user_token = token
    },
    saveUserToLocalData(state, data) {
        localStorage.setItem('user_name', data.name)
        localStorage.setItem('user_email', data.email)
        localStorage.setItem('user_secret', data.password)
    },
    getUserFromLocalData(state) {
        state.user.user_token = localStorage.user_token || ''
        state.user.name = localStorage.user_name || ''
        state.user.email = localStorage.user_email || ''
        state.user.password = localStorage.user_secret || ''
    },
    logout(state) {
        localStorage.removeItem('user_token');
        state.user_token = ''
        this.$router.push('/')
    }
}   

export const actions = {
    init({ commit }){
        if(localStorage.user_token) {
            this.$api.setHeader('xUserToken', localStorage.user_token)
            commit('setUserToken', localStorage.user_token)
        }
        commit('getUserFromLocalData')
    },

    login({ commit }, data) {
        this.$api.post('auth/login', {
            phone: data.phone, 
            email: data.email, 
            password: data.password
        }).then(res => {
            localStorage.setItem('user_token', res.data.token)
            this.$api.setHeader('xUserToken', res.data.token)
            commit('setUserToken', res.data.token)
            if (data.remember) {
                commit('saveUserToLocalData',data)
            } else {
                localStorage.removeItem('user_email');
                localStorage.removeItem('user_secret');
            }
            this.$router.push('/cabinet')
        })
    },


    signup({ commit }, data) {
        this.$api.post('auth/login', {
            name: data.name,
            phone: data.phone, 
            email: data.email, 
            password: data.password
        }).then(res => {
            this.$api.setHeader('xUserToken', res.data.token)
            commit('setUserToken', res.data.token)
            if (data.remember) {
                commit('saveUserToLocalData',data)
            } else {
                localStorage.removeItem('user_email');
                localStorage.removeItem('user_secret');
            }
            this.$router.push('/cabinet')
        })
    },

    ask_sms(phone, email) {
        return this.axios.post('auth/forgot', {phone: phone, email:email},{})
            .then(value => {
                if (value.data.success) {
                    let msg = {};
                    msg.msg = "Пароль отправлен!"
                    msg.color = "green";
                    store.commit('set_snack_message', msg);
                } else {
                    if (value.data.errors) {
                        let msg = {}
                        msg.msg = ''
                        msg.color = 'red'
                        for (let e of Object.keys(value.data.errors)) msg.msg += value.data.errors[e] + ' ';
                        store.commit('set_snack_message', msg)
                    }
                }
            })
    },

}
