<template>
    <v-app>
        <div class="row">
      
          <div class="mx-auto pt-3 pt-sm-0 col-3  col-lg-2 mr-lg-2 customHeight">
            <img class="img-fluid " src="../../../images/join-the-study-image_2x.png">
          </div>

          <div class="col-9 col-lg-9 x-tiny mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
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
              <a v-on:click="showHelperText = !showHelperText" class="defaultBlue font-weight-bold ">
                <u> Learn More </u>
              </a>
            </ul>
          </div>
          <div class="row pb-5 mb-5" v-if="showHelperText">
            <div class="ml-md-5 mr-md-5 p-0 col lightGrayText smallText">
              We will process your data electronically.
              <br><br>
              We will combine your coded study data with the coded study data of other volunteers.
              <br><br>
              We will store this combined coded study data in the United States on the Synapse data analysis platform. Synapse is run by Sage Bionetworks (non-profit).
              <br><br>              
              We will analyze the combined coded study data. We will look for patterns. These patterns may help us better understand the symptoms of PD. Also, we will investigate how mobile phones and sensors perform in this type of research. Our goal is to improve the quality of life for people with PD.
              <br><br>
              We will not use the coded study data for commercial advertising.
            </div>
        </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showHelperText: false
    }
  }
}
</script>
