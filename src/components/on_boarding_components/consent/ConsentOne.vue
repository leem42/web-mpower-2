<template>
    <v-app>
        <br>
        <br>
        <br>
        <div class="row">
            <iframe ref="frame" src="http://localhost:8080/#/NullPage/ConsentDoc" height="500px" class="col-md-5 mask">
            </iframe>


            <div class="col-md-7">
              <div class="row">

                <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 ml-lg-2 customHeight">
                  <img class="img-fluid " src="../../../images/join-the-study-image_2x.png">
                </div>
          
                <div class="col-9 col-lg-9 x-tiny mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
                  STEP 1
                  <div class="row">
                    <div class="col-12 default font-weight-bold">
                      Activities & Surveys
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <ul class="ml-md-5 mr-md-5 medium-small lightGrayText">
                  <li class="mt-lg-3 mb-lg-5">
                    We will ask you to complete a daily survey, which you can take whenever you’d like.
                  </li>
                  
                  <li class="mt-lg-3 mb-lg-5">
                    The survey only has two questions and shouldn’t take you more than 2 minutes to complete. 
                  </li>
                  
                  <li class="mt-lg-3 mb-lg-5">
                    Once a week, we will ask you to do a 20-minute challenge and a survey with about 15 questions. 
                  </li>
                  <a href="" class="defaultBlue font-weight-bold "><u> Learn More </u></a>
                  <v-btn flat :ripple="false" class="controller medium white--text ml-5 mr-0 text-capitalize">  Next </v-btn>
                </ul>
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
