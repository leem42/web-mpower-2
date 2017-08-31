<template>
  <v-app>
  
    <!--<v-icon dark class="intercom d-print-md-none" medium >fa-comment</v-icon>
      <v-icon dark class="intercom hideOnSmall" x-large>fa-comment</v-icon>-->
    <v-btn class="darkPurple text-lowercase helpButton hideOnSmall"> Have a question for us? </v-btn>
  
    <nav class="onboarding navbar navbar-fixed-top navbar-light pt-0 pb-0">
      <div class="container-fluid" style="display: block;">
        <div class="row">
  
          <div class="col-6 pl-1 text-center text-sm-left col-sm-4">
            <span class="lead light tiny white--text headerText"> Eligibility
            </span>
          </div>
          <div class="text-center d-sm-none col-6">
            <span id="help" class="d-sm-none white--text lead headerText light tiny"> Need Help? </span>
          </div>

          <div class="col-sm-8 text-center text-sm-right">
            <img src="../images/check.png" class="img-fluid check" alt="image of a check marked circle"></img>
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
    <br>
    <br>
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
@import '../css/bootstrap/bootstrap';
@import '../css/bootstrap/custom';
</style>
