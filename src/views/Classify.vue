<template>
    <div class="classify">
        <div class="header">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                shape="round"
            >
                <template #action>
                     <div >搜索</div>
                </template>
            </van-search>
        </div>
        <div class="content">
            <div class="aside">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item 
                    v-for="data in dataList"
                    :key="data.CategoryId"
                    @click="isBool=data.CategoryId"
                    :title="data.CategoryName" />
                
                </van-sidebar>
            </div>
            <div class="main">
                <van-grid :column-num="3"
                    v-for="data in dataList"
                    :key="data.CategoryId"
                    v-if="isBool==data.CategoryId"
                >
                    <van-grid-item
                    v-for="val in data.Childs"
                    :key="val.CategoryId"
                    :icon="val.PictureUrl"
                    :text="val.CategoryName"
                    @click="product(val.CategoryId)"
                    />
                </van-grid>
               
            </div>

        </div>
    </div>
        
</template>
<script>
import axios from "axios"
/* 搜索导入 */
import { Search } from 'vant';
Vue.use(Search);


/* 侧边栏组件导入 */
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);

/* 宫格 */
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);

import {mapState,mapActions} from "vuex"

export default {
        data() {
            return {
                activeKey: 0,
                // dataList:[],
                value:"",
                isBool:"f0e0ca41-81ff-4c19-b16b-03ed2cbe541b"
            }
        }, 
        computed:{
             ...mapState("classify",["dataList"]),

        },
        methods:{
            product(data){
                this.$router.push({
                    name:"productlist",
                    params:{
                        id:data
                    }
                })
            },
            ...mapActions("classify",["asideAxios"])
        },
        mounted(){
            if(this.dataList.length>0){
           
           }else{
              this.asideAxios()
            }

        }
  
}
</script>

<style lang="scss" scoped>
.header {
    .van-search{
        height:0.45rem;
        border-bottom: 0.01rem solid #f4f4f4;
    }
}
.content{
    display: flex;
    .aside{
        .van-sidebar-item--select {
           border-color:green
        }
    }
    .main{
        flex: 1;
        position: relative;
        overflow-y: auto;
        
        .van-grid {
           position: absolute;
           top: 0;                
        }
        
    }

}
.active{
    display:block;
}
</style>