<template>
    <v-app>

    <div class="row">

      <div class="mx-auto p-0 pt-sm-0 col-2 col-lg-2 mr-lg-2 ml-lg-2">
        <img class="img-fluid " src="../../../images/step-1-consent-icon.png">
      </div>

      <div class="col-9 col-lg-9 x-tiny mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
        <div class="row">
          <div class="col-12 mt-0 default text-center text-sm-left font-weight-bold">
            Overview
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <ul class="ml-md-5 mr-md-5 smallText lightGrayText">
        <li>
          This study is to understand variations in Parkinson’s Disease symptoms.
        </li>

        <li class="mt-lg-4">
          You can join if you are over 18 years old, even if you do not have Parkinson’s Disease.
        </li>

        <li class="mt-lg-4">
         Participation is voluntary. It will not affect your medical benefits.
        </li>
        <a v-on:click="showHelperText = !showHelperText" class="defaultBlue font-weight-bold ">
          <u> See Google Doc with this section </u>
        </a>

      </ul>
    </div>
    <div class="row" v-if="showHelperText">
        <div class="ml-md-5 mr-md-5 p-0 col lightGrayText smallText">
          We will ask you questions about your health and your medical history. We will ask if you have PD and if you take certain medications. Because the purpose of this study is to look for patterns over time, we will ask you to review and update your answers from time to time. We might also ask new questions about your mood or how well you slept. These questions are important for the research study
          <br><br>
          We will ask you to do simple activities. For example:
          Say “aaah” into your phone’s microphone for 10 seconds. This is to measure variation in your voice.
          Walk and/or stand still with your phone in your pocket. This is to measure your gait and balance.
          Tap your fingers on your phone’s screen. This is to measure your speed and coordination.
          Play a short game. In this game, flowers light up in pattern. We ask you to tap the flowers in the same pattern. This is to test your short-term memory.
          Hold your phone for 10-15 seconds. This is to measure tremor in your hand.  
          These activities need your phone’s sensors on, including the GPS to calculate how far you travel. We do not use the GPS to find out your location.
          <br><br>
          You can enable notifications from the app to receive reminders to do these surveys and activities.
        </div>
    </div>
    
    </v-app>
</template>

<script>
export default {
  props: ['showHelperText']
}
</script>
