<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tiny text-uppercase"> Question 2 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 default"> Will my name be stored with my study data? </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="questionResults.questionTwo" class="col-12">
                <div class="row"> 
                    <v-radio class="col-12  mb-4 pr-0" value="false" label="Yes"> </v-radio>
                    <v-radio class="col-12 default pr-0" value="true"  label="No"> </v-radio>
                </div>
             </v-radio-group> 
        </div>

        <div class="row">
            <v-btn :to="{name: 'QuestionThree'}" class="col-auto mx-auto ext-sm-auto text-center bigButton text-capitalize navyBlue large white--text"> Next </v-btn>
        </div>

    </v-app>
</template>

<script>
    import { questionResults } from '../../../requirements/questionResults'

    export default {
      data () {
        return {
          questionResults: questionResults
        }
      }
    }
</script>
