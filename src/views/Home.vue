<!--
 * @Author: Mukti
 * @Date: 2021-12-21 13:34:50
 * @LastEditTime: 2021-12-21 16:31:01
 * @LastEditors: Mukti
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
