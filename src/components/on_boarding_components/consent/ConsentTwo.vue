<template>
    <v-app>
        <br>
        <br>
        <br>
        <div class="row">
            <iframe ref="frame" src="http://localhost:8080/#/NullPage/ConsentDoc" height="500px" class="ml-sm-4 col-md-5 mask">
            </iframe>


            <div class="col-md-6 mr-5">
              <div class="row">

                <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 ml-lg-2 customHeight">
                  <img class="img-fluid " src="../../../images/number-icon.png">
                </div>
          
                <div class="col-9 col-lg-9 x-tiny mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
                  STEP 2
                  <div class="row">
                    <div class="col-12 default font-weight-bold">
                      Sensor data
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <ul class="ml-md-5 mr-md-5 smallText lightGrayText">

                  <li class="mt-lg-1 mb-lg-3">
                    The weekly challenge has a few activities such as brain tests and a short walking activity. You can choose when to do these activities.
                  </li>
                  
                  <li class="mt-lg-1 mb-lg-3">
                    One activity we will ask you to complete is the 6 Minute Walk where you will walk as far as you can in 6 minutes. The sensors in your phone will tell us how far you have walked to measure your fitness levels. You don’t have to run or exercise heavily to complete this activity. 
                  </li>
                  
                  <li class="mt-lg-1">
                    To tell us your heart rate, we will ask you to measure the number of times your heart beats in a minute using the sensors in your iPhone or Apple Watch. We will provide instructions on how to do this when it is time. 
                  </li>
                  <a href="" class="defaultBlue font-weight-bold "><u> Learn More </u></a>
                </ul>
                  <v-btn :to="{name: 'ConsentOne'}" flat :ripple="false" class="navButton col-4  ml-4 ml-sm-5 mr-sm-5 medium white--text text-capitalize">  Back </v-btn>
                  <v-btn :to="{name: 'ConsentTwo'}" flat :ripple="false" class="navButton col-4 medium white--text text-capitalize">  Next </v-btn>
              </div>
            </div>    


        </div>

        <br>
        <br>
        <br>
        <br>
        <br>

    </v-app>
</template>


<script>
import {highlightTracker} from '../../../requirements/highlightTracker'

export default {
  data () {
    return {
      pageURL: '',
      isFocused: true,
      highlightTracker: highlightTracker
    }
  },
  mounted: function () {
    this.highlightTracker.sectionOne = true
    this.pageURL = this.$router.currentRoute.fullPath.replace('ConsentOne', 'ConsentDoc')
  }
}
</script>

<style>
  .mask {
    border: solid 10px rgba(108, 122, 137, 0.3);
  }

  .customHieght {
    height: 200px !important;
   }

</style>
