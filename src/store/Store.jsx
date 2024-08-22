import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from './slice/DashboardSlice';


const Store = configureStore({
    reducer:{
        dashboardData:dashboardSlice
    }
})


export default Store