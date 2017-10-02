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
                  <img class="img-fluid " src="../../../images/step-6-consent-icon.png">
                </div>
          
                <div class="col-9 col-lg-9 x-tiny mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
                  STEP 10
                  <div class="row">
                    <div class="col-12 default font-weight-bold">
                      Time commitment
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <ul class="ml-md-5 mr-md-5 smallText lightGrayText">

                
                    <li class="mt-lg-1 mb-lg-3">
                        This study will take about 5 minutes per day and about 20 minutes per week.
                    </li>

                    <li class="mt-lg-1 mb-lg-3">
                        The time you spend on the app may count against your mobile data plan.
                    </li>

                    <li class="mt-lg-1">
                        You can set up the app to use Wi-Fi connections to avoid using your mobile data.
                    </li>

                  <a href="" class="defaultBlue font-weight-bold "><u> Learn More </u></a>
                </ul>
                  <v-btn :to="{name: 'ConsentNine'}" flat :ripple="false" class="navButton col-4  ml-4 ml-sm-5 mr-sm-5 medium white--text text-capitalize">  Back </v-btn>
                  <v-btn :to="{name: 'ConsentEleven'}" flat :ripple="false" class="navButton col-4 medium white--text text-capitalize">  Next </v-btn>
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
