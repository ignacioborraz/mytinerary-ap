import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_6_users = createAsyncThunk(
    'read_6_users',
    async()=> {
        try {
            let users = await axios(apiUrl+'users')
            console.log(users);
            return {
                users: users.data.response
            }
            
        } catch (error) {
            console.log(error);
            return {
                users: []
            }
        }
    }
)

const user_actions = { read_6_users }
export default user_actions