<template>
<div id="app">
    <p>{{ name }}</p>
    <button @click="changeName">changeName</button>
    <Test></Test>
</div>
</template>

<script>
import Test from './Test.vue';
export default {
    name: 'App',
    data() {
        return {
            name: 'David'
        }
    },
    components: {
        Test
    },
    methods: {
        changeName() {
            this.name = 'David2';
        }
    },
    computed: {
      
    },
    created() {
    
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>