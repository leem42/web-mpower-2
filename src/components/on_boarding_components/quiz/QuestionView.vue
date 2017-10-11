<template>
    <v-app>
        <br>
        <br>
        <br>
        <br>

        <router-view  class="whiteBackground router container-fluid"> </router-view>


    <div class="row anchorBottom customRowHeight">
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text largeTitle" v-on:click="navigate(0)"> < </v-btn>
        </div>

        <div class="col-6 col-md-8 mt-md-3">
            <div clas="row">
                <p class="col-11  tiny mt-md-2  mb-0 lightLead"> Question {{' ' + indexInStack }} </p>
                <v-progress-linear class="col-11 pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text largeTitle" v-on:click="navigate(1)"> > </v-btn>
        </div>

        <div class="marginTop50 col-2 hideOnSmall ml-0 mr-0">
            <v-btn class="navyBlue largeButton medium white--text" v-on:click="navigate(0)"> Back
            </v-btn>
        </div>
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn class="navyBlue largeButton medium white--text" v-on:click="navigate(1)"> Next
            </v-btn>
        </div>

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
          callStack: [
            'OverviewEligibility',
            'QuestionOne',
            'QuestionTwo',
            'QuestionThree',
            'QuestionFour',
            'QuestionFive',
            'OverviewEligibility'
          ],
          indexInStack: 1,
          requirements: requirements,
          multiple5: 100.0 / 5,
          progress: 100.0 / 5
        }
      },
      methods: {
        navigate (index) {
          var frame = ''
          if (index === 0) {
            this.indexInStack = this.indexInStack - 1
            this.progress = this.progress - this.multiple5
          } else {
            this.progress = this.progress + this.multiple5
            this.indexInStack = this.indexInStack + 1
          }
          console.log('navigating')
          console.log(this.indexInStack === 6)
          if (this.indexInStack === 6) {
            var passedTest = JSON.parse(this.questionResults.questionOne) && JSON.parse(this.questionResults.questionTwo) && JSON.parse(this.questionResults.questionThree) && JSON.parse(this.questionResults.questionFour) &&
            JSON.parse(this.questionResults.questionFive)
            console.log('checking if they passed the test')
            if (!passedTest) {
              console.log('they go through')
              this.$router.push({ name: 'RetakeQuiz' })
            } else {
              console.log('they passed the the test')
              this.requirements.isOnConsent = false
              this.requirements.hasCompletedConsent = true
              this.requirements.isOnQuiz = true
            }
          } else {
            frame = this.callStack[this.indexInStack]
            this.$router.push({ name: frame })
          }
        }
      }
    }
</script>


