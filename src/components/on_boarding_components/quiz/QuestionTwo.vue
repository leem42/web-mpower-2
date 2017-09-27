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
            <p class="ml-6 pl-2 lead"> Will my name be stored with my study data? </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="choice" class="col-12">
                <div class="row"> 
                    <v-radio class="col-12 lightGrayText  mb-4 pr-0" value="1" label="Yes"> </v-radio>
                    <v-radio class="col-12 lightGrayText default pr-0" value="2"  label="No"> </v-radio>
                </div>
             </v-radio-group> 
        </div>

        <div class="row">
            <v-btn :to="{name: 'QuestionThree'}" class="col-auto mx-auto ext-sm-auto text-center bigButton text-capitalize navyBlue large white--text"> Next </v-btn>
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
