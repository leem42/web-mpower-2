<template>
    <v-app>
        <div class="row">
      
          <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 ml-lg-2 customHeight">
            <img class="img-fluid " src="../../../images/join-the-study-image_2x.png">
          </div>
    
          <div class="col-9 col-lg-9 x-tiny mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
            STEP 5
            <div class="row">
              <div class="col-12 default font-weight-bold">
                Data use
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <ul class="ml-md-5 mr-md-5 smallText lightGrayText">

            <li class="mt-lg-1 mb-lg-3">
              Your coded study data will be used for research.
            </li>
            
            <li class="mt-lg-1 mb-lg-3">
              It will be combined with data from other volunteers.
            </li>
            
            <li class="mt-lg-1">
              It will be transferred to an analysis platform in the United States. 

            </li>
            <a href="" class="defaultBlue font-weight-bold "><u> Learn More </u></a>
          </ul>
        </div>
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
