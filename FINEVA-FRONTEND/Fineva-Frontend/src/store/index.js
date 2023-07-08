import { createStore } from "vuex";

const store = createStore({
    state:{
        userState: "user",
    },
    mutations:{
        userState_Change(state, userState){
            state.userState = userState;
        },
    },
    actions:{
        setUserState({commit},user_state){
            commit("userState_Change",user_state);
        },
        
    },
})

export default store;