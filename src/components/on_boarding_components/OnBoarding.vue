<template>
  <v-app>
  
    <!--<v-icon dark class="intercom d-print-md-none" medium >fa-comment</v-icon>
      <v-icon dark class="intercom hideOnSmall" x-large>fa-comment</v-icon>-->
    <!-- <v-btn class="darkPurple text-lowercase helpButton hideOnSmall"> Have a question for us? </v-btn> -->
  
    <nav class="onboarding navbar navbar-fixed-top navbar-light pt-0 pb-0">
      <div class="container-fluid" style="display: block;">
        <div class="row">
  
          <div class="col-6 pl-1 mx-auto text-center text-sm-left col-sm-2">
            <span class="lead light tiny centerVertical   white--text" v-bind:class="{medium: $router.currentRoute.fullPath.includes('Question')}">
               {{getHeader()}}
           </span>
            <span v-if="$router.currentRoute.fullPath === '/NullPage/OnBoarding/WhyInterested'" class="lead light mediumTitle  white--text"> Eligibility
            </span>
          </div>

          <div class="text-center d-sm-none col-6">
            <span id="help" class="d-sm-none white--text lead headerText light tiny"> Need Help? </span>
          </div>

          <div class="col-sm-10 text-center text-sm-right">
            <img v-if="!requirements.hasCompletedEligibility" src="../../images/check.png" class="img-fluid check" alt="image of a check marked circle"></img>
            <img v-if="requirements.hasCompletedEligibility" src="../../images/check-completed.png" class="img-fluid check" alt="image of a check marked circle"></img>

            <v-icon v-if="!requirements.hasCompletedEligibility" large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon v-if="!requirements.hasCompletedEligibility"medium class="d-md-none d-inline-block mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
            <img class="extraSpacing" v-if="requirements.isOnConsent" src="../../images/step-7-consent-icon.png" ></img>
            <img  class="extraSpacing" v-if="requirements.hasCompletedConsent" src="../../images/check-completed.png" ></img>


            <v-icon v-if="!requirements.hasCompletedConsent" large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon v-if="!requirements.hasCompletedConsent"medium class="d-md-none d-inline-block mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
            <img  class="extraSpacing" v-if="requirements.isOnQuiz" src="../../images/quiz-onboarding-icon.png" ></img>
            <img  class="extraSpacing" v-if="requirements.hasCompletedQuiz" src="../../images/check-completed.png" ></img>

            <v-icon v-if="!requirements.hasCompletedQuiz" large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon v-if="!requirements.hasCompletedQuiz" medium class="d-md-none d-inline-block mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
            <img  class="extraSpacing" v-if="requirements.isOnSign" src="../../images/sign-header-icon.png" ></img>
            <img  class="extraSpacing" v-if="requirements.hasCompletedSign" src="../../images/check-completed.png" ></img>

            <v-icon v-if="!requirements.hasCompletedSign" large class="d-none d-md-inline-block mediumGray grey--text lighten-1 border">fa-lock</v-icon>
            <v-icon v-if="!requirements.hasCompletedSign" medium class="d-md-none d-inline-block mediumGray grey--text lighten-1 border small">fa-lock</v-icon>
            <img  class="extraSpacing" v-if="requirements.isOnRegistration" src="../../images/number-icon.png" ></img>
            <img  class="extraSpacing" v-if="requirements.hasCompletedRegistration" src="../../images/check-completed.png" ></img>

            <!-- <div class="seperator"> | </div> -->
            <img class="d-none d-md-inline-block helpOval" src="../../images/need-help-button.png" ></img>
            <img class="d-none d-sm-inline-block d-md-none helpOval" src="../../images/need-help-button.png" ></img>
            <!-- <div large class="d-none d-md-inline-block  helpOval"> Need Help? </div> -->
  


          </div>
  
        </div>
      </div>
    </nav>
    <router-view class="whiteBackground mt-custom router container-fluid" v-bind:class="{fadeBackground: getHeader() === 'Sign' || getHeader() === 'Welcome' || isOnRetake()}"></router-view>
    
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

.seperator {
  width: 2px;
  height: 86px;
  background-color: #e1f2df;
}

.mt-custom {
  padding-top: 120px;
}
.helpOval {
  height: 56px;
  border-radius: 28px !important;
  width: 120px !important;  
  margin-left: 15px !important;
}

.extraSpacing {
  margin-left: 25px !important;
}

  @media(max-width: 766px) { 
    .extraSpacing {
      margin-left: 6% !important;
    }
  }



</style>

<script>
  import {requirements} from '../../requirements/requirements'

  export default {
    // Here we get the correct placement text when switching between pages
    data () {
      return {
        requirements: requirements
      }
    },
    methods: {
      getHeader () {
        var route = this.$router.currentRoute.fullPath
        if (route.indexOf('OverviewEligibility') !== -1) {
          return 'Overview'
        } else if (route.indexOf('Eligibility') !== -1 || route.indexOf('SubjectInterest') !== -1) {
          return 'Eligibility'
        } else if (route.indexOf('Question') !== -1 || route.indexOf('RetakeQuiz') !== -1) {
          return 'Test your knowledge'
        } else if (route.indexOf('Consent') !== -1) {
          return 'Consent'
        } else if (route.indexOf('Sign') !== -1) {
          return 'Sign'
        } else if (route.indexOf('RegistrationLinkSent') !== -1) {
          return 'Welcome'
        }
      },
      isOnRetake () {
        var route = this.$router.currentRoute.fullPath
        if (route.indexOf('RetakeQuiz') !== -1) {
          return true
        }
      }
    }
  }
</script>
