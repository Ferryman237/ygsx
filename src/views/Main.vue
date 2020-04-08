<template>
    <div class="main">
        <!-- 搜索框 -->
        <div class="header">
           <div class="left" @click="goCity">
               城市
           </div>
           <div class="right">
                <van-search
                  
                    v-model="searchval"
                    shape="round"
                    background="#4fc08d"
                    placeholder="请输入商品名称"
                    @focus="onFocus"
                >
                </van-search>
            </div>
        </div>
        <!-- banner轮播图 -->
        <div class="banner">
            <Swiper cName ='ban'>
                <div 
                    class="swiper-slide"
                    v-for="(banner,index) in bannerList"
                    :key="banner.name"
                    v-swiper = "{
                        current:index,
                        length:bannerList.length,
                        swipe:'ban',
                        free:{
                            autoplay:true,
                        }
                       
                    }"
                    >
                    <div>
                        <img  class="bannerImg" :src="banner.address" :alt="banner.name">
                    </div>
                </div>
            </Swiper>
        </div>
        <!-- 九宫格 -->
        <div class="grid">
            <van-grid :column-num="4">
                <van-grid-item
                v-for="value in grids"
                :key="value.navIndex"
                :icon="value.pictureUrl"
                :text="value.navName"
                />
            </van-grid>
        </div>
        <div class="first-screen-ad">
            <img :src="imgt" alt="">
        </div>
    </div>
        
    
</template>

<script>
import {instance,instance2} from "@/utils/http"
import Swiper from "@/components/Swiper"
import axios from "axios";
import Vue from 'vue';
/* 搜索 */
import { Search } from 'vant';
Vue.use(Search);
/* 宫格 */
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);

export default {
    components:{
        Swiper
    },
    data(){
        return{
            searchval:"",
            bannerList:[],
            grids:{},
            imgt:'',
        }
    },
    methods:{
        onFocus(){
            this.$router.push('/classify')
        },
        goCity(){
            this.$router.push("/city")
        }
    },
    created(){
        axios({
            url:"./json/banner.json",
            method:"get",        
        }).then(res=>{
            this.bannerList = res.data
        })

        axios({
            url:"./json/main.json",
            method:"get",
            
        }).then(res=>{
            this.grids =res.data.Data.templateComponentList[0].navComponentList
            this.imgt =res.data.Data.templateComponentList[0].adPictures[0].pictureUrl
        
        })
    
       
        
    }
}
</script>


<style lang="scss" scoped>
    .header{
        height: 0.4rem;
        width: 100%;
        display: flex;
        .left{
            height: 0.4rem;
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(79, 192, 141);
        };
        .right {
            height: 0.4rem;
            width: 85%;
             .van-search{
                height: 0.4rem;
            }
        }
    }
    .swiper-slide{
        img{
          width: 100%;
        }
    }
    .first-screen-ad{
        img{
            width: 100%;
        }
    }
</style>