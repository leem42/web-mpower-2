<template>
  <v-app>
  
    <nav class="web navbar fixed-top navbar-light">
      <div class="container-fluid" style="display: block;">
        <div class="row">
          <div class="text-center col-sm-2">
            <span class="defaultBlue pr-sm-5 mediumTitle"> mPower  </span>
          </div>

            <div class="col-2 col-sm-auto ml-1 mr-2 p-0 ">
              <v-btn :to="{name: 'YourStory'}" flat class="routerBtn m-0 p-0 text-capitalize default mediumLarge">
                Your Story
              </v-btn>
            </div>

            <div class="col-2 col-sm-auto ml-4 mr-2 p-0 ">
              <v-btn :to="{name: 'About'}" flat class="routerBtn m-0 p-0 text-capitalize default mediumLarge">
                About
              </v-btn>
            </div>

            
            <div class="col-2 col-sm-auto ml-2 mr-2 p-0 ">
              <v-btn :to="{name: 'Team'}" flat class="routerBtn m-0 p-0 text-capitalize default mediumLarge" >
                Team
              </v-btn>
            </div>

            <div class="col-2 col-sm-auto ml-2 mr-2 pl-2">
              <v-btn :to="{name: 'OverviewEligibility'}" class="routerBtn join m-0 p-0 navyBlue text-capitalize white--text mediumLarge"> 
                Join 
              </v-btn>
            </div>

          </div>

        </div>

      </div>  
      </div>
    </nav>
  
    <router-view class="router container-fluid"></router-view>

    <nav class="web navbar fixed-bottom">
      <div class="row mx-md-auto">
        <v-btn flat class="col-2 zeroOpacity col-md-2 tiny mr-md-1 ml-md-1 white--text"> 2017 mPower </v-btn>
        <v-btn :to="{name: 'FAQ'}" flat class="col-1 zeroOpacity tiny mr-md-1 ml-md-1 white--text"> FAQ </v-btn>
        <v-btn :to="{name: 'Privacy'}" flat class="col-3 zeroOpacity col-md-2 tiny  mr-md-1 ml-md-1 white--text"> Privacy Policy </v-btn>
        <v-btn flat class="col-4 zeroOpacity ml-3 pl-2 col-md-2 tiny mr-md-1 ml-md-1 white--text"> Terms of service </v-btn>
        <v-btn :to="{name: 'Contact'}" flat class="col-1 zeroOpacity tiny mr-md-1 ml-md-1 white--text"> Contact </v-btn>
        <span class="col-md-3 x-tiny">mPower is for research use only and does not provide medical advice, diagnosis or treatment.</span>
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
        this.$router.push({name: 'About'})
      } else if (index === 2) {
        this.$router.push({name: 'Team'})
      } else {
        this.$router.push({name: 'SubjectInterest'})
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../css/bootstrap/bootstrap';
@import '../../css/bootstrap/custom';

.join {
  margin-right: 10px !important;
}

.scaledJoinButton {
  width: 2em;
  height: 2em;
}

.routerBtn > div.btn__content{
  padding: 0px;
}

.routerBtn:hover {
  // opacity: 0.7;
  border-bottom: solid;
  border-bottom-color: #ffda8a;
  font-weight: bold;
}

</style>
