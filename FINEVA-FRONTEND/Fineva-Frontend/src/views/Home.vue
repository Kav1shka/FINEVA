<script>
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {
  
  methods: {
    toggleDriver(){
      document.getElementById("driver").src="../../src/assets/image/d2.png"
      var user_state = "Driver";
      store.dispatch('setUserState',user_state);
      this.$router.push('./driverSignIn');
    },
    togglePolice(){
      document.getElementById("police").src="../../src/assets/image/p2.png"
      var user_state = "Police"
      store.dispatch('setUserState',user_state);
      this.$router.push('./policeSignIn');
    },
   
    
  },
};
</script>
<template>
  <div className="hero min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')]">
  <!-- <div className="hero-overlay bg-opacity-70"></div> -->
    <div class="mt-6 items-center lg:flex-col">
      <div class="lg:absolute lg:left-[150px] lg:top-[135px] lg:w-[40rem]">
        <div class="text-center text-[85px] lg:text-[85px] xl:text-[180px] font-bold" style="font-family: 'Times New Roman', Times, serif;">
          <span class="text-wt">FINEV</span><span class="text-ylv">A</span>
        </div>
        <span class="text-justify indent-8">
          <p text-justify>
         <b>FINEVA</b> is an innovative solution that revolutionizes traffic violations and license management. 
          It simplifies the process of paying fines and retrieving licenses, saving drivers time and effort.
          <b>FINEVA</b> provides a convenient online platform for secure fine settlement, eliminating the need for 
           physical visits to police stations. It also offers police officers instant access to license verification, 
           allowing them to check driver's license validity using their License Number. This simplifies the burden of 
           traditional procedures, promoting a seamless and user-friendly experience for both drivers and police officers.
          </p>  </span>
      </div>
      <br /><br />
      <div
        class="lg:absolute lg:right-[150px] lg:top-[200px] xl:right-[200px] xl:top-[280px] grid justify-items-center"
      >
        <span class="text-ylv text-[30px] italic">SELECT YOUR MODE TO</span>
        <span class="block text-wt text-[50px] font-bold">CONTINUE!</span>

        <br />
        <div
          class="overflow-hidden w-[175px] h-[55px] md:w-[200px] md:h-[65px] lg:w-[225px] lg:h-[75px] xl:w-[225px] xl:h-[85] bg-ylv rounded-full border-solid border-[0px] border-wt drop-shadow-2xl"
        >
          <div class="flex justify-between">
            <img
              class="w-[55px] h-[55px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[85] xl:h-[85] rounded-full" @click="toggleDriver()" id="driver"
              src="../assets/image/driver.png"
            />
            <img
              class="w-[55px] h-[55px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[85] xl:h-[85] rounded-full " @click="togglePolice()" id="police"
              src="../assets/image/police.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
