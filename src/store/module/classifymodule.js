
import axios from "axios"

const module = {
    namespaced:true,
    state: {
        searchList:[],
        dataList:[]
      },
      mutations: {
        setSearch(state,data){
          state.searchList = data
        },
        setData(state,data){
            state.dataList = data
          }
      },
      getters:{
        getSearchData(state){
          let abb =  []
          state.searchList.forEach(item=>{ 
            abb.push(...item.Childs)
          })
          return abb
    
        }
      },
      actions: {
          asideAxios(store){
              axios({
                method: 'post',
                  url: 'https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetAllCategory?appName=3000025',
                  data: {
                    
                        Head:{
                            CityCode: "128",
                            CityId: "a10524be-acea-451e-9280-df0514e11e2b",
                            DeviceId: "0951101603da996cca55b346b0a39efd",
                            DistrictId: "c9e2297f-a036-47bd-b822-2a946e4162d0",
                            LoginToken: "",
                            MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) ,AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                            Token: ""
                        }                                            
                }
    
            }).then(res=>{
                store.commit("setSearch",res.data.Data.CategoryList)
                store.commit("setData",res.data.Data.CategoryList)
               
            })
    
          }
      }
}

export default module