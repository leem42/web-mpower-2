<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>

        <router-view class="whiteBackground router container-fluid"> </router-view>

        <div class="row anchorBottom">

            <div class="col-md-8">
                <div class="row">
                    <p class="col-11  tiny mt-2  lightLead"> Question {{' ' + questionNumber + ' of 5'}} </p>
                    <v-progress-linear fill="" class="col-11  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
                </div>
            </div>

            <div class="mx-auto marginTop50 ">
                <v-btn class="navyBlue largeButton white--text" v-on:click="navigate(0)"> Back
                </v-btn>
            </div>
            <div class="mx-auto marginTop50">
                <v-btn class="navyBlue largeButton white--text" v-on:click="navigate(1)"> Next
                </v-btn>
            </div>

        </div>

    </v-app>
</template>

<script>
    import { questionResults } from '../../../requirements/questionResults'

    export default {
      data () {
        return {
          questionResults: questionResults,
          questionNumber: 1,
          callStack: [
            'OverviewEligibility',
            'ConsentOne',
            'ConsentTwo',
            'ConsentThree',
            'ConsentFour',
            'ConsentFive',
            'ConsentSix',
            'ConsentSeven',
            'ConsentEight',
            'ConsentNine',
            'ConsentTen',
            'ConsentEleven',
            'ConsentTwelve',
            'ConsentThirteen',
            'OverviewEligibility'
        ],
        indexInStack: 1,
        requirements: requirements,
        multiple13: 100.0 / 13,
        progress: 100.0 / 13,
        }
      },
      methods: {
          navigate() {
              this.$router.push()
          }
    }
</script>
