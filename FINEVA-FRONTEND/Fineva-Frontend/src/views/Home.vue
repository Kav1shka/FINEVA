<script>
import store from "../store";

export default {
  methods: {
    toggleDriver() {
      document.getElementById("driver").src = "../../src/assets/image/d2.png";
      var user_state = "DRIVER";
      store.dispatch("setUserState", user_state);
      this.$router.push('./signIn');
    },
    togglePolice() {
      document.getElementById("police").src = "../../src/assets/image/p2.png";
      var user_state = "POLICE";
      store.dispatch("setUserState", user_state);

      this.$router.push('./signIn');
    },
  },
  mounted() {},
};
</script>
<template>
  <div
    className="hero min-h-screen relative bg-mblue bg-[url('../../src/assets/image/22.png')]"
  >
    <div className="hero-overlay bg-opacity-70"></div>
    <div class="mx-8 items-center lg:flex-col">
      <div
        class="animate-fade-right animate-duration-[1000ms] animate-ease-in animate-normal animate-fill-both lg:absolute lg:left-[150px] lg:top-[185px] lg:w-[30rem]"
      >
        <div class="text-center text-[60px] lg:text-[85px] xl:text-[108px] font-playfair">
          <span class="text-wt">FINEV</span><span class="text-ylv">A</span>
        </div>
        <span class="text-wt text-center lg:w-[30rem]">
          Add a little bit of body texAdd a little bit of body textAdd a little bit of
          body textAdd a little bit of body textAdd a little bit of body textAdd a little
          bit of body textAdd a little bit of body textAdd a
        </span>
      </div>
      <br /><br />
      <div
        class="animate-fade-left animate-duration-[1000ms] animate-ease-in animate-normal animate-fill-both lg:absolute lg:right-[150px] lg:top-[200px] xl:right-[150px] xl:top-[220px] grid justify-items-center"
      >
        <span class="text-ylv lg:text-lg italic text-center">SELECT YOUR MODE TO</span>
        <span class="block text-wt text-4xl font-bold">CONTINUE!</span>

        <br />
        <div
          class="focus:outline-none focus:shadow-outline overflow-hidden w-[175px] h-full md:w-[200px] lg:w-[225px] xl:w-[225px] bg-ylv rounded-full border-solid border-[4px] border-wt"
        >
          <div class="flex justify-between m-1">
            <img
              class="animate-fade animate-duration-[2000ms] animate-ease-in animate-normal hover:scale-110 transition ease-in-out delay-100 w-[55px] h-[55px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[85] xl:h-auto rounded-full"
              @click="toggleDriver()"
              id="driver"
              src="../assets/image/driver.png"
            />
            <img
              class="animate-fade animate-duration-[2000ms] animate-ease-in animate-normal hover:scale-110 transition ease-in-out delay-100 w-[55px] h-[55px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[85] xl:h-[85] rounded-full"
              @click="togglePolice()"
              id="police"

              src="../assets/image/police.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#police:active {
}
</style>

