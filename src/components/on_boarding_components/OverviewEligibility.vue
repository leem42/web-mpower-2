<template>
    <v-app class="fadeBackground ">
        <br>
        <br>
        <br>

        <span v-if="section.isOnEligibility && !this.section.hasCompletedEligibility">
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
        </span>

        <span v-if="section.isOnConsent && !section.hasCompletedConsent">
            <div class="row">
                <p class="mx-auto white--text"> Congratulations, you’re eligible! </p>
            </div>
            <div class="row text-center mb-2">
                <p class="col-md-8 mx-auto  medium white--text">
                    Now that we have found out that you are eligible, let’s move on to the next step. Your next step will be Consent where you’ll learn some more about the study.
                </p>
            </div>
        </span>

        <span v-if="section.isOnQuiz && !section.hasCompletedQuiz">
            <div class="row">
                <p class="mx-auto white--text"> Quiz </p>
            </div>
            <div class="row text-center mb-2">
                <p class="col-md-8 mx-auto  medium white--text">
                    Now that we have found out that you are eligible, let’s move on to the next step. Your next step will be Consent where you’ll learn some more about the study.
                </p>
            </div>
        </span>

        <div class="row customRow mb-4 ml-1 mr-1 ml-1 mr-1">
            <div v-on:click="$router.push({name: 'WhyInterested'})" class="mx-auto rect smooth col-md-8" v-bind:class="{currentSection: section.isOnEligibility && !section.hasCompletedEligibility,
            completedSection: section.hasCompletedEligibility }">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 ">
                        <img  src="../../images/eligibility-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-md-8 col-7 mb-0 pr-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: section.hasCompletedEligibility }"><strong>  Eligibility </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: section.hasCompletedEligibility }"> Let’s see if you are eligible for the Parkinsons Disease study. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: section.hasCompletedEligibility }"> 2 minutes </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect smooth col-md-8" v-bind:class="{currentSection: section.isOnConsent, completedSection: section.hasCompletedConsent}">
                <div class="row">
                    <div class="col-1 verticalCenter  ml-md-3 pl-0 pl-sm-auto mr-5">
                        <img  src="../../images/consent-icon.png"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: section.hasCompletedConsent }"><strong>  Consent </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: section.hasCompletedConsent }"> Learn about the study and the risks and benefits of joining. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: section.hasCompletedConsent }"> 5 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedConsent}" class="lock">{{section.hasCompletedConsent ? '': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div v-on:click="$router.push({name: 'QuestionOne'})" class="mx-auto rect smooth col-md-8" v-bind:class="{currentSection: section.isOnQuiz, completedSection: section.hasCompletedQuiz}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/quiz-onboarding-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: section.hasCompletedQuiz }"><strong>  Quiz </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: section.hasCompletedQuiz }"> Let’s see what you have learned from the consent document. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: section.hasCompletedQuiz }"> 5 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedQuiz}" class="lock">{{section.hasCompletedQuiz ? '': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect smooth col-md-8" v-bind:class="{currentSection: section.isOnSign, completedSection: section.hasCompletedSign}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/sign-consent-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8  mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: section.hasCompletedSign }"><strong>  Sign </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: section.hasCompletedSign }" > Sign the consent document. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: section.hasCompletedSign }"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedSign}" class="lock">{{section.hasCompletedSign ? '': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect smooth col-md-8" v-bind:class="{currentSection: section.isOnRegistration, completedSection: section.hasCompletedRegistration}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/number-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: section.hasCompletedRegistration }"><strong>  Registration </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: section.hasCompletedRegistration }"> Add your phone number so you can join the study! </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: section.hasCompletedRegistration }"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: section.hasCompletedRegistration}" class="lock">{{section.hasCompletedRegistration ? '': 'fa-lock'  }}</v-icon>
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

    .whiteText {
        color: white;
    }

    .checkOnOverview {
        height: 80px;
    }

    .smooth {
        border-radius: 12px !important;
    }

    .rect {
        // opacity: 0.7;
        background-color: rgba(255,255,255,0.7)
    }

    .lock {
        width: 23px;
        height: 35px;
        color: #bbbbbc;
    }

    .currentSection {
        background-color: rgba(255,255,255,1)
    //   opacity: 1 !important;   
    }

    .verticalCenter {
        align-items: center;
        display:flex;
    }

    .greenText {
        color: green !important;
        font-weight: bold;
    }

    .completedSection {
        background-color: #049372;
    }

    p.default.completedSection {
        color: white !important;
    }

</style>

<script>
export default {
  data () {
    return {
      section: {
        isOnEligibility: true,
        hasCompletedEligibility: false,
        isOnConsent: false,
        hasCompletedConsent: false,
        isOnQuiz: false,
        hasCompletedQuiz: false,
        isOnSign: false,
        hasCompletedSign: false,
        isOnRegistration: false,
        hasCompletedRegistration: false
      }
    }
  },
  created: function () {
    console.log('called')
    if (this.$router.params && this.$router.params.hasCompletedEligibility) {
      console.log('called2')
      this.section.hasCompletedEligibility = true
      this.section.isOnConsent = true
    }
  }
}
</script>
