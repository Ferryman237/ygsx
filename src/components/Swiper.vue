<template>
<div class="swiper-container" :class="cName">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

</div>
</template>

<script>
//引入css样式 
import "swiper/css/swiper.min.css"
export default {
    props:["cName"]
}
</script>

<style lang="sass" scoped>

</style>