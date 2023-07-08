<script>
import store from "../store/index";
export default {
    data(){
        return{
            userState:"",
        };
    },
    methods:{

    },
    mounted() {
        this.userState = store.state.userState;
            console.log("this: ",this.userState);
            console.log("store : ",store.state.userState);
        },
}
</script>
<template>
    
</template>