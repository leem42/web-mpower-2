<template>
  <v-app>
  
    <!--<v-icon dark class="intercom d-print-md-none" medium >fa-comment</v-icon>
      <v-icon dark class="intercom hideOnSmall" x-large>fa-comment</v-icon>-->
    <v-btn class="darkPurple text--normal mb-0 pb-0 helpButton hideOnSmall"> Have a question for us? </v-btn>
  
    <nav class="onboarding navbar navbar-fixed-top navbar-light pt-0 pb-0">
      <div class="container-fluid" style="display: block;">
        <div class="row">
  
          <div class="col-6 pl-1 mx-auto text-center text-sm-left col-sm-4">
            <p class="lead light mediumTitle   white--text" v-bind:class="{medium: $router.currentRoute.fullPath.includes('Question')}">
               {{getHeader()}}
           </p>
            <span v-if="$router.currentRoute.fullPath === '/NullPage/OnBoarding/WhyInterested'" class="lead light mediumTitle  white--text"> Eligibility
            </span>
          </div>
          <div class="text-center d-sm-none col-6">
            <span id="help" class="d-sm-none white--text lead headerText light tiny"> Need Help? </span>
          </div>

          <div class="col-sm-8 text-center text-sm-right">
            <img src="../../images/check.png" class="img-fluid check" alt="image of a check marked circle"></img>
            <!--<img src="./images/survey.svg" ></img>-->
            <v-icon large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon medium class="d-md-none mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
            <v-icon medium class="d-md-none mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
            <v-icon medium class="d-md-none mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
            <v-icon medium class="d-md-none mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
          </div>
  
        </div>
      </div>
    </nav>
    <router-view class="router container-fluid"></router-view>
    <!--- TODO: must update to make sure application is only single page -->
    <!--<v-bottom-nav value="true" class="hideOnSmall darkBlue customAlign">
      <img class="logo" src="./images/mpower-logo.png"> </img>
      <span class="pt-3 pt-sm-2 francisco white--text">mPower</span>
      <v-btn id="question">
        <v-icon large class="white--text">fa-question-circle</v-icon>
      </v-btn>
    </v-bottom-nav>-->
  
    
  </v-app>
</template>

<style lang="scss">
@import '../../css/bootstrap/bootstrap';
@import '../../css/bootstrap/custom';
</style>

<script>
  export default {
    // Here we get the correct placement text when switching between pages
    methods: {
      getHeader () {
        var path = '/NullPage/OnBoarding/'
        var route = this.$router.currentRoute.fullPath
        console.log(path)
        console.log(route)
        if (route === (path + 'OverviewEligibility')) {
          return 'Overview'
        } else if (route === (path + 'Eligibility') || route === (path + 'SubjectInterest')) {
          return 'Eligibility'
        } else if (route.indexOf('Question') !== -1) {
          return 'Test your knowledge'
        }
      }
    }
  }
</script>
