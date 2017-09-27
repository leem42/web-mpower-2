<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tiny text-uppercase"> Question 1 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 lightGrayText"> What is the purpse of this study? </p>
        </div>
        
        <div class="row ml-6 mt-4">
             <v-radio-group v-model="choice" class="col-12">
                <div class="row"> 
                    <v-radio class="col-12 wrapLabel lightGrayText mb-5 pr-0" value="1" label="Understand the fluctuations of Parkinson’s disease symptoms">  </v-radio>
                    <v-radio class="col-12 wrapLabel lightGrayText pr-0" value="2" label="Give medical advice and diagnose people with Parkinson’s disease">  </v-radio>
                </div>
             </v-radio-group> 
        </div>

        <div class="row">
            <v-btn :to="{name: 'QuestionTwo'}" class="col-auto mx-auto ext-sm-auto text-center bigButton text-capitalize navyBlue large white--text"> Next </v-btn>
        </div>

    </v-app>
</template>

<script>
    export default {
      data () {
        return {
          choice: ''
        }
      }
    }
</script>
