import { useEffect, useState } from "react"
import MainPageView from "../views/MainPageView"
import Model from "../models/MainPageModel"


const MainPageController =()=>{
    const [coins, setCoins]= useState([])
    const [page, setPage]=useState(1)
    useEffect(()=>{
       Model.getCoins(page).then((data)=>setCoins(coins.concat(data)))
    },[page])
    
   
    return <MainPageView coins={coins} setPage={setPage}  />
}
export default MainPageController