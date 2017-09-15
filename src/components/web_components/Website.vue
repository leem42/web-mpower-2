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

            <div class="col-2 col-sm-auto ml-2 mr-2 pl-2 ml-md-auto">
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
      <div class="row" style="height: inherit; width: 100%;"  >
        <div class="col-md-9 pr-0 pl-0 centerVertical">
          <div class="row">
            <v-btn id="mPower" flat :ripple="false" class="mb-0 mt-0  mb-sm-auto mt-sm-auto col-12 col-sm-1 zeroOpacity  minWidthReset text--normal text-left-force tiny mr-0 ml-0 ml-lg-3 pl-2 pr-0 white--text"> 2017 mPower</v-btn> 
            <v-btn :to="{name: 'FAQ'}" flat class="col-2 zeroOpacity  minWidthReset ml-md-5 mr-0 pl-0 pr-0 white--text"> FAQ </v-btn> 
            <span  class="centerVertical"> | </span>
            <v-btn :to="{name: 'Privacy'}" flat class="col-3 col-sm-2 zeroOpacity  minWidthReset mr-md-3 ml-md-3 ml-0 mr-0 pl-0 pr-0 white--text"> Privacy Policy</v-btn> 
            <span class="centerVertical"> | </span>
            <v-btn flat class="zeroOpacity  minWidthReset col-3 col-sm-2 pl-0 pr-0 ml-md-3 mr-md-3 white--text"> Terms of service </v-btn>
            <span class="centerVertical"> | </span>
            <v-btn :to="{name: 'Contact'}" flat class="col-2 zeroOpacity minWidthReset mr-md-0 ml-0 pl-0 white--text"> Contact </v-btn>
          </div>
        </div>
        <div class="col-md-3 ml-0 mr-0 pl-0 pr-0 centerVertical">
          <div class="row">
            <span class="col-12 x-tiny text-left ml-2 mr-2 mb-2 ">mPower is for research use only and does not provide medical advice, diagnosis or treatment.</span>
          </div>
        </div>
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

// #mPower > div.btn__content {
//   font-size: 12px !important;
// }

.minWidthReset {
  min-width: 0px !important;
}
.join {
  margin-right: 10px !important;
}

.text-left-force > div{
  justify-content: left !important;
}
.centerVertical {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
