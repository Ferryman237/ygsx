<template>
    <div class="productlist">
        productlist
    </div>
</template>
<script>
import axios from "axios"
export default {
    props:["id"],
    methods:{
        axiosList({data1,data2=4}){
            axios({
                url:"https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetSearchList?appName=3000025",
                method:"post",
                data:{
                    Body:{
                        CategoryCode: "",
                        CategoryId: data1,
                        Keyword: "",
                        PageIndex: 1,
                        Sort: data2
                    },
                    Head:{
                        CityCode: "128",
                        CityId: "a10524be-acea-451e-9280-df0514e11e2b",
                        DeviceId: "0951101603da996cca55b346b0a39efd",
                        DistrictId: "c9e2297f-a036-47bd-b822-2a946e4162d0",
                        LoginToken: "",
                        MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                        Token: ""
                    }
                }
            }).then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        console.log(this.id)
        this.axiosList({data1:this.id})
    }
}
</script>

<style lang="sass" scoped>

</style>