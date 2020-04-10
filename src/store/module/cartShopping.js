const module = {
    namespaced: true,
    state: {
        cartArr:[{
            token:1231,
            arr:[{
                PicUrl:'https://img12.yiguoimg.com/d/items/2020/200320/9288740138330228_300.jpg',
                CommodityName:'以色列西柚4个约290g/个',
                OriginalPrice:28,
                CommodityAmount:2,
                checked:true
            }]
        }]
    },
    mutations:{
        addCartArr(state,obj){
            if(state.cartArr.find(v=>v.token===obj.token)){
                state.cartArr.find(v=>v.token===obj.token).arr.push({
                    PicUrl:obj.obj.PicUrl,
                    CommodityName:obj.obj.CommodityName,
                    OriginalPrice:obj.obj.OriginalPrice,
                    CommodityAmount:obj.obj.CommodityAmount,
                    checked:true
                })
            }else{
                cartArr.push({
                    token:obj.token,
                    arr:{
                        PicUrl:obj.obj.PicUrl,
                        CommodityName:obj.obj.CommodityName,
                        OriginalPrice:obj.obj.OriginalPrice,
                        CommodityAmount:obj.obj.CommodityAmount,
                        checked:true
                    }
                })
            }
        }
    },
    getters:{
        getCartArr(state){
            return state.cartArr
        }
    }
}
export default module