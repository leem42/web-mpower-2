<template>
  <v-app>
  
    <nav class="navbar fixed-top navbar-light">
      <div class="container-fluid" style="display: block;">
          <!--<br class="d-sm-none">-->
        <div class="row">
          <div class="text-center col-md-2">
            <span class="darkPurple pr-sm-5 mediumTitle"> mPower  </span>
          </div>
          <div clas="col-sm-8 text-center mr-0 ml-0 pl-0 pr-0">
            <v-btn flat class="mr-0 ml-0 pl-0 pr-0">
              <router-link class="text-capitalize default medium" to="/NullPage/Website/YourStory">Your Story </router-link>
            </v-btn>
            <v-btn flat class="mr-0 ml-0 pl-0 pr-0">
              <router-link class="text-capitalize  default medium" to="/NullPage/Website/About" >About</router-link>
            </v-btn>
            <v-btn flat class="mr-0 ml-0 pl-0 pr-0" >
              <router-link class="text-capitalize  default medium" to="/NullPage/Website/Team" >Team</router-link>
            </v-btn>
            </div>
            <v-btn class="d-none ml-auto d-sm-inline col-1 medium navyBlue text-capitalize white--text"> Join </v-btn>
        </div>

      </div>  
      </div>
    </nav>
  
    <router-view class="router container-fluid"></router-view>

    <nav class="navbar fixed-bottom ">
      <div class="row">
        <v-btn class="col-1 tiny ml-2 mr-2 pl-4 pr-4 white--text" flat> 2017 mPower </v-btn>
        <v-btn class="col-1 tiny ml-2 mr-4 pl-4 pr-4 white--text" flat> Privacy Policy </v-btn>
        <v-btn class="col-1 tiny ml-2 mr-2 pl-4 pr-4 white--text" flat> Terms of service </v-btn>
        <v-btn class="col-1 tiny ml-0 mr-0 pl-0 pr-0 white--text" flat> FAQ </v-btn>
        <v-btn class="col-1 tiny ml-2 mr-5 pl-0 pr-5 white--text" flat> Contact </v-btn>
        <span class="tiny pt-3">mPower is for research use only and does not provide medical advice, diagnosis or treatment.</span>
      </div>
    </nav>


  </v-app>
</template>


<style lang="scss">
  @import '../css/bootstrap/bootstrap';
   


  nav {
    z-index: 1000 !important;
    background-color: white;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    box-shadow: 0 2px 3px 0 rgba(141, 141, 141, 0.5);
    &.fixed-bottom {
       background-image: linear-gradient(to left, #6b2ef7, #2a067d) !important;
       color: white;
       height: 60px;
    }
  }
  
  .tiny {
    font-size: $font-size-base * 0.4 !important;
  }

  body * {
    font-family: 'Roboto' !important;
  }

  .medium {
    font-size: $font-size-base * 0.7 !important;
  }

  .darkPurple {
      color: #5b34b6;
  }

  @media(max-width: 767px) {

    .mediumTitle {
      font-size: $font-size-base * 0.7 !important;
    }
    .medium {
      font-size: $font-size-base * 0.4 !important;
    }
  }
  .default {
    color: #3b4a63;
  }

  .navyBlue {
      background-color: #3a539b !important;
  }


</style>
