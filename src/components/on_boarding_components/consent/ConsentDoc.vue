<template>
    <v-app>
        <br>
        <br>
        <br>
        <div class="row">

            <!--<router-view id="docText" name="ConsentDocText" class="router docText container-fluid">  </router-view>-->
            <div class="customHeight2 col-md-5 ml-sm-4">
              <iframe id="iFrame" ref="frame" src="http://localhost:8080/#/NullPage/ConsentDocText" class="fillParent  mask">
              </iframe>
            </div>

            <div class="col-md-6 mr-5 ">
                <router-view class="whiteBackground router container-fluid">  </router-view>
            </div>    
        </div>

    </v-app>
</template>


<script>
import {highlightTracker} from '../../../requirements/highlightTracker'

export default {
  data () {
    return {
      isFocused: true,
      highlightTracker: highlightTracker
    }
  },
  mounted: function () {
    this.highlightTracker.sectionOne = true
  }
}
</script>

<style>
  .fillParent {
    width: inherit;
    height: inherit;
  }
   
   @media(max-width: 766px) { 
      .customHeight2 {
        height: 200px !important;
      }
      .mask {
        border: solid 4px rgba(108, 122, 137, 0.3);
      }
   }
   @media(min-width: 766px) { 
      .mask {
        border: solid 10px rgba(108, 122, 137, 0.3);
      }
      .customHeight2 {
        height: 500px !important;
      }
   }

   .document {
     height: 500px;
    }

</style>
