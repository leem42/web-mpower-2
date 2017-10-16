<template>
    <v-app v-bind:class="showOverlay ? 'shadowBackground' : ''">


        <div class="row" style="height: 500px;" >

            <!--<router-view id="docText" name="ConsentDocText" class="router docText container-fluid">  </router-view>-->
            <div class="customHeightFrame col-md-5 ml-sm-4" v-bind:class="showOverlay ? 'col-md-11' : ''">
              <iframe id="iFrame" ref="frame" src="http://localhost:8080/#/NullPage/ConsentDocText" class="fillParent  mask">
              </iframe>
            </div>

            <div  class="col-md-6 mr-5 mt-2" style="height: 400px;" v-if="!showOverlay">
                <router-view  class="whiteBackground consentView router container-fluid">  </router-view>
            </div>    
            
        </div>


        <div class="row anchorBottom customRowHeight">
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text medium" v-on:click="navigate(0)"> < </v-btn>
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
            <v-btn class="navyBlue white--text  medium" v-on:click="navigate(1)"> > </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn class="navyBlue largeButton medium white--text" v-on:click="navigate(1)"> Next
            </v-btn>
        </div>


    </div>

    </v-app>
</template>


<script>
import {highlightTracker} from '../../../requirements/highlightTracker'
import {requirements} from '../../../requirements/requirements'
export default {
  data () {
    return {
      isFocused: true,
      highlightTracker: highlightTracker,
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
      showOverlay: false
    }
  },
  mounted: function () {
    this.highlightTracker.sectionOne = true
    this.iframe = document.getElementById('iFrame').contentWindow
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
      this.iframe.postMessage(message, 'http://localhost:8080/#/NullPage/ConsentDocText')
    },
    recieveMessage: function (event) {
      if (event.source.location.href !== 'http://localhost:8080/#/NullPage/ConsentDocText') {
        return ''
      } else {
        /* eslint-disable */
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


  div#app.consentView {
    min-height: 0px;
    height: 500px;
  }

  .shadowBackground {
    background-color: rgba(74, 74, 74, 0.9) !important;
  }
</style>
