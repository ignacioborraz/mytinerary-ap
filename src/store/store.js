import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";

export default configureStore({
    reducer: {
        cities: city_reducer,
        //itineraries: { itineraries: []},
        //users: { users: [] }
    }
})