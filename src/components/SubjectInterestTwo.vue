<template>
  <v-app>
    <div class="row progressBar">
        <div class="indicatorFilled offset"> </div>
        <div class="indicatorFilled offset one"> </div>
        <div class="indicatorEmpty offset two"> </div>
        <div class="indicatorEmpty offset three"> </div>
        <div class="indicatorEmpty offset four"> </div>
        <div class="indicatorEmpty offset five"> </div>
    </div>
    <br>
    <br>
  
    <div class="row">
      <p class="lead col-sm-8 ml-6 "> Why are you interested in joining mPower? </p>
      <p class="col-md-10 ml-6 text-left subText dark-lead"> Select your reasons by choosing below. You can remove them by clicking the X. </p>
      <br>
      <br>
        
    </div>
  
    <div class="row">
  
      <br class="visible-md-up">
      <p class="tiny col-md-8 ml-6 text-left lead"> I'd be willing to try </p>
  
      <v-btn v-model="optionOne.color" class="ml-6 round lower lightPurple" @click="handleClick(0)" v-bind:class="{ 'lightPurple': optionOne.color === 'lightPurple', 'darkPurple': optionOne.color === 'darkPurple'}"> Finger Tapping &nbsp;
        <v-icon v-bind:class="{ 'dark': optionOne.color === 'lightPurple'}" center>
          {{optionOne.color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="optionTwo.color" class=" round lower lightPurple" @click="handleClick(1)" v-bind:class="{ 'lightPurple': optionTwo.color === 'lightPurple', 'darkPurple': optionTwo.color === 'darkPurple'}"> Walking &nbsp;
        <v-icon v-bind:class="{ 'dark': optionTwo.color === 'lightPurple'}" center>
          {{optionTwo.color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <v-btn v-model="optionThree.color" class="ml-6-restricted  round lower  lightPurple" @click="handleClick(2)" v-bind:class="{ 'lightPurple': optionThree.color === 'lightPurple', 'darkPurple': optionThree.color === 'darkPurple'}"> Balance &nbsp;
        <v-icon v-bind:class="{ 'dark': optionThree.color === 'lightPurple'}" center>
          {{optionThree.color === 'lightPurple' ? 'fa-plus-circle': 'fa-times'}}
        </v-icon>
      </v-btn>
  
      <br class="visible-md-up">
      <br class="visible-md-up">
  
      <p v-if="containsValues()" class="tiny col-md-8 ml-6 text-left lead"> I'd be willing to do this/these activities: </p>
      <v-flex v-if="containsValues()" class="col-sm-2 ml-6 col-4">
        <v-radio label="Daily" value="radio-1" v-model="radioChoice"></v-radio>
      </v-flex>
      <v-flex v-if="containsValues()" class="col-sm-2 col-8">
        <v-radio value="3x per week" label="3x/week" v-model="radioChoice"></v-radio>
      </v-flex>
      <v-flex v-if="containsValues()" class="col-sm-2 col-6">
        <v-radio value="2x per week" label="2x/week" v-model="radioChoice"></v-radio>
      </v-flex>
      <v-flex v-if="containsValues()" class="col-sm-2 col-6">
        <v-radio value="weekly" label="weekly" v-model="radioChoice"></v-radio>
      </v-flex>
  
    </div>
  
    <div class="row" v-if="radioChoice !== ''">
      <v-btn v-on:click="clicked" id="submit" class="col-md-2 ml-6" light> Submit</v-btn>
    </div>
    </div>
  </v-app>
</template>



<script>
import { Focus } from '../directives/focus.js'
import _ from 'lodash'
export default {
  name: 'subjectInterest',
  data () {
    return {
      radioChoice: '',
      optionOne: {color: 'lightPurple'},
      optionTwo: {color: 'lightPurple'},
      optionThree: {color: 'lightPurple'},
      lightPurpleDisk: 'lightPurple',
      darkPurpleDisk: 'darkPurple',
      turn: false
    }
  },
  computed: {
    selectedChoice: function () {
      return [this.optionOne, this.optionTwo, this.optionThree]
    }
  },
  methods: {
    clicked () {
      this.$router.push('InterestThree')
    },
    scrollPage: _.debounce(
      function (arg1) {
        this.$scrollTo(arg1, 1500, { easing: 'linear' })
      }
    , 200),
    handleClick: function (index) {
      if (this.selectedChoice[index].color === 'darkPurple') {
        this.selectedChoice[index].color = 'lightPurple'
      } else {
        this.selectedChoice[index].color = 'darkPurple'
      }
    },
    containsValues: function () {
      for (var i = 0; i < this.selectedChoice.length; i++) {
        if (this.selectedChoice[i].color === 'darkPurple') {
          return true
        }
      }
      return false
    }
  },
  directives: {
    Focus
  }
}
</script>

<style>
button:disabled {
  opacity: 0.5;
}

.dim {
  opacity: 0.5
}
</style>
