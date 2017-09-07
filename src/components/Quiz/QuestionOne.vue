<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <p class="ml-6 light defaultBlue tiny text-uppercase"> Question 1 </p>
        </div>

        <div class="row">
            <p class="ml-6 defaultBlue"> What is the purpse of this study? </p>
        </div>
        
        <div class="row ml-6">
            <!-- <v-radio-group v-model="choice" class="col-12"> -->
                <v-radio class="lead medium-small col-12" value="1" label="Understand the fluctuations of Parkinson’s disease symptoms">  </v-radio>
                <v-radio class="lead medium-small col-12" value="2" label="Give medical advice and diagnose people with Parkinson’s disease"> </v-radio>
            <!-- </v-radio-group> -->
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
