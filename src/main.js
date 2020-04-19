// import Vue from 'vue'
// import App from './App.vue'

const Vue = window.Vue

Vue.config.productionTip = false
import Demo from "./Demo.vue";

//Vue实例或Vue对象
new Vue({
    components: {Demo},
    data: {
        m: '我是 props',
        visible: true,
    },
    template: `
        <div>
            <button @click="toggle">toggle</button>
            <hr>
       <!--    v-if:什么时候出现-->
            <Demo v-if="visible===true" message="你好 YL" :fn="console2" :m="m"/>
<!--message默认传字符串，传函数前面加上:->:fn       -->
        </div>

    `,
    methods: {
        console2(){
            console.log(this.m)
        },
        toggle() {
            this.visible = !this.visible
        }
    }
}).$mount('#app')