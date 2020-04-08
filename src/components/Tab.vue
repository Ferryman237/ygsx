<template>
    <div class="tab">
        <nav>
            <ul>
                    <router-link
                        v-for="data in tabList"
                        :key="data.id"
                        :to="data.path"
                        tag="li"
                        active-class="active"
                    > <i class="iconfont" :class="data.icon"></i> <p>{{data.title}}</p></router-link>
                   
            </ul>
        </nav>

     
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabList:[
                {id:1,title:"首页",path:"/",icon:"icon-smile"},
                {id:2,title:"分类",path:"/classify",icon:"icon-viewgallery"},
                {id:3,title:"购物车",path:"/shopping",icon:"icon-cart"},
                {id:4,title:"我的",path:"/center",icon:"icon-account"},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
 .active{
        color: greenyellow;
 }
    ul{
        height: 50px;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        li{
            flex-direction: column;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                font-size: 12px;
            }
        }
    }
</style>