<template>
  <v-app>

    <div class="row" style="height: 300px;">

      <div class='customHeightFrame mt-0 m-0 p-0 col-md-5 ml-md-4'>
        <iframe id="iFrame" ref="frame" src="http://web-mpower-2-michael.lee.s3-website-us-east-1.amazonaws.com/feat/vuetify-alternate-checkboxes/#/NullPage/ConsentDocText"
        v-bind:class="showOverlay ? '': 'fillParent  mask'">
        </iframe>
         <!-- <iframe id="iFrame" ref="frame" src="http://localhost:8080/#/NullPage/ConsentDocText" class="fillParent  mask">
        </iframe> -->
      </div>

       <v-dialog v-if="showOverlay"  class="col-10" width="90%" v-model="showOverlay" scrollable>
        <v-card height="400px ">
            <iframe id="overlayFrame" ref="frame" src="http://localhost:8080/#/NullPage/ConsentDocText" class='fillParent'>
            </iframe> 
        </v-card>
       </v-dialog>


      <div class="col-md-6 responseRouterHeight mx-auto mr-md-5 mt-2" >
        <router-view class="whiteBackground fillParentRouter consentView router container-fluid"> </router-view>
      </div>

    </div>



    <div class="row anchorBottom customRowHeight">

      <template v-if="!isReviewingQuestion">
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
          <v-btn class="navyBlue white--text medium" v-on:click="navigate(0)">
            Back </v-btn>
        </div>

        <div class="marginTop50 col-2 hideOnSmall ml-0 mr-0">
          <v-btn class="navyBlue largeButton medium white--text" v-on:click="navigate(0)"> Back
          </v-btn>
        </div>

        <div class="col-6 col-md-8 mt-md-3">
          <div clas="row text-center">
            <p class="col-11  mx-auto text-center tiny mt-md-2  mb-0 lightLead"> Step {{' ' + indexInStack }} </p>
            <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
          </div>
        </div>

        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
          <v-btn class="navyBlue white--text  medium" v-on:click="navigate(1)"> Next </v-btn>
        </div>

        <div class="marginTop50 col-2 hideOnSmall">
          <v-btn class="navyBlue largeButton medium white--text" v-on:click="navigate(1)"> Next
          </v-btn>
        </div>
      </template>
      <template v-else>
        <div class="col-12 mx-auto p-0 marginTop50 hideOnLarge text-center">
          <v-btn class="navyBlue white--text medium" v-on:click="$router.push({name: 'RetakeQuiz'})">
            Back To Overview 
          </v-btn>
        </div>

        <div class="marginTop50 col-6 text-center mx-auto hideOnSmall ml-0 mr-0">
          <v-btn class="navyBlue largeButton medium white--text" v-on:click="$router.push({name: 'RetakeQuiz'})"> 
            Back To Overview
          </v-btn>
        </div>


      </template>

    </div>

  </v-app>
</template>


<script>
import {highlightTracker} from '../../../requirements/highlightTracker'
import {requirements} from '../../../requirements/requirements'
import {questionResults} from '../../../requirements/questionResults'

export default {
  data () {
    return {
      isFocused: true,
      highlightTracker: highlightTracker,
      questionResults: questionResults,
      callStack: [
        'OverviewEligibility',
        'ConsentOne',
        'ConsentTwo',
        'ConsentThree',
        'ConsentFour',
        'ConsentFive',
        'ConsentSix',
        'ConsentSeven',
        'ConsentEight',
        'ConsentNine',
        'ConsentTen',
        'ConsentEleven',
        'ConsentTwelve',
        'ConsentThirteen',
        'OverviewEligibility'
      ],
      indexInStack: 1,
      requirements: requirements,
      multiple13: 100.0 / 13,
      progress: 100.0 / 13,
      stepNumber: 1,
      iframe: '',
      showOverlay: false,
      isReviewingQuestion: undefined
    }
  },
  mounted: function () {
    this.iframe = document.getElementById('iFrame').contentWindow
    // if they have wrong questions we don't show nav and let user pop out of screen
    this.isReviewingQuestion = Object.values(this.questionResults).includes('false')
  },
  methods: {
    navigate (index) {
      var frame = ''
      if (index === 0) {
        this.indexInStack = this.indexInStack - 1
        this.progress = this.progress - this.multiple13
        this.stepNumber -= 1
      } else {
        this.progress = this.progress + this.multiple13
        this.indexInStack = this.indexInStack + 1
        this.stepNumber += 1
      }
      if (this.indexInStack === 13) {
        this.requirements.isOnConsent = false
        this.requirements.hasCompletedConsent = true
        this.requirements.isOnQuiz = true
      }
      frame = this.callStack[this.indexInStack]
      var message = {indexInStack: this.indexInStack}
      if (index === 0) {
        message['forward'] = false
      } else {
        message['forward'] = true
      }
      this.callFrame(message)
      this.$router.push({name: frame})
    },
    callFrame (message) {
      this.iframe.postMessage(message, 'http://web-mpower-2-michael.lee.s3-website-us-east-1.amazonaws.com/feat/vuetify-alternate-checkboxes/#/NullPage/ConsentDocText')
      // this.iframe.postMessage(message, 'http://localhost:8080/#/NullPage/ConsentDocText')
    },
    recieveMessage: function (event) {
      if (event.origin !== 'http://web-mpower-2-michael.lee.s3-website-us-east-1.amazonaws.com') {
      // if (event.origin !== 'http://localhost:8080') {
        return ''
      } else {
        /* eslint-disable */
        if (event.data !== 'switch overlay') {
          return
        }
        this.showOverlay = !this.showOverlay
        /* eslint-enable */
      }
    }
  },
  created: function () {
    window.addEventListener('message', this.recieveMessage, false)
  }
}
</script>


<style>
  .midOpacity {
    opacity: 0.5;
  }
  .show {
    opacity: 1;
  }

  .hide {
    opacity: 0;
    z-index: 0 !important;
  }

  .fixPosition {
    position: fixed;
  }
  .topLevel {
    z-index: 1000;
  }


  .shadowBackground {
    background-color: rgba(74, 74, 74, 0.9) !important;
  }

  .inheritBackground {
    background-color: inherit !important;
  }
</style>
