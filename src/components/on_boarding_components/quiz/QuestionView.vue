<template>
    <v-app>
        <br>

        <router-view  class="whiteBackground router container-fluid"> </router-view>


    <div class="row anchorBottom customRowHeight">
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text medium" v-on:click="navigate(0)"> < </v-btn>
        </div>

        <div class="marginTop50 col-2 hideOnSmall ml-0 mr-0">
            <v-btn class="navyBlue largeButton medium white--text" v-on:click="navigate(0)"> Back
            </v-btn>
        </div>

        <div class="col-6 col-md-8 mt-md-3">
            <div clas="row text-center">
                <p class="col-11  mx-auto text-center tiny mt-md-2  mb-0 lightLead"> Question {{' ' + indexInStack }} </p>
                <v-progress-linear class="col-11 text-center mx-auto pr-0  centerAlign" v-model="progress" height="16" color="success"> </v-progress-linear>
            </div>
        </div>
        
        <div class="col-3 p-0 marginTop50 hideOnLarge text-center">
            <v-btn class="navyBlue white--text  medium"
             v-bind:class="currentStageHasValues() ? '':'lowOpacity'"
            v-on:click="navigate(1)"> Next </v-btn>
        </div>

        
        <div class="marginTop50 col-2 hideOnSmall">
            <v-btn class="navyBlue largeButton medium white--text" 
             v-bind:class="currentStageHasValues() ? '':'lowOpacity'"
             v-on:click="navigate(1)"> Next
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
      computed: {
        keys: function () {
          return Object.keys(questionResults)
        }
      },
      methods: {
        navigate (index) {
          if (!this.currentStageHasValues()) {
            return
          }
          var frame = ''
          if (index === 0) {
            this.indexInStack = this.indexInStack - 1
            this.progress = this.progress - this.multiple5
          } else {
            this.progress = this.progress + this.multiple5
            this.indexInStack = this.indexInStack + 1
          }
          if (this.indexInStack === 6) {
            let failedTest = Object.values(this.questionResults).includes('false')
            if (failedTest) {
              this.$router.push({ name: 'RetakeQuiz' })
            } else {
              this.requirements.isOnQuiz = false
              this.requirements.hasCompletedQuiz = true
              this.requirements.isOnSign = true
              this.$router.push({ name: 'OverviewEligibility' })
            }
          } else if (this.indexInStack >= 6) {
            this.requirements.isOnQuiz = false
            this.requirements.hasCompletedQuiz = true
            this.requirements.isOnSign = true
            this.$router.push({ name: 'OverviewEligibility' })
          } else {
            frame = this.callStack[this.indexInStack]
            this.$router.push({ name: frame })
          }
        },
        currentStageHasValues () {
          return this.questionResults[this.keys[this.indexInStack - 1]] !== null
        }
      }
    }
</script>
