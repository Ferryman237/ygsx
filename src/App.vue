<template>
  <div id="app">

    <router-view>  </router-view>
    <Tab></Tab>

  </div>
</template>

<script>
import  Tab from "@/components/Tab"
export default {
  components:{
    Tab,
  }
}
</script>

<style lang="scss">

</style>
