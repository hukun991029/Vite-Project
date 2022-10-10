import { defineStore } from 'pinia';
const useStore = defineStore('store', {
    state: () => ({
        userInfo: {}
    }),
    actions: {
        setUserInfo(data = {}) {
            this.userInfo = data;
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
    }
});
export default useStore;
