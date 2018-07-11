<template>
    <div id="app">
        <p>{{ name }}</p>
        <button @click="changeName">changeName</button>
        <app-test></app-test>
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
            'app-test': Test
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