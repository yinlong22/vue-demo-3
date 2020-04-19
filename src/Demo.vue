<template>
    <div class="red">
        {{n}}
        <button @click="add">+1</button>
        <hr>
<!--Demo1调用的是内部vue的data数据，Demo2为调用外部props数据，在js里-->
        <div class="red2">
        这里是 Demo2 内部
        {{message}}
            <button @click="fn">hi</button>
            {{m}}
        </div>
    </div>

</template>

<script>
    export default {
        props: ['message','fn','m'],
        data() {
            return {
                n: 0,
                array: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        },
        created() {
            console.log('我还在内存')
        },
        mounted() {
            console.log('我在页面中')
        },
        updated() {
            console.log('更新了')
        },
        destroyed() {
            console.log('消失了')
        },
        methods: {
            add() {
                this.n += 1
            },
        },
    }
</script>

<style scoped>
    .red {
        color: red;
    }
    .red2{
        color: rosybrown;
    }
</style>