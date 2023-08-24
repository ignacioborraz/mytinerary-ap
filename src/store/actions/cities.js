import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_carousel = createAsyncThunk(
    'read_carousel',    //nombre de la accion
    async()=> {         //callback que realiza la petición
        try {
            let data = await axios(apiUrl+'cities/carousel')
            //console.log(data);
            return { carousel: data.data.data_carousel }
        } catch (error) {
            console.log(error);
            return { carousel: [] }
        }
    }
)

const read_cities = createAsyncThunk(
    'read_cities',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'cities?city='+obj.text)
            console.log(data);
            return { cities: data.data.response }
        } catch (error) {
            console.log(error);
            return { cities: [] }
        }
    }
)

const read_city = createAsyncThunk(
    'read_city',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'cities/'+obj.id)
            console.log(data);
            return { city: data.data.response }
        } catch (error) {
            console.log(error);
            return { city: {} }
        }
    }
)

const city_actions = { read_carousel,read_cities,read_city }
export default city_actions
