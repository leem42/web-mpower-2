<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tiny text-uppercase"> Question 5 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 default"> I can pause / resume participating at any time? </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="questionResults.questionFive" class="col-12">
                <div class="row"> 
                    <v-radio class=" mb-4 col-12 pr-0" label="Yes" value="true" >  </v-radio>
                    <v-radio class=" col-12 pr-0" label="No" value="false"> </v-radio>
                </div>
             </v-radio-group> 
        </div>

        <div class="row">
            <v-btn v-on:click="requirements.isOnSign = true, requirements.isOnQuiz = false, requirements.hasCompletedQuiz = true, $router.push({name: 'OverviewEligibility'})"  class="col-auto mx-auto ext-sm-auto text-center bigButton text-capitalize navyBlue large white--text"> Next </v-btn>
        </div>
 
    </v-app>
</template>

<script>
    import { questionResults } from '../../../requirements/questionResults'
    import { requirements } from '../../../requirements/requirements'

    export default {
      data () {
        return {
          questionResults: questionResults,
          requirements: requirements
        }
      }
    }
</script>
