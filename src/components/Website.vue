<template>
  <v-app>
  
    <nav class="navbar navbar-fixed-top navbar-light pt-0 pb-0">
      <div class="container-fluid" style="display: block;">
        <div class="row">
  
        <div class="col-10">
          <span class="darkPurple pr-5"> mPower  </span>
          <router-link class="default medium" to="/">Your Story</router-link>
          <router-link class="default medium" to="/About" >About</router-link>
          <router-link class="default medium" to="/Team" >Team</router-link>
        </div>
        <div class="col-2"> 
          <v-btn class="medium navyBlue text-capitalize text-right white--text"> Join </v-btn>
        </div>

      </div>  
      </div>
    </nav>
  
    <router-view class="router container-fluid"></router-view>

  </v-app>
</template>


<style lang="scss">
  @import '../css/bootstrap/bootstrap';
  body * {
    font-family: 'Roboto' !important;
  }

  nav {
    height: 100px;
    background-color: #ffffff;
    box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
  }
  .medium {
    font-size: $font-size-base * 0.7 !important;
  }

  .darkPurple {
      color: #5b34b6;
  }

  .default {
    color: #3b4a63;
  }

  .navyBlue {
      background-color: #3a539b !important;
  }


</style>
