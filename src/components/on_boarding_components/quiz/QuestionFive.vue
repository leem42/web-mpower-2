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
            <p class="ml-6 pl-2 lead"> I can pause / resume participating at any time? </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="choice" class="col-12">
                <div class="row"> 
                    <v-radio class="lightGrayText mb-4 col-12 pr-0" label="Yes" value="1">  </v-radio>
                    <v-radio class="lightGrayText col-12 pr-0" label="No" value="2"> </v-radio>
                </div>
             </v-radio-group> 
        </div>

        <div class="row">
            <v-btn :to="{name: 'OverviewEligibility'}" class="col-auto mx-auto ext-sm-auto text-center bigButton text-capitalize navyBlue large white--text"> Next </v-btn>
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
