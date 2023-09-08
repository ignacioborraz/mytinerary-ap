import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";
const { read_6_users,signin,signin_token,signout,update_user } = user_actions

const initial_state = {
    users: [],
    user: {},
    token: '',
    messages: []
}

const user_reducer = createReducer(
    initial_state,
    build=> build.addCase(
        read_6_users.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                users: action.payload.users
            }
            return new_state
        }
    ).addCase(
        signin.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signout.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        update_user.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user
            }
            return new_state
        }
    )
)

export default user_reducer