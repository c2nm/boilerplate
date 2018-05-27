<template>
    <div id="app">
        <p>{{ name }}</p>
        <button @click="changeName">changeName</button>
        <Test></Test>
    </div>
</template>

<script>
import Test from './Test.vue'
export default {
    name: 'App',
    data: function() {
        return {
            name: 'David'
        }
    },
    methods: {
        changeName: function()
        {
            this.name = 'David2'
        }
    },
    computed: {

    },
    components: {
        Test
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>