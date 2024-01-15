import axios from "axios"



export default class MainPageModel{
    //veriyi alan metot
   static async getCoins(page){
    const options ={
        params:{
            limit:"15",
            offset: (page -1) * 15, //kaç tane veri atlanacak
        }
    }
    try{
        const res = await axios.get ('https://api.coincap.io/v2/assets',options)

        return res.data.data
    } catch (err){
        console.log(err)

    }
    }
}

