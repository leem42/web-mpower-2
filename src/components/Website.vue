<template>
  <v-app>
  
    <nav class="web navbar fixed-top navbar-light">
      <div class="container-fluid" style="display: block;">
        <div class="row">
          <div class="text-center col-md-2">
            <span class="darkPurpleText pr-sm-5 medium"> mPower  </span>
          </div>
          <div clas="col-sm-8 text-center mr-0 ml-0 pl-0 pr-0">
            <v-btn  v-on:click="go(0)" flat class="mr-0 ml-0 pl-0 pr-0">
              <router-link class="text-capitalize default medium" to="./NullPage/Website/About">Your Story </router-link>
            </v-btn>
            <v-btn v-on:click="go(1)" flat class="mr-0 ml-0 pl-0 pr-0">
              <router-link class="text-capitalize  default medium" to="NullPage/Website/About" >About</router-link>
            </v-btn>
            <v-btn v-on:click="go(2)" flat class="mr-0 ml-0 pl-0 pr-0" >
              <router-link class="text-capitalize  default medium" to="/NullPage/Website/Team" >Team</router-link>
            </v-btn>
            </div>
            <v-btn v-on:click="go(3)" class="d-none ml-auto d-sm-inline col-1 medium navyBlue text-capitalize white--text"> Join </v-btn>
        </div>

      </div>  
      </div>
    </nav>
  
    <router-view class="router container-fluid"></router-view>

    <nav class="web navbar fixed-bottom">
      <div class="row mx-md-auto">
        <v-btn flat class="col-2 zeroOpacity col-md-2 tiny mr-md-1 ml-md-1 white--text"> 2017 mPower </v-btn>
        <v-btn flat class="col-1 zeroOpacity tiny mr-md-1 ml-md-1 white--text"> FAQ </v-btn>
        <v-btn flat class="col-3 zeroOpacity col-md-2 tiny  mr-md-1 ml-md-1 white--text"> Privacy Policy </v-btn>
        <v-btn flat class="col-4 zeroOpacity col-md-2 tiny mr-md-1 ml-md-1 white--text"> Terms of service </v-btn>
        <v-btn flat class="col-1 zeroOpacity tiny mr-md-1 ml-md-1 white--text"> Contact </v-btn>
        <span class="col-3 x-tiny">mPower is for research use only and does not provide medical advice, diagnosis or treatment.</span>
      </div>
    </nav>


  </v-app>
</template>

<script>

export default {
  methods: {
    go (index) {
      if (index === 0) {
        this.$router.push({name: 'YourStory'})
      } else if (index === 1) {
        this.$router.push({name: 'Team'})
      } else if (index === 2) {
        this.$router.push({name: 'About'})
      } else {
        this.$router.push({name: 'SubjectInterest'})
      }
    }
  }
}
</script>

<style lang="scss">
@import '../css/bootstrap/bootstrap';
@import '../css/bootstrap/custom';
</style>
