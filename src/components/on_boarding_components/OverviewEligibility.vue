<template>
    <v-app class="fadeBackground ">
        <br>
        <br>
        <br>

        <span v-if="requirements.isOnEligibility && !this.requirements.hasCompletedEligibility">
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

        <span v-if="requirements.isOnConsent && !requirements.hasCompletedConsent">
            <div class="row">
                <p class="mx-auto white--text"> Congratulations, you’re eligible! </p>
            </div>
            <div class="row text-center mb-2">
                <p class="col-md-8 mx-auto  medium white--text">
                    Now that we have found out that you are eligible, let’s move on to the next step. Your next step will be Consent where you’ll learn some more about the study.
                </p>
            </div>
        </span>

        <span v-if="requirements.isOnQuiz && !requirements.hasCompletedQuiz">
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
            <div v-on:click="$router.push({name: 'WhyInterested'})" class="mx-auto rect smooth col-md-8" v-bind:class="{currentrequirements: requirements.isOnEligibility && !requirements.hasCompletedEligibility,
            completedrequirements: requirements.hasCompletedEligibility }">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 ">
                        <img  src="../../images/eligibility-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-md-8 col-7 mb-0 pr-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: requirements.hasCompletedEligibility }"><strong>  Eligibility </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedEligibility }"> Let’s see if you are eligible for the Parkinsons Disease study. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: requirements.hasCompletedEligibility }"> 2 minutes </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect smooth col-md-8" v-bind:class="{currentrequirements: requirements.isOnConsent, completedrequirements: requirements.hasCompletedConsent}">
                <div class="row">
                    <div class="col-1 verticalCenter  ml-md-3 pl-0 pl-sm-auto mr-5">
                        <img  src="../../images/consent-icon.png"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: requirements.hasCompletedConsent }"><strong>  Consent </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedConsent }"> Learn about the study and the risks and benefits of joining. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: requirements.hasCompletedConsent }"> 5 minutes </p> 
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedConsent}" class="lock">{{requirements.hasCompletedEligibility ? '': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div v-on:click="$router.push({name: 'QuestionOne'})" class="mx-auto rect smooth col-md-8" v-bind:class="{currentrequirements: requirements.isOnQuiz, completedrequirements: requirements.hasCompletedQuiz}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/quiz-onboarding-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: requirements.hasCompletedQuiz }"><strong>  Quiz </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedQuiz }"> Let’s see what you have learned from the consent document. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: requirements.hasCompletedQuiz }"> 5 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedQuiz}" class="lock">{{requirements.hasCompletedQuiz ? '': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div class="mx-auto rect smooth col-md-8" v-bind:class="{currentrequirements: requirements.isOnSign, completedrequirements: requirements.hasCompletedSign}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/sign-consent-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8  mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: requirements.hasCompletedSign }"><strong>  Sign </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedSign }" > Sign the consent document. </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: requirements.hasCompletedSign }"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedSign}" class="lock">{{requirements.hasCompletedSign ? '': 'fa-lock'  }}</v-icon>
                    </div>
                </div>
            </div>
        </div>

        <div class="row customRow mb-4 ml-1 mr-1">
            <div  v-on:click="$router.push({name: 'Registration'})" class="mx-auto rect smooth col-md-8" v-bind:class="{currentrequirements: requirements.isOnRegistration, completedrequirements: requirements.hasCompletedRegistration}">
                <div class="row">
                    <div class="col-1 verticalCenter ml-md-3 mr-5 pl-0 pl-sm-auto">
                        <img  src="../../images/number-icon.png" class="checkOnOverview"> </img>
                    </div>
                    <div class="col-7 col-md-8 mb-0">
                        <p class="medium default mb-0" v-bind:class="{whiteText: requirements.hasCompletedRegistration }"><strong>  Registration </strong>
                            <p class="pb-0 mb-0 medium-small lightGrayText" v-bind:class="{whiteText: requirements.hasCompletedRegistration }"> Add your phone number so you can join the study! </p>
                            <p class="x-tiny default" v-bind:class="{whiteText: requirements.hasCompletedRegistration }"> 2 minutes </p>
                        </p>
                    </div>
                    <div class="col-1 ml-0 pl-0 ml-sm-auto pl-md-auto text-center verticalCenter">
                        <v-icon large v-bind:class="{greenText: requirements.hasCompletedRegistration}" class="lock">{{requirements.hasCompletedRegistration ? '': 'fa-lock'  }}</v-icon>
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

    .currentrequirements {
        background-color: rgba(255,255,255,1)
    }

    .verticalCenter {
        align-items: center;
        display:flex;
    }

    .greenText {
        color: green !important;
        font-weight: bold;
    }

    .completedrequirements {
        background-color: #049372;
    }

    p.default.completedrequirements {
        color: white !important;
    }

</style>

<script>
import {requirements} from '../../requirements/requirements'

export default {
  data () {
    return {
      requirements: requirements
    }
  }
}
</script>
