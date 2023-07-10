<script>
import { watchIgnorable } from "@vueuse/core";
import store from "../store";
export default {
  
  methods: {
    toggleDriver(){
      document.getElementById("driver").src="../../src/assets/image/d2.png"
      var user_state = "Driver";
      store.dispatch('setUserState',user_state);
      this.$router.push('./signIn');
    },
    togglePolice(){
      document.getElementById("police").src="../../src/assets/image/p2.png"
      var user_state = "Police"
      store.dispatch('setUserState',user_state);
      this.$router.push('./signIn');
    },
   
    
  },
};
</script>
<template>
    
  <div className="hero min-h-screen relative bg-mblue bg-[url('../../src/assets/image/BG.png')]">
  <!-- <div className="hero-overlay bg-opacity-70"></div> -->
    <div class="mt-6 items-center">
      <div class="lg:absolute lg:left-[80px] lg:top-[155px] lg:w-[40rem]">
        <div class="text-center text-[85px] lg:text-[85px] xl:text-[80px]" style="font-family: 'Times New Roman', Times, serif;">
          <span class="text-wt">WELCOME</span><span class="text-ylv">!</span>
        </div>

        <div>
            <form action="#" method="POST" class="text-center flex flex-col justify-center items-center mx-auto mt-16 max-w-xl sm:mt-4">
      <div class>
        <div class>
          <label for="company" class="block text-sm font-semibold leading-6 text-white-900">License Number</label>
          <div class="mt-2.5">
            <input type="text" name="lnum" id="lnum" autocomplete="" class="block w-full bg-white rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <br>
        <div class="sm:col-span-2">
          <label for="text" class="block text-sm font-semibold leading-6 text-white-900">Password</label>
          <div class="mt-2.5">
            <input type="password" name="dPswd" id="dPswd" autocomplete="" class="block w-full rounded-full bg-white border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        
        <br>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <!-- <div class="flex h-6 items-center">
            <Switch v-model="agreed" :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
            </Switch>
          </div> -->
          <SwitchLabel class="text-sm leading-6 text-white-600">
            Haven't Registered yet? Click Here to 
            {{ ' ' }}
            <a href="#" class="font-semibold text-indigo-600">Sign&nbsp;Up</a>.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <br>
      <div class="mt-0">
        <button type="submit" class="rounded-full bg-ylv px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign In</button>
      </div>
    </form>
  </div>

       
      </div>
      <br /><br />
      <div class="lg:absolute lg:right-[150px] lg:top-[135px] lg:w-[30rem]">
        <div class="text-center text-[85px] lg:text-[85px] xl:text-[110px]" style="font-family: 'Times New Roman', Times, serif;">
          <span class="text-wt font-bold">FINEV</span><span class="text-ylv font-bold">A</span>

          <div class="text-center text-[35px] lg:text-[35px] xl:text-[30px]">
          <span class="text-wt italic text-justify">D   R   I   V   E   R</span>
        </div>

        </div>
        <span class="text-justify indent-">
            <br>
          <p text-justify>
            In the context of the <b>FINEVA</b> app, the driver role pertains to individuals who are responsible 
            for transporting goods or providing transportation services. As a driver using the <b>FINEVA</b> app, 
            you gain access to a range of features that streamline your workflow and improve your overall 
            efficiency. This includes features such as real-time route optimization, delivery tracking, 
            digital documentation management, and communication tools. With the <b>FINEVA</b> app, drivers 
            can enhance their productivity, ensure timely deliveries, and provide a seamless transportation 
            experience for their clients or customers.
          </p>  </span>
      </div>
    </div>
  </div>
</template>
<style></style>
