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
    <div class="mt-6 items-center lg:flex-col">
      <div class="lg:absolute lg:left-[60px] lg:top-[85px] lg:w-[40rem]">
        <div class="text-center text-[85px] lg:text-[85px] xl:text-[80px]" style="font-family: 'Times New Roman', Times, serif;">
          <span class="text-wt">WELCOME</span><span class="text-ylv">!</span>
        </div>

        <div>
            <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm font-semibold leading-6 text-white-900">License Number</label>
          <div class="mt-2.5">
            <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-white-900">Password</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        
        
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch v-model="agreed" :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-white-600">
            By selecting this, you agree to our
            {{ ' ' }}
            <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
      </div>
    </form>
  </div>

       
      </div>
      <br /><br />
      <div class="lg:absolute lg:right-[150px] lg:top-[85px] lg:w-[30rem]">
        <div class="text-center text-[85px] lg:text-[85px] xl:text-[110px]" style="font-family: 'Times New Roman', Times, serif;">
          <span class="text-wt font-bold">FINEV</span><span class="text-ylv font-bold">A</span>

          <div class="text-center text-[35px] lg:text-[35px] xl:text-[30px]">
          <span class="text-wt italic text-justify">P   O   L    I   C   E</span>
        </div>

        </div>
        <span class="text-justify indent-">
            <br>
          <p text-justify>
         <b>FINEVA</b> is an innovative solution that revolutionizes traffic violations and license management. 
          It simplifies the process of paying fines and retrieving licenses, saving drivers time and effort.
          <b>FINEVA</b> provides a convenient online platform for secure fine settlement, eliminating the need for 
           physical visits to police stations. It also offers police officers instant access to license verification, 
           allowing them to check driver's license validity using their License Number. This simplifies the burden of 
           traditional procedures, promoting a seamless and user-friendly experience for both drivers and police officers.
          </p>  </span>
      </div>
    </div>
  </div>
</template>
<style></style>
