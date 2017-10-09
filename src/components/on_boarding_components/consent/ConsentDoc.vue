<template>
    <v-app>
        <br>
        <br>
        <br>
        <div class="row" style="height: 500px;" >

            <!--<router-view id="docText" name="ConsentDocText" class="router docText container-fluid">  </router-view>-->
            <div class="customHeightFrame col-md-5 ml-sm-4">
              <iframe id="iFrame" ref="frame" src="http://localhost:8080/#/NullPage/ConsentDocText" class="fillParent  mask">
              </iframe>
            </div>

            <div class="col-md-6 mr-5 ">
                <router-view class="whiteBackground router container-fluid">  </router-view>
            </div>    
            
        </div>

        
        <div class="row anchorBottom">

          <div class="col-md-8">
            <div class="row">
              <p class="col-11  tiny mt-2  lightLead"> Step {{' ' + stepNumber}} </p>
              <v-progress-linear fill="" class="col-11  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
          </div>

            <div class="mx-auto marginTop50 ">
              <v-btn class="navyBlue largeButton white--text" v-on:click="navigate(0)"> Back
              </v-btn>
            </div>
            <div class="mx-auto marginTop50">
              <v-btn class="navyBlue largeButton white--text" v-on:click="navigate(1)"> Next
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
      stepNumber: 1
    }
  },
  mounted: function () {
    this.highlightTracker.sectionOne = true
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
      this.$router.push({name: frame})
    }
  }
}
</script>

<style lang="scss">

  .centerAlign {
    margin: auto;
    margin-left: 10px;
    padding-left: 0px;
    border-radius: 8px;
    background-color: #eeeeee;
  }

  .leftAuto {
    margin-left: 10px !important;
    padding-left: 0px;
  }
  


  .anchorBottom {
    position: fixed !important;
    bottom: 0px;
    width: 100%;
    height: 10px;
    height: 108px;
    background-color: #fafafa;
    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.12);
  }

  @mixin length($percent) {
    width:$percent†
  }
  .customProgress {
    margin-left: 10px;
    margin-top: 50px;
    border-radius: 8px;  
    background-color: #68c060;
    width: 60%;
    height: 10px;

  }

  .fillParent {
    width: inherit;
    height: inherit;
  }
   
   @media(max-width: 766px) { 
      .customHeightFrame {
        height: 200px !important;
      }
      .mask {
        border: solid 4px rgba(108, 122, 137, 0.3);
      }

   
      .customProgress {
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 20px;
        border-radius: 8px;
        background-color: #68c060;
        width: 100%;
        height: 10px;
      }


      .marginTop50 > button {
        height: 40px;
        width: 80px;
        border-radius: 16px;
      }
   }
   @media(min-width: 766px) { 
   
      .marginTop50>button {
        height: 70px;
        width: 150px;
        border-radius: 16px;
        margin-top: 20px;
      }

      .mask {
        border: solid 10px rgba(108, 122, 137, 0.3);
      }
      .customHeightFrame {
        height: 500px !important;
      }
   }

   .document {
     height: 500px;
    }

</style>
