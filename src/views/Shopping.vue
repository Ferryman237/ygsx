<template>
    <div>
        <ul class="shopping">
            <li 
                v-for="(data,index) in cartArr"
                :key="data.name">
                <van-checkbox v-model="data.checked" checked-color="green"></van-checkbox>
                <img :src="data.PicUrl" alt="">
                <div>
                    <h4>{{data.CommodityName}}</h4>
                    <p>￥{{data.OriginalPrice}}.00</p>
                </div>
                <div>
                    <i>删除</i>
                    <van-stepper v-model="data.CommodityAmount" class="geshu"/>
                </div>
            </li>
        </ul>
        <div class="jiesuan">
            <van-checkbox v-model="checked" checked-color="green">全选</van-checkbox>
            <van-button type="primary" class="button">去结算({{zshu}})</van-button>
            <p @click=" addCartArr({obj,token})">合计:￥{{zjia}}.00</p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios"
import {instance,instance2} from "@/utils/http"
import { Checkbox, CheckboxGroup ,Stepper ,Button } from 'vant'
import {mapGetters,mapMutations} from "vuex"
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Stepper)
Vue.use(Button)
export default {
    data(){
        return {
            checked:true,
            token:1231,
            obj:{
                PicUrl:'https://img12.yiguoimg.com/d/items/2020/200320/9288740138330228_300.jpg',
                CommodityName:'以色列西柚4个约290g/个',
                OriginalPrice:28,
                CommodityAmount:2,
            }
        }
    },
    computed:{
        zshu() {
            let a =0
            for(let i=0;i<this.cartArr.length;i++){
                a += this.cartArr[i].CommodityAmount
            }
            return a
        },
        zjia(){
            let a =0
            for(let i=0;i<this.cartArr.length;i++){
                a += this.cartArr[i].CommodityAmount*this.cartArr[i].OriginalPrice
            }
            return a
        },
        ...mapGetters("cartShop",["getCartArr"]),
        cartArr(){
            if(this.getCartArr.find(v=>v.token===this.token)){
                return this.getCartArr.find(v=>v.token===this.token).arr
            }else{
                return false
            }
        }
    },
    methods:{
        ...mapMutations('cartShop',["addCartArr"]),
    }
}
</script>

<style lang="scss" scoped>
    .shopping{
        padding: 15px 0;
        background: #ddd;
        height: 567px;
        overflow: auto;
        li{
            width: 100%;
            height: 100px;
            background: #fff;
            border-bottom:1px #aaa solid;
            padding: 0 10px;
            img{
                height: 82px;
                float: left;
                margin-top: 9px;
            }
            >div{
                float: left;
                height: 100px;
                position: relative;
                .geshu{
                    margin-top: 60px;
                }
                i{
                    position: absolute;
                    top: 20px;
                    right: 0px;
                }
            }
            h4{
                height: 50px;
                margin: 10px 10px;
                font-size: 12px;
                font-weight: normal;
                color: #333;
            }
            p{
                color: red;
                margin: 0 10px;
                font-size: 12px;
            }
        }
    }
    .jiesuan{
        width: 100%;
        height: 50px;
        div{
            height: 50px;
            float: left;
        }
        .button{
            float: right;
        }
        p{
            float:right;
            margin-top: 20px;
            font-size: 14px;
        }
    }
</style>