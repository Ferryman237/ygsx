import Vue from "vue"
import Swiper from 'swiper'

Vue.directive("swiper",{
    inserted(el,binding,vnode){
        if(binding.value.current === binding.value.length-1){
            new Swiper("."+binding.value.swipe,{
                ...binding.value.free,
                loop:true,
                pagination:{
                    el:".swiper-pagination"
                }
            })
        }
    }
})
