<script>
import store from "../store/index";
export default {
  data() {
    return {
      userState: "",
      idLabel: "",
      email:"",
      password:"",
    };
  },
  methods: {
    getIDtype(userState) {
      if (userState == "POLICE") {
        this.idLabel = "Service Id";
        console.log(this.idLabel);
      } else if (userState == "DRIVER") {
        this.idLabel = "License Number";
        console.log(this.idLabel);
      }
    },
    navReg(){
        if(this.userState =="POLICE"){
            this.$router.push("/policeReg");
        }else{
            this.$router.push("/driverReg");
        }
    },
  },
  mounted() {
    this.userState = store.state.userState;
    console.log("this: ", this.userState);
    console.log("store : ", store.state.userState);
    this.getIDtype(this.userState);
  },
};
</script>
<template>
  <div class="bg-mblue h-screen relative">
    <div class="lg:grid lg:grid-cols-2 mx-4">
      <div>
        <!-- welcome note-->
        <div
          class="text-center text-[30px] lg:text-[60px] xl:text-[70px] font-playfair lg:relative lg:top-[150px] grid justify-items-center"
        >
          <div><span class="text-wt">WELCOME</span><span class="text-ylv">!</span></div>
        </div>
        <!-- Form Tag -->
        <div class="">
          <form @submit.prevent="submitForm">
            <div
              class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-20"
            >
              <div class="card-body">
                <div class="form-control">
                  <input
                    type="text"
                    :placeholder="idLabel"
                    class="input input-bordered rounded-full"
                    required
                    v-model="email"
                  />
                </div>
                <br />
                <div class="form-control my-2">
                  <input
                    type="password"
                    placeholder="password"
                    class="input input-bordered rounded-full"
                    required
                    v-model="password"
                  />
                </div>
                <button class="form-control flex items-center">
                  <div
                    class="border-solid border-[3px] border-ylv rounded-full text-center w-full text-ylv hover:scale-110 transition ease-in-out delay-100"
                    type="submit"
                  >
                    SIGN IN
                  </div>
                </button>
                <div
                  class="text-center font-sans"
                >
                  <div>
                    <span class="text-wt font-thin">DON'T HAVE AN ACCOUNT? </span><span class="text-wt font-bold hover:text-ylv" @click="navReg()">SIGN UP</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!--FINVA Name-->
      <div class="">
        <div
          class="text-center text-[30px] lg:text-[75px] xl:text-[88px] font-playfair grid"
        >
          <div><span class="text-wt">FINEV</span><span class="text-ylv">A</span></div>
          <span class="text-wt text-[20px] font-sans text-ylv">{{ userState }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
