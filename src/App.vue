<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
    height: 100%;
    display: flex;
    flex-direction: column;
    .container {
        flex: 1;
        overflow: hidden;
        padding: 0 10px;
    }
}
nav {
    padding: 30px;
    text-align: center;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
