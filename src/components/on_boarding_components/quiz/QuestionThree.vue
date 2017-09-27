<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <p class="ml-6 pl-2 lightLead tiny text-uppercase"> Question 3 </p>
        </div>

        <div class="row">
            <p class="ml-6 pl-2 lead"> If I decide to share my data with qualified 
                researchers and then I change my mind, can my data be deleted from their studies?
                 </p>
        </div>
        
        <div class="row ml-6">
             <v-radio-group v-model="choice" class="col-12">
                <div class="row"> 
                    <v-radio class="lightGrayText col-12 mb-4 pr-0" label="Yes" value="1">  </v-radio>
                    <v-radio class=" default lightGrayText col-12  pr-0" label="No" value="2"> </v-radio>
                </div>
             </v-radio-group> 
        </div>

        <div class="row">
            <v-btn :to="{name: 'QuestionFour'}" class="col-auto mx-auto ext-sm-auto text-center bigButton text-capitalize navyBlue large white--text"> Next </v-btn>
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
