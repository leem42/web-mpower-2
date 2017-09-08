<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <p class="ml-6 pl-2 light defaultBlue tiny text-uppercase"> Question 2 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 defaultBlue"> Will my name be stored with my study data? </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="choice" class="col-12">
                <div class="row"> 
                    <v-radio class="noLabel col-1 pr-0" value="1">  </v-radio>
                    <div class="col-11 dark-lead pl-0">Yes </div>
                    <v-radio class=" default noLabel col-1 pr-0" value="2"> </v-radio>
                    <div class="col-11 dark-lead pl-0"> No </div>
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
