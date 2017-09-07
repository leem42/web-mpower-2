<template>
    <v-app class="fadeBackground ">
        <br>
        <br>
        <br>
        <div class="row">
            <p class="mx-auto white--text"> Hello, </p>
        </div>

        <div class="row text-center mb-2">
            <p class="col-md-8 mx-auto  medium white--text">
                In the study we will measure quality of life by looking at health and well-being. 
                We will ask you to answer a short survey once a day.
                Once a week there will be a longer survey and a few quick activities.
            </p>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1 ml-1 mr-1">
            <div class="mx-auto rect white col-md-8" v-bind:class="{currentSection: section.isOnEligibility}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5">
                        <img  src="../assets/check.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-md-8 col-7 mb-0 pr-0">
                        <p class="medium default mb-0 bold--text"><strong>  Eligibility </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText"> Let’s see if you are eligible for the Parkinsons Disease study. </p>
                            <p class="x-tiny default"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-btn flat class="ml-0 pl-0 mr-5 pr-4"  :to="{name: 'WhyInterested'}" >
                            <v-icon large v-bind:class="{greenText: section.hasCompletedEligibility}" class="lock">{{section.hasCompletedEligibility ? 'fa-chevron-right': 'fa-lock'  }}</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect white col-md-8" v-bind:class="{currentSection: section.isOnConsent, completedSection: section.hasCompletedConsent}">
                <div class="row">
                    <div class="col-1 verticalCenter  ml-md-3 pl-0 pl-sm-auto mr-5">
                        <img  src="../images/consent-icon.png"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0 bold--text"><strong>  Consent </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText"> Learn about the study and the risks and benefits of joining. </p>
                            <p class="x-tiny default"> 5 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedConsent}" class="lock">{{section.hasCompletedConsent ? 'check': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect white col-md-8" v-bind:class="{currentSection: section.isOnQuiz, completedSection: section.hasCompletedQuiz}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../images/quiz-onboarding-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0 bold--text"><strong>  Quiz </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText"> Let’s see what you have learned from the consent document. </p>
                            <p class="x-tiny default"> 5 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedQuiz}" class="lock">{{section.hasCompletedQuiz ? 'check': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect white col-md-8" v-bind:class="{currentSection: section.isOnSign, completedSection: section.hasCompletedSign}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../images/sign-consent-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8  mb-0">
                        <p class="medium default mb-0 bold--text"><strong>  Sign </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText"> Sign the consent document. </p>
                            <p class="x-tiny default"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedSign}" class="lock">{{section.hasCompletedSign ? 'check': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect white col-md-8" v-bind:class="{currentSection: section.isOnRegistration, completedSection: section.hasCompletedRegistration}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../images/number-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0 bold--text"><strong>  Registration </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText"> Add your phone number so you can join the study! </p>
                            <p class="x-tiny default"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedRegistration}" class="lock">{{section.hasCompletedRegistration ? 'check': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <br>
        <br>
        <br>

    </v-app>
</template>

<style scope lang="scss">

    .customRow mb-4 ml-1 mr-1 {
        height: 113px;
    }
    .checkOnOverview {
        // width: 50.9px;
        height: 80px;
        // background-color: #5eae57;
    }

    .rect {
        opacity: 0.7;
        border-radius: 12px;
        background-color: #ffffff;
    }

    .lock {
        width: 23px;
        height: 35px;
        color: #bbbbbc;
    }

    .currentSection {
      opacity: 1 !important;   
    }

    .verticalCenter {
        align-items: center;
        display:flex;
    }

    .greenText {
        color: green !important;
        font-weight: bold;
    }


</style>

<script>
export default {
  data () {
    return {
      section: {
        isOnEligibility: true,
        hasCompletedEligibility: true,
        isOnConsent: false,
        hasCompletedConsent: false,
        isOnQuiz: false,
        hasCompletedQuiz: false,
        isOnSign: false,
        hasCompletedSign: false,
        isOnRegistration: false,
        hasCompletedERegistration: false
      }
    }
  }
//   ,
//   mounted: function () {
//     this.section = {
//        isOnEligibility: true,
//        hasCompletedEligibility: true
//     }
//   }
}
</script>

